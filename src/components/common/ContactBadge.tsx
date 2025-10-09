import { PhoneCall, Mail, MapPin } from 'lucide-react';
import { FeatureBadge } from '@components/common/FeatureBadge';
import { TooltipWrapper } from '@components/common/TootltipWrapper';

type ContactType = 'phone' | 'email' | 'location';

interface ContactBadgeProps {
  type: ContactType;
  value: string;
  color: string;
}

export const ContactBadge: React.FC<ContactBadgeProps> = ({ type, value, color }) => {
  const getIcon = () => {
    switch (type) {
      case 'phone':
        return <PhoneCall className="w-8 h-8 stroke-3" />;
      case 'email':
        return <Mail className="w-8 h-8 stroke-3" />;
      case 'location':
        return <MapPin className="w-8 h-8" />;
      default:
        return null;
    }
  };

  const getAction = () => {
    switch (type) {
      case 'phone':
        return () => (window.location.href = `tel:${value.replace(/\s+/g, '')}`);
      case 'email':
        return () => (window.location.href = `mailto:${value}`);
      case 'location':
        return () => {
          const query = encodeURIComponent(value);
          window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
        };
      default:
        return () => {};
    }
  };

  const labelMap = {
    phone: 'Click to Call',
    email: 'Send an email',
    location: 'View on map',
  };

  return (
    <TooltipWrapper label={labelMap[type]}>
      <FeatureBadge
        icon={getIcon()}
        title={value}
        description={labelMap[type].replace('Click to ', '')}
        color={color}
        onClick={getAction()}
      />
    </TooltipWrapper>
  );
};

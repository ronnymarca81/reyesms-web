import { Navigate } from 'react-router-dom';
import Benefit from './Benefit';
import Task from './Task';
import { Frequency } from './Frequency';
import CtaSection from './CtaSection';
import { blobConfigs } from '@components/common/blobConfigs';
import ContentGalery from '@components/common/ContentGalery';
import { useServiceBySlug } from '../../../../hooks/useServiceBySlug';
import HeroSection from './HeroSection';

interface SpecificServiceProps {
  serviceType?: keyof typeof blobConfigs; // "office" | "healthcare" | "spa" ...
}

const SpecificService: React.FC<SpecificServiceProps> = ({ serviceType = 'office' }) => {
  const service = useServiceBySlug();
  if (!service) {
    return <Navigate to="*" replace />;
  }

  return (
    <>
      <div className=" relative overflow-hidden bg-gradient-to-br from-blue-950 via-sky-900 to-gray-900">
        {/* Hero Section */}
        <HeroSection
          serviceType={serviceType}
          name={service.name}
          description={service.description}
          //highlightIndex={3}
          visible={true} // Show the button
        />
      </div>
      <ContentGalery
        title={service.name}
        paragraphs={service.paragraphs}
        buttons={[
          {
            children: 'GET A FREE QUOTE',
            variant: 'contact',
            size: 'md',
            href: '/quote',
          },
        ]}
        images={service.images} // ✅ images style carousel
        reverse={false} // set true to swap sides
        backgroundColor="bg-sky-100"
      />

      {/* Other Sections */}
      <Task theme="light" tasks={service.tasks} />
      <Benefit theme="light" benefits={service.benefits} />
      <Frequency theme="light" frequencyOptions={service.frequencies} />
      <CtaSection theme="cta" />
    </>
  );
};

export default SpecificService;

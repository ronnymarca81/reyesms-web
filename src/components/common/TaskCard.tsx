import * as LucideIcons from 'lucide-react';
import type { ComponentType } from 'react';
import type { LucideProps } from 'lucide-react';
import { containerTheme } from '@features/Services/components/SpecificService/ServiceApi';
import type { themeProps } from '@features/Services/components/SpecificService/types';

interface TaskCardProps extends themeProps {
  title: string;
  icon?: keyof typeof LucideIcons;
  label?: string;
  score?: string;
  backgroundImage?: string;
  desc?: string;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  title,
  icon = 'Check',
  label,
  score,
  theme = 'light',
}) => {
  const themeConfig = containerTheme[theme];
  const maybeIcon = LucideIcons[icon];
  const IconComponent =
    typeof maybeIcon === 'function' ? (maybeIcon as ComponentType<LucideProps>) : LucideIcons.Check;

  return (
    <div
      role="listitem"
      className={[
        'flex flex-col justify-between p-6 rounded-xl transition-colors space-y-4',
        themeConfig.card,
        themeConfig.hover,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {/* Top Section: Icon + Title + Label */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
            <IconComponent className="h-6 w-6 text-green-600 flex-shrink-0" />
          </div>
          <div>
            <h3 className={`font-medium ${themeConfig.text}`}>{title}</h3>
            {label && <div className={`text-xs ${themeConfig.subtext}`}>{label}</div>}
          </div>
        </div>
        {score && (
          <div className={`text-2xl font-bold text-emerald-600 ${themeConfig.subtext}`}>
            {score}
          </div>
        )}
      </div>

      {/* Bottom Section: Progress Bar */}
      <div className="w-full bg-slate-100 rounded-full h-2">
        <div className={`${themeConfig.accent} h-2 rounded-full w-full`} />
      </div>
    </div>
  );
};

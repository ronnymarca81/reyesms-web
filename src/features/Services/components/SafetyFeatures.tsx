import { TaskCard } from '@components/common/TaskCard';
import type { SafetyFeature } from '../types';
import type { themeProps } from './SpecificService/types';
import { containerTheme } from './SpecificService/ServiceApi';

interface SafetyFeaturesProps extends themeProps {
  safeties?: SafetyFeature[];
}

export default function SafetyFeatures({ theme = 'light', safeties = [] }: SafetyFeaturesProps) {
  const themeConfig = containerTheme[theme];
  return (
    <section className={`relative z-10 px-6 py-12 ${themeConfig.container}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12 text-center">
          <h2 className={`text-3xl font-bold mb-4 ${themeConfig.text}`}>
            Our company's top priority is{' '}
            <span className="text-red-700 underline decoration-red decoration-4 underline-offset-8">
              customer safety
            </span>
          </h2>
          <p className={`text-base leading-relaxed ${themeConfig.subtext}`}>
            Every service includes these health and safety guarantees
          </p>
          <div
            className={`inline-block mt-4 px-4 py-2 rounded-2xl text-emerald-100 font-bold ${themeConfig.accent} text-sm`}
          >
            Safety Guaranteed
          </div>
        </header>

        {/* Safety Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {safeties.map(({ title, icon, label, score, desc, backgroundImage }, index) => (
            <TaskCard
              key={index}
              title={title}
              icon={icon ?? 'Check'}
              label={label ?? 'Guarantee'}
              score={score ?? '100%'}
              desc={desc}
              backgroundImage={backgroundImage}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

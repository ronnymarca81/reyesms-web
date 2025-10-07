import { ArrowRight, Calendar } from 'lucide-react';
import type { themeProps } from './types.ts';
import { containerTheme } from './ServiceApi';
import { Button } from '@components/common/Button.js';

export default function CtaSection({ theme = 'dark' }: themeProps) {
  const themeConfig = containerTheme[theme];
  return (
    <section className={`relative z-10 py-20 px-6 ${themeConfig.container}`}>
      <div className="max-w-5xl mx-auto">
        <div className={`${themeConfig.card} p-12 rounded-3xl text-center transition-all`}>
          {/* Title */}
          <h3 className={`text-4xl font-bold mb-6 ${themeConfig.text}`}>
            Transform Your Workspace Today
          </h3>
          <p className={`text-xl mb-10 max-w-3xl mx-auto ${themeConfig.subtext}`}>
            Experience the difference professional cleaning makes. Get a customized quote tailored
            to your business needs and schedule.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/quote"
              className={`
                ${themeConfig.accent} 
                hover:opacity-90 text-white px-8 py-4 rounded-2xl font-semibold
                transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2
              `}
            >
              <Calendar className="h-5 w-5" />
              <span>Get a Free Quote</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          {/* Benefits Grid */}
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-400">24/7</div>
              <div className={themeConfig.subtext}>Customer Support</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">100%</div>
              <div className={themeConfig.subtext}>Satisfaction Guaranteed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">5★</div>
              <div className={themeConfig.subtext}>Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

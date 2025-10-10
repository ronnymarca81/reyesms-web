import { useState } from "react";
import type { themeProps } from "./types";
import { containerTheme } from "./ServiceApi";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import  type{ LucideIcon }  from "lucide-react";


export interface BenefitItem {
  icon: IconName;
  stat: string;
  unit: string;
  metric: string;
  title: string;
  desc: string;
}
export type IconName = keyof typeof LucideIcons;
interface BenefitProps extends themeProps {
  benefits: BenefitItem[];
}


export default function Benefit({ theme = "light", benefits }: BenefitProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const currentTheme = containerTheme[theme];
  
  const resolveIcon = (name: string): LucideIcon => {
    const icon = LucideIcons[name as keyof typeof LucideIcons] as unknown;
    if (icon && typeof icon === "object" && "displayName" in icon) {
      return icon as LucideIcon;
    }
    return LucideIcons.HelpCircle;
  };

  return (
    <section className={`relative z-10 py-12 px-6 ${currentTheme.container}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-Left mb-6">
          <h2 className={`text-2xl font-bold mb-2 ${currentTheme.text}`}>
            Business Impact Metrics
          </h2>
          <p className={`text-sm leading-relaxed ${currentTheme.subtext}`}>
            Real-world benefits of professional service
          </p>
        </div>
        {/* Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {benefits.map((benefit, index) => {
            const Icon = resolveIcon(benefit.icon);
            return (
              <motion.div
                key={index}
                className="group cursor-pointer"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div
                  className={`
                    ${currentTheme.card}
                    p-6 rounded-xl transition-all duration-500 h-full flex flex-col justify-between
                    transform hover:scale-105 hover:-translate-y-4
                    ${currentTheme.hover}
                    ${hovered === index ? 'shadow-2xl ring-2 ring-indigo-400/40' : 'shadow-md'}
                  `}
                >
                  <div className="text-left">
                    {/* Icon */}
                    <div
                      className={`${currentTheme.accent} p-4 rounded-full mx-auto w-14 h-14  mb-6 
                      flex items-center justify-center transition-transform duration-300
                      group-hover:scale-110 shadow-md`}
                    >
                      <Icon className="h-8 w-8 text-white" aria-hidden="true" />
                    </div>
                    <div className="mb-4">
                      <div className="flex items-baseline gap-1">
                        {/* Stat */}
                        <div className={`text-5xl font-bold mb-2 ${currentTheme.text}`}>
                          {benefit.stat}
                        </div>
                        {/* unit */}
                        <div className={`text-2xl font-bold mb-2 ${currentTheme.text}`}>
                          {benefit.unit}
                        </div>
                      </div>
                    </div>
                    {/* Metric */}
                    <div className="text-indigo-400 text-sm mb-4 font-medium">{benefit.metric}</div>

                    {/* Title */}
                    <h3 className={`font-semibold text-lg mb-3 ${currentTheme.text}`}>
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-sm leading-relaxed ${currentTheme.subtext}`}>
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


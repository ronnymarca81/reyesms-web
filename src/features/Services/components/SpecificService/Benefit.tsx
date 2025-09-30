import { useState } from "react";
import type { themeProps } from "./types";
import { containerTheme } from "./ServiceApi";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import  type{ LucideIcon }  from "lucide-react";


export interface BenefitItem {
  icon: IconName;
  stat: string;
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
    <section className={`relative z-10 py-16 px-6 ${currentTheme.container}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className={`text-4xl font-bold mb-4 ${currentTheme.text}`}>
            Key Benefits
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* Benefit Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = resolveIcon(benefit.icon);
            //const Icon = iconMap[benefit.icon] ?? Bug;

            //const Icon = benefit.icon;

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
                    p-8 rounded-2xl transition-all duration-500
                    transform hover:scale-105 hover:-translate-y-4
                    ${currentTheme.hover}
                    ${
                      hovered === index
                        ? "shadow-2xl ring-2 ring-indigo-400/40"
                        : "shadow-md"
                    }
                  `}
                >
                  <div className="text-center">
                    {/* Icon */}
                    <div
                      className={`${currentTheme.accent} p-4 rounded-full w-16 h-16 mx-auto mb-6 
                      flex items-center justify-center transition-transform duration-300
                      group-hover:scale-110 shadow-md`}
                    >
                      <Icon className="h-8 w-8 text-white" aria-hidden="true" />
                    </div>

                    {/* Stat */}
                    <div
                      className={`text-4xl font-bold mb-2 ${currentTheme.text}`}
                    >
                      {benefit.stat}
                    </div>

                    {/* Metric */}
                    <div className="text-indigo-400 text-sm mb-4 font-medium">
                      {benefit.metric}
                    </div>

                    {/* Title */}
                    <h4
                      className={`font-semibold text-lg mb-3 ${currentTheme.text}`}
                    >
                      {benefit.title}
                    </h4>

                    {/* Description */}
                    <p
                      className={`text-sm leading-relaxed ${currentTheme.subtext}`}
                    >
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


import { useState } from "react";
import { benefits } from "./ServiceApi";

interface ThemeConfig {
  container: string;
  text: string;
  card: string;
  border: string;
  hover: string;
  accent: string;
  subtext: string;
}

const themes: Record<"light" | "dark" | "gradient", ThemeConfig> = {
  light: {
    container: "bg-gray-50",
    text: "text-gray-900",
    card: "bg-white shadow-sm border border-gray-200",
    border: "border-gray-200",
    hover: "hover:bg-gray-100",
    accent: "bg-gradient-to-br from-blue-500 to-indigo-600",
    subtext: "text-gray-600"
  },
  dark: {
    container: "bg-neutral-950",
    text: "text-gray-100",
    card: "bg-neutral-900 border border-neutral-800 shadow-md",
    border: "border-neutral-800",
    hover: "hover:bg-neutral-800",
    accent: "bg-gradient-to-br from-indigo-400 to-emerald-400",
    subtext: "text-gray-400"
  },
  gradient: {
    container: "bg-gradient-to-br from-sky-50 via-indigo-50 to-rose-50",
    text: "text-gray-900",
    card: "bg-white/80 border border-gray-200 backdrop-blur-md shadow-md",
    border: "border-gray-200",
    hover: "hover:bg-white",
    accent: "bg-gradient-to-br from-pink-500 via-violet-500 to-indigo-500",
    subtext: "text-gray-700"
  }
};

interface BenefitProps {
  theme?: "light" | "dark" | "gradient";
}

export default function Benefit({ theme = "light" }: BenefitProps) {
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  const currentTheme = themes[theme];

  return (
    <section className={`relative z-10 py-16 px-6 ${currentTheme.container}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h3 className={`text-4xl font-bold mb-4 ${currentTheme.text}`}>
            Key Benefits
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}
              >
                <div
                  className={`
                    ${currentTheme.card}
                    p-8 rounded-2xl transition-all duration-500 transform 
                    hover:scale-105 hover:-translate-y-4 ${currentTheme.hover}
                    ${
                      hoveredBenefit === index
                        ? "shadow-2xl ring-2 ring-offset-2 ring-offset-transparent ring-indigo-400/40"
                        : ""
                    }
                  `}
                >
                  <div className="text-center">
                    {/* Icon */}
                    <div
                      className={`${currentTheme.accent} p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform shadow-md`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
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
                    <p className={`text-sm ${currentTheme.subtext}`}>
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { tasks, containerTheme, DEFAULT_HOVER_BG } from "./ServiceApi";
import type { themeProps } from "./types";

export default function Task({ theme = "light" }: themeProps) {
  const [animateElements, setAnimateElements] = useState(false);

  useEffect(() => {
    setAnimateElements(true);
  }, []);

  const themeConfig = containerTheme[theme];

  return (
    <section className={`relative z-10 py-16 px-6 ${themeConfig.container}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h3 className={`text-4xl font-bold mb-4 ${themeConfig.text}`}>
            What We DO
          </h3>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
        </div>

        {/* Tasks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tasks.map((task, index) => {
            const IconComponent = task.icon;
            const hoverBg = task.backgroundImage || DEFAULT_HOVER_BG;

            return (
              <div
                key={index}
                className={`
                  ${themeConfig.card} 
                  p-8 rounded-2xl transition-all duration-500 transform group
                  relative overflow-hidden
                  ${
                    animateElements
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }
                  hover:-translate-y-2 hover:scale-105 hover:shadow-2xl
                `}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Hover Background Image */}
                <div
                  className="absolute inset-0 rounded-2xl transition-all duration-500 transform scale-110 group-hover:scale-100 group-hover:opacity-70 opacity-0 z-0"
                  style={{
                    backgroundImage: `url(${hoverBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                ></div>

                {/* Dark Overlay for readability */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-0 transition-opacity rounded-2xl z-0"></div>

                {/* Icon */}
                <div
                  className={`
                    ${themeConfig.accent} 
                    p-4 rounded-xl w-16 h-16 mb-6 
                    transition-transform duration-500 relative z-10
                    group-hover:-translate-x-6 group-hover:-translate-y-6
                    flex items-center justify-center
                  `}
                >
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Title */}
                <h4
                  className={`font-bold text-xl mb-3 ${themeConfig.text} relative z-10`}
                >
                  {task.title}
                </h4>

                {/* Description */}
                <p className={`${themeConfig.subtext} relative z-10`}>
                  {task.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

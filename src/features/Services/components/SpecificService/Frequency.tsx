import { useState } from "react";
import { Clock } from "lucide-react";
import type { themeProps, FrequencyOption } from "./types.ts";
import { containerTheme } from "./ServiceApi";

interface FrequencyProps extends themeProps {
  frequencyOptions: Record<string, FrequencyOption>;
}

export const Frequency = ({
  theme = "dark",
  frequencyOptions
}: FrequencyProps) => {
  const [activeFrequency, setActiveFrequency] = useState(
    Object.keys(frequencyOptions)[0]
  );
  const t = containerTheme[theme];

  return (
    <section
      className={`${t.container} relative z-10 py-12 px-6 transition-colors duration-300  `}
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="text-left mb-6">
          <h2 className={`text-2xl font-bold mb-2 ${t.text}`}>
            Flexible Scheduling
          </h2>
          <p className={`text-sm leading-relaxed ${t.subtext}`}>
            Choose the perfect plan schedule for your business
          </p>
        </div>

        {/* Frequency Buttons */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] mx-auto gap-4 mb-12">
          {Object.entries(frequencyOptions).map(([key, freq]) => {
            const isActive = activeFrequency === key;
            return (
              <button
                key={key}
                onClick={() => setActiveFrequency(key)}
                className={`p-6 rounded-2xl border-2 transition-all transform hover:scale-105 
                  ${
                    isActive
                      ? "bg-gradient-to-br from-blue-500 to-sky-300 border-blue-400 text-white shadow-2xl"
                      : `${t.card} ${t.border} ${t.text} ${t.hover}`
                  }`}
              >
                <div className="text-center">
                  <Clock className="h-8 w-8 mx-auto mb-3" />
                  <h4 className="font-bold text-lg capitalize mb-2">{key}</h4>
                  <div className={`text-sm ${t.subtext}`}>{freq.visits}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Frequency Card */}
        <div
          className={`p-8 rounded-2xl border text-center ${t.card} ${t.border}`}
        >
          <h4 className={`text-2xl font-bold mb-4 capitalize ${t.text}`}>
            {activeFrequency} Plan
          </h4>
          <div
            className={`grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 ${t.text}`}
          >
            <div>
              <div className="text-3xl font-bold">
                {frequencyOptions[activeFrequency].price}
              </div>
              <div className={`${t.subtext}`}>Price Range</div>
            </div>
            <div>
              <div className={`text-3xl rounded-2xl font-bold ${t.accent}`}>
                {frequencyOptions[activeFrequency].visits}
              </div>
              <div className={` ${t.subtext}`}>Service Frequency</div>
            </div>
            <div>
              <div className="text-lg font-semibold">
                {frequencyOptions[activeFrequency].best}
              </div>
              <div className={`${t.subtext}`}>Best For</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

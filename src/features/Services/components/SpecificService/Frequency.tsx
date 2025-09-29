import { useState } from "react";
import { Clock } from "lucide-react";
import { frequencies } from "./ServiceApi";

// Theme options type
export type ContainerThemeKey = "light" | "dark" | "gradient";

interface ThemeConfig {
  container: string;
  text: string;
  card: string;
  border: string;
  hover: string;
  accent: string; // for highlighting values
  subtext: string;
}

export const containerTheme: Record<ContainerThemeKey, ThemeConfig> = {
  light: {
    container: "bg-gray-50",
    text: "text-gray-900",
    card: "bg-white shadow-sm border border-gray-200",
    border: "border-gray-200",
    hover: "hover:bg-gray-100",
    accent: "text-indigo-600",
    subtext: "text-gray-600"
  },
  dark: {
    container: "bg-neutral-950",
    text: "text-gray-100",
    card: "bg-neutral-900 shadow-lg border border-neutral-800",
    border: "border-neutral-800",
    hover: "hover:bg-neutral-800",
    accent: "text-emerald-400",
    subtext: "text-gray-400"
  },
  gradient: {
    container: "bg-gradient-to-br from-slate-50 via-indigo-50 to-sky-100",
    text: "text-gray-900",
    card: "bg-white/80 shadow-md border border-gray-200 backdrop-blur-sm",
    border: "border-gray-200",
    hover: "hover:bg-white",
    accent: "text-indigo-500",
    subtext: "text-gray-700"
  }
};

interface Props {
  theme: ContainerThemeKey;
}

export const Frequency = ({ theme }: Props) => {
  const [activeFrequency, setActiveFrequency] = useState("weekly");
  const t = containerTheme[theme]; // shorthand theme config

  return (
    <section
      className={`${t.container} relative z-10 py-16 px-6 transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className={`text-4xl font-bold mb-2 ${t.text}`}>
            Flexible Scheduling
          </h3>
          <p className={`text-lg ${t.subtext}`}>
            Choose the perfect cleaning schedule for your business
          </p>
        </div>

        {/* Frequency Buttons */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {Object.entries(frequencies).map(([key, freq]) => {
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
            {activeFrequency} Cleaning
          </h4>
          <div className={`grid md:grid-cols-3 gap-6 ${t.text}`}>
            <div>
              <div className={`text-3xl font-bold ${t.accent}`}>
                {frequencies[activeFrequency as keyof typeof frequencies].price}
              </div>
              <div className={`${t.subtext}`}>Price Range</div>
            </div>
            <div>
              <div className={`text-3xl font-bold ${t.accent}`}>
                {
                  frequencies[activeFrequency as keyof typeof frequencies]
                    .visits
                }
              </div>
              <div className={`${t.subtext}`}>Service Frequency</div>
            </div>
            <div>
              <div className="text-lg font-semibold">
                {frequencies[activeFrequency as keyof typeof frequencies].best}
              </div>
              <div className={`${t.subtext}`}>Best For</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

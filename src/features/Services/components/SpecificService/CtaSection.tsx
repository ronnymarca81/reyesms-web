import { Calendar, Phone } from "lucide-react";

// Theme configuration
export interface ThemeConfig {
  container: string;
  text: string;
  card: string;
  border: string;
  hover: string;
  accent: string;
  subtext: string;
}

export const containerTheme: Record<
  "light" | "dark" | "gradient" | "cta",
  ThemeConfig
> = {
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
  },
  cta: {
    container: "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-00",
    text: "text-white",
    card: "bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl",
    border: "border-white/30",
    hover: "hover:bg-white/20",
    accent: "bg-gradient-to-r from-yellow-400 to-orange-500",
    subtext: "text-white/80"
  }
};

// Props
export interface BenefitProps {
  theme?: "light" | "dark" | "gradient" | "cta";
}

export default function CtaSection({ theme = "dark" }: BenefitProps) {
  const themeConfig = containerTheme[theme];

  return (
    <section className={`relative z-10 py-20 px-6 ${themeConfig.container}`}>
      <div className="max-w-5xl mx-auto">
        <div
          className={`${themeConfig.card} p-12 rounded-3xl text-center transition-all`}
        >
          {/* Title */}
          <h3 className={`text-4xl font-bold mb-6 ${themeConfig.text}`}>
            Transform Your Workspace Today
          </h3>
          <p
            className={`text-xl mb-10 max-w-3xl mx-auto ${themeConfig.subtext}`}
          >
            Experience the difference professional cleaning makes. Get a
            customized quote tailored to your business needs and schedule.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              className={`
                ${themeConfig.accent} 
                hover:opacity-90 text-white px-8 py-4 rounded-2xl font-semibold
                transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2
              `}
            >
              <Phone className="h-5 w-5" />
              <span>Call for Free Quote</span>
            </button>

            <button
              className={`
                border-2 ${themeConfig.border} ${themeConfig.text} 
                ${themeConfig.hover} px-8 py-4 rounded-2xl font-semibold
                transition-all transform hover:scale-105 flex items-center space-x-2
              `}
            >
              <Calendar className="h-5 w-5" />
              <span>Schedule Online</span>
            </button>
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

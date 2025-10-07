import { Check } from "lucide-react";
import { containerTheme } from "./ServiceApi";
import type { themeProps } from "./types";
import * as LucideIcons from "lucide-react";

export interface TaskItem {
  icon: IconName;
  title: string;
  desc: string;
  backgroundImage?: string;
}
export type IconName = keyof typeof LucideIcons;
interface TaskProps extends themeProps {
  tasks: TaskItem[];

}

export default function Task({ theme = "light", tasks }: TaskProps) {
  const themeConfig = containerTheme[theme];
  return (
    <section
      className={`relative z-10 px-6 py-12 ${themeConfig.container}`}
      aria-labelledby="task2-heading"
    >
      <div className="max-w-7xl mx-auto ">
        <div className="flex items-center justify-between mb-6">
          <div className="">
            <h2 className={`text-2xl font-bold mb-2 ${themeConfig.text}`}>
              Comprehensive Tasks
            </h2>
            <p className={`text-sm leading-relaxed ${themeConfig.subtext}`}>
              All tasks included in your plan
            </p>
          </div>

          <div
            className={`px-4 py-2 rounded-2xl text-emerald-100 font-bold ${themeConfig.accent} text-sm`}
          >
            Satisfaction Guaranteed
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tasks.map((task, index) => (
            <div
              key={index}
              role="listitem"
              className={[
                "flex flex-col justify-between p-6 rounded-xl transition-colors space-y-4",
                themeConfig.card,
                themeConfig.hover
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {/* Top Section: Icon + Title + Guarantee */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <Check className="h-6 w-6 text-green-600 flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className={`font-medium ${themeConfig.text}`}>
                      {task.title}
                    </h3>
                    <div className={`text-xs ${themeConfig.subtext}`}>
                      Guarantee
                    </div>
                  </div>
                </div>
                <div
                  className={`text-2xl font-bold text-emerald-600 ${themeConfig.subtext}`}
                >
                  100%
                </div>
              </div>

              {/* Bottom Section: Progress Bar */}
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div
                  className={`${themeConfig.accent} h-2 rounded-full w-full`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

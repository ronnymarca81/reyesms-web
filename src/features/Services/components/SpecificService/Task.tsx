import { CheckCircle } from "lucide-react";
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
  service?: string;
}

export default function Task({ theme = "light", tasks, service }: TaskProps) {
  const themeConfig = containerTheme[theme];
  return (
    <section
      className={`relative z-10 py-16 px-6 ${themeConfig.container}`}
      aria-labelledby="task2-heading"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h3
          id="task2-heading"
          className={`text-4xl font-bold mb-8 ${themeConfig.text}`}
        >
          Comprehensive {service} Tasks
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {tasks.map((task, index) => {
            return (
              <div
                key={index}
                className={[
                  "flex items-center space-x-4 p-6 rounded-xl transition-colors",
                  themeConfig.card,
                  themeConfig.hover
                ]
                  .filter(Boolean)
                  .join(" ")}
                role="listitem"
              >
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className={`font-medium ${themeConfig.text}`}>
                  {task.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { containerTheme } from './ServiceApi';
import type { themeProps, TaskItem } from './types';
import { TaskCard } from '@components/common/TaskCard';

interface TaskProps extends themeProps {
  tasks: TaskItem[];
}

export default function Task({ theme = 'light', tasks }: TaskProps) {
  const themeConfig = containerTheme[theme];

  return (
    <section
      className={`relative z-10 px-6 py-12 ${themeConfig.container}`}
      aria-labelledby="task2-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className={`text-2xl font-bold mb-2 ${themeConfig.text}`}>Comprehensive Tasks</h2>
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

        {/* Task Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {tasks.map(({ title, icon, label, score, desc, backgroundImage }, index) => (
            <TaskCard
              key={index}
              title={title}
              icon={icon}
              label={label}
              score={score}
              desc={desc}
              backgroundImage={backgroundImage}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import type { StepProps } from "../types";

interface StepCardProps {
  step: StepProps;
}

const StepCard = ({ step }: StepCardProps) => {
  const Icon = step.icon;

  return (
    <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg hover:border-3 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div
          className={`w-14 h-14 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md`}
        >
          {Icon && <Icon className={`w-6 h-6 stroke-2 text-blue-400 `} />}
        </div>
        <div
          className={`inline-block px-4 py-1.5 bg-gradient-to-r ${step.color} text-sky-800 rounded-full text-sm font-medium mb-4`}
        >
          Step {step.number}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">
        {step.description}
      </p>
    </div>
  );
};

export default StepCard;

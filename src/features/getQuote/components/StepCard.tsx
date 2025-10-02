import type { StepProps } from "../types";

interface StepCardProps {
  step: StepProps;
}

const StepCard = ({ step }: StepCardProps) => {
  const Icon = step.icon;

  return (
    <div className="w-full px-4 mb-10">
      <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gray-200 hover:-translate-y-2 transform">
        {/* Icon */}
        <div
          className={`w-14 h-14 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md`}
        >
          {Icon && <Icon className="w-7 h-7 text-white" />}
        </div>
        {/* Step Badge */}
        <span className="inline-block px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm font-medium mb-4">
          Step {step.number}
        </span>
        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>

        {/* Description */}
        {/* <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>         */}
      </div>
    </div>
  );
};

export default StepCard;

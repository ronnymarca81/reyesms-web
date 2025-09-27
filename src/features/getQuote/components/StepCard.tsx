import { Star } from "lucide-react";
import type { Steps } from "../types";

interface StepCardProps {
  step: Steps;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const StepCard = ({
  step,
  index,
  isHovered,
  onHover,
  onLeave
}: StepCardProps) => {
  const Icon = step.icon;

  return (
    <div
      className="relative group"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        className={`relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 transition-all duration-500 hover:bg-white/20 hover:border-white/30 ${
          isHovered ? "transform scale-105" : ""
        }`}
      >
        {/* Floating Elements */}
        <div
          className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80 animate-bounce"
          style={{ animationDelay: `${index * 0.2}s` }}
        />
        <div
          className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-70 animate-ping"
          style={{ animationDelay: `${index * 0.3}s` }}
        />

        {/* Icon */}
        <div
          className={`relative w-20 h-20 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform shadow-lg`}
        >
          {Icon && <Icon className="w-10 h-10 text-white stroke-3" />}
          <div
            className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${step.color} opacity-50 blur-lg group-hover:opacity-75 transition-opacity`}
          />
        </div>

        {/* Step number + stars */}
        <div className="flex items-center mb-4">
          <span className="text-4xl font-bold text-white/50 mr-4">
            {step.number}
          </span>
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i <= index
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-white/30"
                } transition-colors`}
              />
            ))}
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
        <p className="text-purple-100 leading-relaxed mb-6">
          {step.description}
        </p>

        {/* Progress Bar */}
        <div className="mt-6 bg-white/10 rounded-full h-2 overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${step.color} transition-all duration-1000 ease-out`}
            style={{ width: isHovered ? "100%" : "0%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default StepCard;

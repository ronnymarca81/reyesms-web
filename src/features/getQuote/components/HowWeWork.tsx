import { useState } from "react";

import { defaultSteps } from "../serviceApi";
import StepCard from "./StepCard";
import  Info  from './Info'
import Request  from "./Request";

interface DisplayProps {
  background?: string; // tailwind class or custom style
}
const HowWeWork = ({
  background = "bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900"
}: DisplayProps) => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const Display = () => {
    return (
      <div className={`min-h-screen relative overflow-hidden ${background}`}>
        <div className="relative z-10 container mx-auto px-6 py-20">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold text-white mb-6">How We Work</h2>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              Simple 3 Steps Process
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {defaultSteps.map((step, index) => (
              <StepCard
                key={index}
                step={step}
                index={index}
                isHovered={hoveredStep === index}
                onHover={() => setHoveredStep(index)}
                onLeave={() => setHoveredStep(null)}
              />
            ))}
          </div>
          <div
            className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-7xl mx-auto items-start my-8
          "
          >
            {/* Simple Steps Component - Equal width on desktop */}
            <div className="w-full md:w-1/2 md:sticky md:top-8 mb-8">
              <Info />
            </div>
            {/* Get Estimate Form Component - Equal width on desktop */}
            <div className="w-full md:w-1/2 md:sticky md:top-8 mb-8">
              <Request />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      <Display />
    </div>
  );
};

export default HowWeWork;

import { useState } from "react";

import { defaultSteps } from "../serviceApi";
import StepCard from "./StepCard";
import { Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface DisplayProps {
  background?: string; // tailwind class or custom style
}
const HowWeWork = ({
  background = "bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900"
}: DisplayProps) => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const navigate = useNavigate()
  const handleGetQuote = () => {
    navigate("/quote");
  };

  const Display = () => {
    return (
      <div className={`relative overflow-hidden ${background}`}>
        <div className="relative z-10 container mx-auto px-6 py-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold text-white mb-6">How We Work</h2>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              Simple 4 Steps Process
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
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
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <button
              onClick={handleGetQuote}
              className="bg-white/20 backdrop-blur-xl text-white font-semibold py-4 px-8 rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 flex items-center space-x-3 mx-auto group"
            >
              <span>GET A QUOTE</span>
              <Zap className="w-5 h-5 group-hover:animate-pulse stroke-3" />
            </button>
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

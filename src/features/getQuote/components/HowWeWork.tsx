import { Button } from "@components/common/Button";
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
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
              How We Work
            </h2>
            <p className="text-lg md:text-xl text-purple-200 max-w-xl mx-auto">
              A simple 4-step process to spotless results
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {defaultSteps.map((step, index) => (
              <StepCard key={index} step={step} />
            ))}
          </div>
          {/* Bottom CTA */}
          <div className="mt-10 text-center">
            <Button
              variant="custom"
              size="md"
              className="inline-flex items-center  gap-3 mx-auto group bg-white/10 hover:bg-white/20 text-white font-medium py-4 px-10 rounded-full border border-white/30 transition-all duration-300 "
              href="/quote"
            >
              <span className="text-lg">Get a Quote</span>
              <Zap className="w-5 h-5 group-hover:animate-pulse stroke-[2.5]" />
            </Button>
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

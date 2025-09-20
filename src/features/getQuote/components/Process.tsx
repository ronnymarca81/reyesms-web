import React, { useEffect, useState } from "react";
//import Box from "./box";
import { defaultSteps } from "../serviceApi";
import Step from "./Step";
import Info from "./Info";
import Request from "./Request";

const Process: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="w-full bg-sky-100 py-16 px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <h2
          className={`text-4xl font-bold text-gray-800 mb-4
            transition-all duration-1000 ease-out
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }
          `}
        >
          Simple 3 Steps Process
        </h2>
        <div
          className={`w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        />
      </div>
      {/*Steps section*/}
      <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-8">
        {defaultSteps.map((step, index) => (
          <Step
            key={index}
            number={step.number}
            title={step.title}
            description={step.description}
            showArrow={step.showArrow}
            isVisible={isVisible}
            delay={1000 + index * 200} // Staggered animation
          />
        ))}
      </div>
      {/* contact and request a quote Section */}
      <div className="bg-sky-100 container mx-auto px-2 py-1 mb-8">
        <div
          className={`flex flex-col md:flex-row gap-8 md:gap-12 max-w-7xl mx-auto items-start
        transition-all duration-1000 ease-out
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }
          `}
          style={{ transitionDelay: "1000ms" }}
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

export default Process;

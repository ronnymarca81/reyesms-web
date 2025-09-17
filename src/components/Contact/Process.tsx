import React from "react";
import Box from "./box";
import { defaultSteps } from "./types";
//import Step from "./Step";

const Process: React.FC = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Simple 3 Steps Process
        </h2>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-8">
        {defaultSteps.map((step, index) => (
          <Box
            key={index}
            number={step.number}
            title={step.title}
            description={step.description}
            showArrow={step.showArrow}
          />
        ))}
      </div>
      {/* <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-8">
        {defaultSteps.map((step, index) => (
          <Step
            key={index}
            number={step.number}
            title={step.title}
            description={step.description}
            showArrow={step.showArrow}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Process;

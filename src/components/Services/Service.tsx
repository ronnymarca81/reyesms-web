import React from "react";
import { Card } from "./Card";
import { defaultServicesData } from "./types";


interface ServicesProps {
  services: typeof defaultServicesData;
  onServiceLearnMore?: (serviceTitle: string) => void;
}

// Services Component - Wraps multiple Card components
const Service: React.FC<ServicesProps> = ({
  services,
  onServiceLearnMore
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Services Header */}
      <div className="text-center mb-16">
        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
          OUR SERVICES
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          Tailored Coaching for Growth and Success
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Unlock your potential with our comprehensive coaching services
          designed to drive meaningful change and sustainable growth.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card
            key={service.id}
            image={service.image}
            title={service.title}
            description={service.description}
            onLearnMore={() => onServiceLearnMore?.(service.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default Service;


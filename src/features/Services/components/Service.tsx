import React from "react";
import { CardService } from "./CardService";
import { defaultServicesData } from "../../../myTypes/ServiceApi";

interface ServicesProps {
  services: typeof defaultServicesData;
  onServiceLearnMore?: (serviceLink: string) => void;
}

// Services Component - Wraps multiple Card components
const Service: React.FC<ServicesProps> = ({ services, onServiceLearnMore }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <CardService
            key={service.id}
            image={service.image}
            title={service.title}
            description={service.description}
            onLearnMore={() => onServiceLearnMore?.(service.href)}
          />
        ))}
      </div>
    </div>
  );
};

export default Service;

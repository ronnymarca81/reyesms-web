import React from 'react';
import { CardService } from './CardService';
import { defaultServicesData } from '@myTypes/ServiceApi';

interface ServicesProps {
  services: typeof defaultServicesData;
}

const Service: React.FC<ServicesProps> = ({ services }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <CardService
            key={service.id}
            image={service.image}
            title={service.title}
            description={service.description}
            href={service.href}
          />
        ))}
      </div>
    </div>
  );
};

export default Service;

import React, { useState } from 'react';
import { Handshake, Users, CalendarClock, ShieldCheck } from 'lucide-react';
import { Button } from '@components/common/Button';
import ContentOne from '@components/common/ContentOne';
import Gear from './Gear';
import Card from './Card';

const WhyChoose: React.FC = () => {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const cards = [
    {
      id: 'team',
      title: 'Experienced Team',
      description: 'Our highly skilled professionals bring years of expertise to every job...',
      icon: <Users />,
      color: 'blue',
    },
    {
      id: 'service',
      title: 'Reliable Service',
      description: 'Count on us for consistent, punctual, and dependable service...',
      icon: <Handshake />,
      color: 'darkBlue',
    },
    {
      id: 'quality',
      title: 'Quality Standards',
      description:
        'We adhere to the highest industry benchmarks, employing rigorous quality control...',
      icon: <ShieldCheck />,
      color: 'darkBlue',
    },
    {
      id: 'scheduling',
      title: 'Flexible Scheduling',
      description: 'Your business operates on its own schedule, and so do we...',
      icon: <CalendarClock />,
      color: 'blue',
    },
  ];

  return (
    <div className="bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-16 items-center justify-items-center">
              {cards.map(({ id, title, description, icon, color }, index) => (
                <div key={id} className="flex flex-col items-center group">
                  {index < 2 ? (
                    <>
                      <Card
                        title={title}
                        description={description}
                        position="right"
                        isOpen={activeCardId === id}
                      />
                      <Gear
                        image={icon}
                        color={color}
                        linePosition="right"
                        onClick={() => setActiveCardId((prev) => (prev === id ? null : id))}
                      />
                    </>
                  ) : (
                    <>
                      <Gear
                        image={icon}
                        color={color}
                        linePosition="right"
                        onClick={() => setActiveCardId((prev) => (prev === id ? null : id))}
                      />
                      <Card
                        title={title}
                        description={description}
                        position="right"
                        isOpen={activeCardId === id}
                      />
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Decorative Lines */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gray-300 transform -translate-y-1/2" />
              <div className="absolute left-1/2 top-1/4 bottom-1/4 w-0.5 bg-gray-300 transform -translate-x-1/2" />
            </div>
          </div>

          <ContentOne
            title="Why Choose Reyes Maintenance Service?"
            contents={[
              'With years of experience serving Canadian businesses, **Reyes Maintenance Service Inc.** has built a reputation for reliability, professionalism, and exceptional results...',
              'Our comprehensive approach combines modern equipment, eco-friendly cleaning products, and highly trained staff to deliver superior results...',
            ]}
            buttons={[
              <Button variant="contact" size="md" href="/contact" key="contact-btn">
                CONTACT US
              </Button>,
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;

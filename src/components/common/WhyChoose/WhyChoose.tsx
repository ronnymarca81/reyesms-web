import React from 'react';
import type {
  CardProps,
} from "./types.ts";
import { BarChart3, Handshake , Users, Monitor } from 'lucide-react';
import { Button } from '../Button';
import ContentOne from '../ContentOne';
import { Gear }  from './Gear'




const Card: React.FC<CardProps> = ({ title, description, position }) => {
  const positionClasses = position === 'top' ? 'mb-8' : 'mt-8';
  
  return (
    <div
      className={`text-center  max-w-xs hover:border-t-4 rounded-4xl my-3 ${positionClasses}`}
    >
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-md leading-relaxed">
        {description}
      </p>
    </div>
  );
};
const WhyChoose: React.FC = () => {
  return (
    <div className="bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Gears and Cards */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-16 items-center justify-items-center">
              {/* Top Row */}
              <div className="flex flex-col items-center hover:bg-gray-300 rounded-4xl">
                <Card
                  title="Products"
                  description="High-quality supplies for every cleaning need."
                  position="top"
                />
                <Gear
                  image={<BarChart3 />}
                  color="blue"
                  size="small"
                  linePosition="right"
                />
              </div>
              <div className="flex flex-col items-center hover:bg-gray-300 rounded-4xl">
                <Card
                  title="Partnership"
                  description="Collaborating for comprehensive solutions."
                  position="top"
                />
                <Gear image={<Handshake />} color="darkBlue" size="large" />
              </div>
              {/* Bottom Row */}
              <div className="flex flex-col items-center hover:bg-gray-300 rounded-4xl">
                <Gear
                  image={<Monitor />}
                  color="darkBlue"
                  size="large"
                  linePosition="right"
                />
                <Card
                  title="Service"
                  description="The core of our offering and commitment."
                  position="bottom"
                />
              </div>
              <div className="flex flex-col items-center hover:bg-gray-300 rounded-4xl">
                <Gear image={<Users />} color="blue" size="small" />
                <Card
                  title="Staff & Equipment"
                  description="Trained professionals and modern tools."
                  position="bottom"
                />
              </div>
            </div>

            {/* Connecting lines overlay */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Horizontal connecting line */}
              <div className="absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gray-300 transform -translate-y-1/2" />
              {/* Vertical connecting line */}
              <div className="absolute left-1/2 top-1/4 bottom-1/4 w-0.5 bg-gray-300 transform -translate-x-1/2" />
            </div>
          </div>

          {/* Right side - Content */}
          <ContentOne
            title="Why Choose Reyes Maintenance Service?"
            contents={[
              "With years of experience serving Canadian businesses, **Reyes" +
                "Maintenance Service Inc.** has built a reputation for reliability, " +
                "professionalism, and exceptional results. We understand that a clean " +
                "workspace isn't just about appearance, it's about creating a healthy," +
                "productive environment for your employees and a positive impression" +
                "for your clients.",
              "Our comprehensive approach combines state-of-the-art equipment" +
                "eco-friendly cleaning products, and highly trained staff to deliver" +
                "superior results. We're not just a cleaning service; we're your" +
                "facility maintenance partner, committed to maintaining the highest" +
                "standards of cleanliness and hygiene in your commercial space."
            ]}
            buttons={[
              <Button variant="contact" size="md" href="/contact">
                CONTACT US
              </Button>
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;

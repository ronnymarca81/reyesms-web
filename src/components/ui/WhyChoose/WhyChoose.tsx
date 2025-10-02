import React from "react";
import { BarChart3, Handshake, Users, Monitor } from "lucide-react";
import { Button } from "@components/common/Button";
import ContentOne from "@components/common/ContentOne";
import { Gear } from "./Gear";
import Card from "./Card";

const WhyChoose: React.FC = () => {
  return (
    <div className="bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-16 items-center justify-items-center">
              {/* Top Row */}
              <div className="flex flex-col items-center group">
                <Card
                  title="Experienced Team"
                  description="Our highly skilled professionals bring years of expertise to every job. Trained in the latest techniques and equipped with advanced tools, they ensure thorough and efficient cleaning, consistently exceeding expectations."
                  position="right"
                />
                <Gear
                  image={<BarChart3 />}
                  color="blue"
                  linePosition="right"
                />
              </div>

              <div className="flex flex-col items-center group ">
                <Card
                  title="Reliable Service"
                  description="Count on us for consistent, punctual, and dependable service. We pride ourselves on building lasting relationships through trust and transparent communication, ensuring your business environment is always in expert hands."
                  position="right"
                />
                <Gear image={<Handshake />} color="darkBlue" />
              </div>

              {/* Bottom Row */}
              <div className="flex flex-col items-center group ">
                <Gear
                  image={<Monitor />}
                  color="darkBlue"
                  linePosition="right"
                />
                <Card
                  title="Quality Standards"
                  description="We adhere to the highest industry benchmarks, employing rigorous quality control and eco-friendly products. Our meticulous attention to detail guarantees a pristine, healthy, and visually appealing space every single time."
                  position="right"
                />
              </div>

              <div className="flex flex-col items-center group ">
                <Gear image={<Users />} color="blue" />
                <Card
                  title="Flexible Scheduling"
                  description="Your business operates on its own schedule, and so do we. We offer customizable cleaning plans and flexible appointment times to seamlessly integrate with your operations, minimizing disruption."
                  position="right"
                />
              </div>
            </div>

            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gray-300 transform -translate-y-1/2" />
              <div className="absolute left-1/2 top-1/4 bottom-1/4 w-0.5 bg-gray-300 transform -translate-x-1/2" />
            </div>
          </div>

          <ContentOne
            title="Why Choose Reyes Maintenance Service?"
            contents={[
              "With years of experience serving Canadian businesses, **Reyes Maintenance Service Inc.** has built a reputation for reliability, professionalism, and exceptional results. We understand that a clean workspace is not just about appearance, it is about creating a healthy, productive environment for your employees and a positive impression for your clients.",
              "Our comprehensive approach combines modern equipment, eco-friendly cleaning products, and highly trained staff to deliver superior results. We are not just a cleaning service; we are your facility maintenance partner, committed to maintaining the highest standards of cleanliness and hygiene in your commercial space."
            ]}
            buttons={[
              <Button
                variant="contact"
                size="md"
                href="/contact"
                key="contact-btn"
              >
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

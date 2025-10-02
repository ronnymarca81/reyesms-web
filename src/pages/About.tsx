import { useNavigate } from "react-router-dom";
import bgImage from "@assets/images/about.png";
import Testimonial from "@components/ui/Testimonial/Testimonial";
import BannerQuote from "@components/common/BannerQuote";
import HowWeWork from "@features/getQuote/components/HowWeWork";
import ContentImage from "@components/common/ContentImage";
import pgImage from "@assets/images/about-image.png";
import { HeroSection } from "@components/common/HeroSection";

export const About = () => {
  const navigate = useNavigate();
  const handleGetQuote = () => {
    navigate("/quote");
  };
  return (
    <>
      {/* Header Section */}
      <HeroSection
        view="left"
        height="40vh"
        backgroundImage={bgImage}
        title="About Us"
        description="Your Trusted Partner in Facility Care Across Ottawa"
        bottom={
          <>
            <button
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium shadow-md text-white"
              onClick={handleGetQuote}
            >
              Get a Free Quote
            </button>
          </>
        }
      />
      <ContentImage
        title="About Reyes Maintenance Service Inc"
        paragraphs={[
          "Reyes Maintenance Service Inc. has been proudly serving Ottawa businesses since 2008, providing reliable cleaning and maintenance solutions that keep workplaces clean, safe, and professional. As a locally owned company with over 15 years of experience, we have built our reputation on trust, consistency, and results that reflect the high standards of our clients.",
          "We believe a well‑maintained workplace is more than just appearance: it supports productivity, protects health, and creates a positive impression for employees and visitors alike. Our team combines modern equipment, eco‑friendly products, and proven expertise to deliver tailored solutions that fit each client’s schedule and budget, ensuring minimal disruption and maximum impact.",
          "At Reyes Maintenance Service Inc., we are more than a cleaning service: we are your facility care partner. With a skilled team, flexible scheduling, and a commitment to sustainable practices, we stand by our motto: Satisfaction Guaranteed."
        ]}
        buttons={[
          {
            label: "Get a Free Quote",
            variant: "primary",
            onClick: () => {
              navigate("/quote");
            }
          },
          {
            label: "Our Services",
            variant: "secondary",
            onClick: () => {
              navigate("/services");
            }
          }
        ]}
        image={pgImage}
        reverse={false} // set true to swap sides
        backgroundColor="bg-sky-100"
      />
      <HowWeWork background="bg-gradient-to-br from-blue-950 via-sky-900 to-gray-900" />

      <Testimonial layout="grid" theme="light" showStats />
      <BannerQuote backgroundClassName="bg-gradient-to-r from-orange-100 to-orange-400 text-white" />
    </>
  );
};

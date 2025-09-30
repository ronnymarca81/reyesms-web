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
        title="Reyes Maintenance"
        description="Elevating Your Business Environment"
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
        title="About Reyes Maintenance Service"
        paragraphs={[
          "With over a decade of dedicated service, Reyes Maintenance Service Inc. stands as a trusted leader in commercial cleaning. Our commitment to unparalleled quality ensures every space we touch is meticulously maintained and impeccably clean.",
          "We pride ourselves on a highly skilled team, tailored solutions, and a relentless focus on customer satisfaction, setting a new standard for professional business environments."
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
      <HowWeWork background="bg-gradient-to-r from-indigo-400 via-purple-700 to-pink-400" />

      <Testimonial layout="grid" theme="light" showStats />
      <BannerQuote backgroundClassName="bg-gradient-to-r from-orange-100 to-orange-400 text-white" />
    </>
  );
};

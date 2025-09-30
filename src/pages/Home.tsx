import BannerQuote from "@components/common/BannerQuote";
import HeaderOne from "@components/common/HeaderOne";
import Testimonial from "@components/ui/Testimonial/Testimonial";
import WhyChoose from "@components/ui/WhyChoose/WhyChoose";
import Service from "@features/Services/components/Service";
import { defaultServicesData } from "@features/Services/ServiceApi";
import { useNavigate } from "react-router-dom";
import bgImage from "@assets/images/home.png";
import ContentImage from "@components/common/ContentImage";
import pgImage from "@assets/images/home-image.png";
import { HeroSection } from "@components/common/HeroSection";

export const Home = () => {
  const navigate = useNavigate();
  const handleServiceLearnMore = (serviceLink: string) => {
    // Here you would typically navigate to a detailed service page
    navigate(`${serviceLink}`);
  };
  const handleGetQuote = () => {
    navigate("/quote");
  };
  return (
    <>
      {/* Header Section */}
      <HeroSection
        view="center"
        height="70vh"
        backgroundImage={bgImage}
        title="Reyes Maintenance: Elevating Your Business Environment"
        description="Ensure your commercial space always looks its best with Reyes Maintenance Service Inc. We deliver exceptional cleaning solutions, maintaining pristine and professional environments that reflect your business's high standards."
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
        title="Reyes Maintenance: Elevating Your Business Environment"
        paragraphs={[
          "Ensure your commercial space always looks its best with Reyes Maintenance Service Inc.",
          "We deliver exceptional cleaning solutions, maintaining pristine and professional environments that reflect your business's high standards."
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
            onClick: () => alert("Services clicked!")
          }
        ]}
        image={pgImage}
        reverse={false} // set true to swap sides
        backgroundColor="bg-sky-100"
      />
      <div className="bg-white">
        <HeaderOne
          //backgroundImageUrl={headerImg}
          overlayColorClass="bg-white/90" // light overlay to ensure readability
          preHeading="Professional"
          heading="Our Comprehensive Commercial"
          highlightText="Cleaning Services"
          description={`Reyes Maintenance Service offers a full spectrum of cleaning solutions tailored to meet the unique demands of various commercial environments. From daily office upkeep to specialized retail and carpet care, we ensure every space is impeccably maintained.`}
        />
        <Service
          services={defaultServicesData}
          onServiceLearnMore={handleServiceLearnMore}
        />
      </div>
      <WhyChoose />
      <Testimonial autoplay showStats />
      <BannerQuote backgroundClassName="bg-gradient-to-r from-blue-100 to-gray-500 text-white" />
    </>
  );
};

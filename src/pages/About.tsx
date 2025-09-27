import { HeaderLeft } from "@components/common/HeaderLeft";
import { useNavigate } from "react-router-dom";
import bgImage from "@assets/images/about.png";
import Testimonial from "@components/ui/Testimonial/Testimonial";
import BannerQuote from "@components/common/BannerQuote";
import HowWeWork from "@features/getQuote/components/HowWeWork";

export const About = () => {
  const navigate = useNavigate();
  const handleGetQuote = () => {
    navigate("/quote");
  };
  return (
    <>
      {/* Header Section */}
      <HeaderLeft
        backgroundImage={bgImage}
        title="About US"
        description="Our commitment to unparalleled quality ensures every space we touch is meticulously maintained and impeccably clean."
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
      <HowWeWork background="bg-gradient-to-r from-indigo-400 via-purple-700 to-pink-400" />

      <Testimonial />
      <BannerQuote backgroundClassName="bg-gradient-to-r from-orange-100 to-orange-400 text-white" />
    </>
  );
};

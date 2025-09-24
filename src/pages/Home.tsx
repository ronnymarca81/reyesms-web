import BannerQuote from "@components/common/BannerQuote"
import HeaderOne from "@components/common/HeaderOne";
import TestimonialDemo from "@components/common/Testimonial";
import WhyChoose from "@components/common/WhyChoose/WhyChoose";
import Service from "@features/Services/components/Service";
import { defaultServicesData } from "@features/Services/ServiceApi";
import { useNavigate } from "react-router-dom";


export const Home = () => {
    const navigate = useNavigate();
    const handleServiceLearnMore = (serviceLink: string) => {
      // Here you would typically navigate to a detailed service page
      navigate(`${serviceLink}`);
    };
  return (
    <>
      <HeaderOne
              //backgroundImageUrl={headerImg}
              overlayColorClass="bg-white/90" // light overlay to ensure readability
              preHeading="Professional"
              heading="Services We Offer"
              highlightText="in Ottawa"
              description={`We offer residential and commercial cleaning services tailored to meet the unique needs of every client. Our team strives to deliver high-quality results on every job. From commercial janitorial cleaning and facilities maintenance to emergency cleaning services, Jani Queen is here for you!`}
            />
      <Service
        services={defaultServicesData}
        onServiceLearnMore={handleServiceLearnMore}
      />
      <WhyChoose/>
      <TestimonialDemo/>
      <BannerQuote backgroundClassName="bg-gradient-to-r from-blue-100 to-gray-500 text-white" />
    </>
  );
}

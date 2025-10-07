import BannerQuote from '@components/common/BannerQuote';
import HeaderOne from '@components/common/HeaderOne';
import Testimonial from '@components/ui/Testimonial/Testimonial';
import WhyChoose from '@components/ui/WhyChoose/WhyChoose';
import Service from '@features/Services/components/Service';
import { defaultServicesData } from '@myTypes/ServiceApi';
import { useNavigate } from 'react-router-dom';
import bgImage from '@assets/images/home.png';
import ContentImage from '@components/common/ContentImage';
import pgImage from '@assets/images/home-image.png';
import { HeroSection } from '@components/common/HeroSection';

export const Home = () => {
  const navigate = useNavigate();
  const handleServiceLearnMore = (serviceLink: string) => {
    // Here you would typically navigate to a detailed service page
    navigate(`${serviceLink}`);
  };

  const handleGetQuote =  () => {
     navigate('/quote');
  };

  return (
    <>
      {/* Header Section */}
      <HeroSection
        view="center"
        height="60vh"
        backgroundImage={bgImage}
        title="Complete Cleaning and Maintenance Solutions for Your Business"
        description="Trusted by Ottawa companies since 2008 for reliable, professional, full-service facility care."
        bottom={
          <>
            <button
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium shadow-md text-white"
              onClick={handleGetQuote}
            >
              Request a Free Estimate
            </button>
          </>
        }
      />
      <ContentImage
        title="Elevating Your Business Environment"
        paragraphs={[
          'Ensure your commercial space always looks its best with Reyes Maintenance Service Inc.',
          'As a locally owned and operated company with over 15 years of experience, Reyes Maintenance Service Inc. has earned a reputation for reliability, professionalism, and exceptional results.',
          'We understand that a clean workspace is about more than just appearance: it fosters a healthy, productive environment for employees while leaving a lasting impression on clients. To achieve these exceptional outcomes, our highly skilled staff relies on modern equipment and environmentally safe supplies.',
        ]}
        buttons={[
          {
            label: 'Claim your Free Estimate',
            variant: 'primary',
            onClick: () => {
              handleGetQuote;
            },
          },
        ]}
        image={pgImage}
        reverse={false} // set true to swap sides
        backgroundColor="bg-sky-100"
      />
      <div className="bg-white">
        <HeaderOne
          backgroundImageUrl={pgImage}
          overlayColorClass="bg-white/90"
          preHeading="COMPREHENSIVE"
          heading="Maintenance Services"
          highlightText="in Ottawa"
          description="Reyes Maintenance Service Inc. provides a full range of professional maintenance solutions tailored to meet the unique needs of businesses of every size. We create customized plans that fit your schedule and budget, delivering reliable results."
          classContainer="h-[250px]"
        />

        <Service services={defaultServicesData} onServiceLearnMore={handleServiceLearnMore} />
      </div>
      <WhyChoose />
      <Testimonial autoplay showStats />
      <BannerQuote backgroundClassName="bg-gradient-to-r from-blue-100 to-gray-500 text-white" />
    </>
  );
};

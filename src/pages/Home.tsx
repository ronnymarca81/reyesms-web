import BannerQuote from '@components/common/BannerQuote';
import HeaderOne from '@components/common/HeaderOne';
// import Testimonial from '@components/ui/Testimonial/Testimonial';
import WhyChoose from '@components/ui/WhyChoose/WhyChoose';
import Service from '@features/Services/components/Service';
import { defaultServicesData } from '@myTypes/ServiceApi';
import bgImage from '@assets/images/home.png';
import pgImage from '@assets/images/home-image.png';
import { HeroSection } from '@components/common/HeroSection';
import ContentGalery from '@components/common/ContentGalery';
import { Button } from '@components/common/Button';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Reyes Maintenance Service Inc</title>
        <meta
          name="description"
          content="Professional cleaning and maintenance services in Ottawa. Trusted by businesses for over 15 years."
        />
        <meta property="og:title" content="Reyes Maintenance Service Inc" />
        <meta
          property="og:description"
          content="Reliable, secure, and scalable maintenance services for businesses."
        />
        <meta property="og:image" content="/assets/og-image.jpg" />
        <meta property="og:url" content="https://www.reyesms.ca/home" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {/* Header Section */}
      <HeroSection
        view="center"
        height="60vh"
        backgroundImage={bgImage}
        title="Complete Cleaning and Maintenance Solutions for Your Business"
        description="Trusted by Ottawa companies since 2008 for reliable, professional, full-service facility care."
        button={
          <>
            <Button
              href="/quote"
              variant="custom"
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium shadow-md text-white"
            >
              Request a Free Estimate
            </Button>
          </>
        }
      />
      <ContentGalery
        title="Elevating Your Business Environment"
        paragraphs={[
          'Ensure your commercial space always looks its best with Reyes Maintenance Service Inc.',
          'As a locally owned and operated company with over 15 years of experience, Reyes Maintenance Service Inc. has earned a reputation for reliability, professionalism, and exceptional results.',
          'We understand that a clean workspace is about more than just appearance: it fosters a healthy, productive environment for employees while leaving a lasting impression on clients. To achieve these exceptional outcomes, our highly skilled staff relies on modern equipment and environmentally safe supplies.',
        ]}
        buttons={[
          {
            children: 'Get a Free Quote',
            variant: 'contact',
            size: 'md',
            href: '/quote',
          },
        ]}
        images={pgImage}
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
        <Service services={defaultServicesData} />
      </div>
      <WhyChoose />
      {/* <Testimonial autoplay showStats /> */}
      <BannerQuote backgroundClassName="bg-gradient-to-r from-blue-100 to-gray-500 text-white" />
    </>
  );
};

export default Home;

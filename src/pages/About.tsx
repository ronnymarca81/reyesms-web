import bgImage from '@assets/images/about.png';
import Testimonial from '@components/ui/Testimonial/Testimonial';
import BannerQuote from '@components/common/BannerQuote';
import HowWeWork from '@features/getQuote/components/HowWeWork';
import pgImage from '@assets/images/about-image.png';
import { HeroSection } from '@components/common/HeroSection';
import ContentGalery from '@components/common/ContentGalery';
import { Button } from '@components/common/Button';

export const About = () => {
  return (
    <>
      {/* Header Section */}
      <HeroSection
        view="left"
        height="40vh"
        backgroundImage={bgImage}
        title="About Us"
        description="Your Trusted Partner in Facility Care Across Ottawa"
        button={
          <>
            <Button
              children="Get a Free Quote"
              variant="custom"
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium shadow-md text-white"
              href="/quote"
            />
          </>
        }
      />
      <ContentGalery
        title="About Reyes Maintenance Service Inc"
        paragraphs={[
          'Reyes Maintenance Service Inc. has been proudly serving Ottawa businesses since 2008, providing reliable cleaning and maintenance solutions that keep workplaces clean, safe, and professional. As a locally owned company with over 15 years of experience, we have built our reputation on trust, consistency, and results that reflect the high standards of our clients.',
          'We believe a well‑maintained workplace is more than just appearance: it supports productivity, protects health, and creates a positive impression for employees and visitors alike. Our team combines modern equipment, eco‑friendly products, and proven expertise to deliver tailored solutions that fit each client’s schedule and budget, ensuring minimal disruption and maximum impact.',
          'At Reyes Maintenance Service Inc., we are more than a cleaning service: we are your facility care partner. With a skilled team, flexible scheduling, and a commitment to sustainable practices, we stand by our motto: Satisfaction Guaranteed.',
        ]}
        buttons={[
          {
            children: 'Get a Free Quote',
            variant: 'contact',
            size: 'md',
            href: '/quote',
          },
          {
            children: 'Our Services',
            variant: 'primary',
            size: 'md',
            href: '/services',
          },
        ]}
        images={pgImage}
        reverse={false} // set true to swap sides
        backgroundColor="bg-sky-100"
      />
      <HowWeWork background="bg-gradient-to-br from-blue-950 via-sky-900 to-gray-900" />

      <Testimonial layout="grid" theme="light" showStats />
      <BannerQuote backgroundClassName="bg-gradient-to-r from-orange-100 to-orange-400 text-white" />
    </>
  );
};

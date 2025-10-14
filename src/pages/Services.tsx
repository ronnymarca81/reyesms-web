import Service from '../features/Services/components/Service';
import { defaultServicesData } from '@myTypes/ServiceApi';
import banner from '@assets/images/services-banner.png';
import SafetyFeatures from '@features/Services/components/SafetyFeatures';
import { safetyFeatures } from '@features/Services/types';
import { Helmet } from 'react-helmet';

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Our Services – Reyes Maintenance Service Inc</title>
        <meta
          name="description"
          content="Explore our full range of commercial cleaning and maintenance services in Ottawa. From office cleaning to floor care and light renovations, we deliver spotless, safe, and professional spaces."
        />

        <meta property="og:title" content="Commercial Cleaning & Maintenance Services in Ottawa" />
        <meta
          property="og:description"
          content="Reyes Maintenance offers expert office cleaning, commercial cleaning, post-construction cleaning, floor care, carpet care, deep cleaning, renovation, demolition, and light maintenance services tailored for Ottawa businesses."
        />
        <meta property="og:image" content="/assets/og-image.jpg" />
        <meta property="og:url" content="https://www.reyesms.ca/services" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services – Reyes Maintenance" />
        <meta
          name="twitter:description"
          content="Explore expert cleaning and maintenance services for Ottawa businesses."
        />
        <meta name="twitter:image" content="/assets/og-image.jpg" />
      </Helmet>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div>
          <img
            src={banner}
            alt="Quote Page Banner"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black">Our Services</h1>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              Reyes Maintenance Service Inc. provides a meticulous approach to commercial cleaning
              and maintenance, ensuring every aspect of your Ottawa business environment is handled
              precisely and carefully. Explore our key services below, each designed to keep
              workplaces spotless, safe, and welcoming.
            </p>
          </div>
        </div>
      </div>
      {/* Services Section - Services component wraps Card components */}
      <Service services={defaultServicesData} />
      <SafetyFeatures theme="light" safeties={safetyFeatures} />
    </div>
  );
};
export default Services;

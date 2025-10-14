import Service from '../features/Services/components/Service';
import { defaultServicesData } from '@myTypes/ServiceApi';
import banner from '@assets/images/services-banner.png'
import SafetyFeatures from '@features/Services/components/SafetyFeatures';
import { safetyFeatures } from '@features/Services/types';

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
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

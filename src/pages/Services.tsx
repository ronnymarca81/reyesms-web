import Service from "../features/Services/Service";
import { defaultServicesData } from "@features/Services/serviceApi";
import Values from "@features/Services/Values";
import  banner  from '@assets/images/services-banner.png'

export const Services = () => {
  const handleServiceLearnMore = (serviceTitle: string) => {
    console.log(`Learn more clicked for: ${serviceTitle}`);
    // Here you would typically navigate to a detailed service page
    alert(`Navigate to ${serviceTitle} details page`);
  };
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black">
              Our Services
            </h1>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              We are passionate about empowering individuals and businesses to
              reach their full potential. Our approach is rooted in personalized
              strategies, meaningful connections, and measurable results.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section - Services component wraps Card components */}
      <Service
        services={defaultServicesData}
        onServiceLearnMore={handleServiceLearnMore}
      />
      <Values />
    </div>
  );
};

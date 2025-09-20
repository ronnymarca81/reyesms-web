import Service from "../features/Services/Service";
import { defaultServicesData } from "@features/Services/serviceApi";
import Values from "../features/Services/Values";

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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              We are passionate about empowering individuals and businesses to
              reach their full potential. Our approach is rooted in personalized
              strategies, meaningful connections, and measurable results.
            </p>
            <div className="mt-8">
              <nav className="text-slate-300">
                <span>Home</span>
                <span className="mx-2">/</span>
                <span className="text-lime-400">Services</span>
              </nav>
            </div>
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

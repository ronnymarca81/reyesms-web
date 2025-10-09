import React from 'react';
import { defaultContactInfo } from '@myTypes/CompanyApi';
import Request from '@features/getQuote/components/Request';
import HeroSection from '@features/Services/components/SpecificService/HeroSection';
import { ContactBadge } from '@components/common/ContactBadge';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <HeroSection
        serviceType="office"
        name="Let's Make Your Space Shine Contact Us"
        description="Transform your business environment with Reyes Maintenance. Get your free estimate today and experience the difference."
        highlightIndex={5}
        visible={false}
      />

      <div className="max-w-7xl mx-auto px-4 mt-12 relative z-20">
        <div className="grid md:grid-cols-3 gap-4 items-stretch">
          <ContactBadge
            type="phone"
            value={defaultContactInfo.phone}
            color="bg-gradient-to-br from-blue-700 to-blue-900"
          />
          <ContactBadge
            type="email"
            value={defaultContactInfo.email}
            color="bg-gradient-to-br from-sky-700 to-blue-900"
          />
          <ContactBadge
            type="location"
            value={defaultContactInfo.address}
            color="bg-gradient-to-br from-gray-700 to-blue-900"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 pb-20 mt-16">
        <Request title="Ready to Get Started?" />
      </div>
    </div>
  );
};

export default App;

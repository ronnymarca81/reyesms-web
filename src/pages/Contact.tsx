import React from "react";
import { FeatureBadge } from '@components/common/FeatureBadge'
import { defaultContactInfo } from '@myTypes/ServiceApi'
import  Request  from '@features/getQuote/components/Request'
import  HeroSection  from '@features/Services/components/SpecificService/HeroSection' 
import { MapPin, PhoneCall, Mail } from "lucide-react";


const App: React.FC = () => {


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <HeroSection
        serviceType="office"
        name="Let's Make Your Space Shine Contact Us"
        description="Transform your business environment with Reyes Maintenance. Get your free estimate today and experience the difference."
        highlightIndex={5}
        visible={false} 
      />

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 mt-12 relative z-20">
        <div className="grid md:grid-cols-3 gap-2">
          <FeatureBadge
            icon={<PhoneCall className="w-8 h-8 stroke-3" />}
            title={defaultContactInfo.phone}
            description="Phone Number"
            color="bg-gradient-to-br from-blue-700 to-blue-900"
          />
          <FeatureBadge
            icon={<Mail className="w-8 h-8 stroke-3" />}
            title={defaultContactInfo.email}
            description="Email Address"
            color="bg-gradient-to-br from-sky-700 to-blue-900"
          />
          <FeatureBadge
            icon={<MapPin className="w-8 h-8" />}
            title={defaultContactInfo.address}
            description="Location"
            color="bg-gradient-to-br from-gray-700 to-blue-900"
          />
        </div>
      </div>
      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 pb-20 mt-16">
        <Request title="Ready to Get Started?" />
      </div>
    </div>
  );
};

export default App;

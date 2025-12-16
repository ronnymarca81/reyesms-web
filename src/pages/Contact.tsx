import React, { useState, useEffect } from 'react';
import { defaultContactInfo } from '@myTypes/CompanyApi';
import Request from '@features/getQuote/components/Request';
import HeroSection from '@features/Services/components/SpecificService/HeroSection';
import { ContactBadge } from '@components/common/ContactBadge';
import { Helmet } from 'react-helmet';
import { useCleanupEvents } from '@hooks/useCleanupEvents';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState('');

  // Restore draft when component mounts
  useEffect(() => {
    const savedDraft = localStorage.getItem('draftForm');
    if (savedDraft) {
      setFormData(savedDraft);
    }
  }, []);

  // Cleanup events: save draft when page hides or unloads
  useCleanupEvents(
    (event) => {
      switch (event.type) {
        case 'pagehide':
          console.log('Page is being hidden or unloaded.', event.event);
          localStorage.setItem('draftForm', formData);
          break;

        case 'visibilitychange':
          if (event.state === 'hidden') {
            console.log('Page hidden — saving draft form data.');
            localStorage.setItem('draftForm', formData);
          }
          break;

        case 'beforeunload':
          console.log('User is attempting to leave the page.', event.event);
          localStorage.setItem('draftForm', formData);
          break;
      }
    },
    { warnOnExit: true }
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <Helmet>
        <title>Contact Us – Reyes Maintenance Service Inc</title>
        <meta
          name="description"
          content="Get in touch with Reyes Maintenance for a free quote or to schedule your next service."
        />
        <meta property="og:title" content="Contact Reyes Maintenance" />
        <meta
          property="og:description"
          content="Reach out to our team for reliable and professional maintenance services in Ottawa."
        />
        <meta property="og:image" content="/assets/og-image.jpg" />
        <meta property="og:url" content="https://www.reyesms.ca/contact" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

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

        {/* Example input bound to formData */}
        <textarea
          className="w-full mt-6 p-4 border rounded-md"
          placeholder="Write your message..."
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Contact;

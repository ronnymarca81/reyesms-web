import React, { useState } from 'react';
import { ChevronUp, ChevronDown, HelpCircle } from 'lucide-react';
import { type FAQAccordionProps } from './types';
import { faqData } from './ServiceApi';
import { Button } from '@components/common/Button';

const FAQAccordion: React.FC<FAQAccordionProps> = ({
  title = 'COMMERCIAL CLEANING FAQS',
  subtitle = 'Frequently Asked Questions',
  faqs,
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const updated = new Set(openItems);
    updated.has(id) ? updated.delete(id) : updated.add(id);
    setOpenItems(updated);
  };

  return (
    <div className="mx-auto px-3 sm:px-4 md:px-6 py-8 bg-gray-200 min-h-screen max-w-[95vw] sm:max-w-[90vw] md:max-w-[70vw]">
      {/* Header Section */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center mb-4">
          <div className="h-px bg-orange-400 w-10 sm:w-14"></div>
          <span className="mx-3 text-orange-500 font-medium text-xs sm:text-sm tracking-wider uppercase">
            {title}
          </span>
          <div className="h-px bg-orange-400 w-10 sm:w-14"></div>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
          {subtitle}
        </h1>
      </div>

      {/* FAQ Items */}
      <div className="space-y-5">
        {faqs.map((faq) => {
          const isOpen = openItems.has(faq.id);
          return (
            <div
              key={faq.id}
              className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full flex items-center justify-between px-4 py-4 sm:px-5 sm:py-5 text-left focus:outline-none focus:ring-4 focus:ring-sky-100 focus:ring-opacity-50"
                aria-expanded={isOpen}
              >
                <div className="flex items-center flex-1">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg mr-4 sm:mr-6">
                    <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-3" />
                  </div>
                  <h3 className="text-white font-semibold text-base sm:text-lg md:text-xl leading-relaxed pr-2 sm:pr-4">
                    {faq.question}
                  </h3>
                </div>

                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 border-2 border-white rounded-full flex items-center justify-center hover:bg-white/10 transition">
                  {isOpen ? (
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-3" />
                  ) : (
                    <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-3" />
                  )}
                </div>
              </button>

              {/* Answer Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? 'bg-white max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                  <div className="bg-white rounded-lg p-4 sm:p-5">
                    <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Contact Section */}
      <div className="mt-10 text-center">
        <div className="bg-white rounded-xl shadow-lg px-6 py-8 sm:px-8 flex flex-col items-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-5 text-sm sm:text-base">
            Contact our team for personalized answers to your commercial cleaning needs.
          </p>
          <Button variant="contact" size="md" href="/contact">
            GET IN TOUCH
          </Button>
        </div>
      </div>
    </div>
  );
};

const CommercialCleaningFAQ: React.FC = () => {
  return <FAQAccordion faqs={faqData} />;
};

export default CommercialCleaningFAQ;

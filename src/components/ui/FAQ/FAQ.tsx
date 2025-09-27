import React, { useState } from "react";
import { ChevronUp, ChevronDown, HelpCircle } from "lucide-react";
import { type FAQAccordionProps } from "./types";
import { faqData } from './ServiceApi'
import { Button } from "@components/common/Button";

const FAQAccordion: React.FC<FAQAccordionProps> = ({
  title = "COMMERCIAL CLEANING FAQS",
  subtitle = "Frequently Asked Questions",
  faqs
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="mx-auto p-6 bg-gray-200 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <div className="h-px bg-orange-400 w-16"></div>
          <span className="mx-4 text-orange-500 font-medium text-sm tracking-wider uppercase">
            {title}
          </span>
          <div className="h-px bg-orange-400 w-16"></div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          {subtitle}
        </h1>
      </div>
      <div></div>

      <div className="max-w-6xl mx-auto px-4 flex flex-col ">
        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openItems.has(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-[1.03]"
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full flex items-center justify-between  p-6 text-left focus:outline-none focus:ring-4 focus:ring-sky-100 focus:ring-opacity-50 transition-all duration-200"
                  aria-expanded={isOpen}
                >
                  {/* Question Icon */}
                  <div className="flex items-center flex-1">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg mr-6">
                      <HelpCircle className="w-6 h-6 text-white stroke-3" />
                    </div>

                    {/* Question Text */}
                    <h3 className="text-white font-semibold text-lg md:text-xl leading-relaxed pr-4">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Toggle Icon */}
                  <div className="flex-shrink-0 w-10 h-10 bg-traspatent bg-opacity-20 border-2 border-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-opacity-30">
                    {isOpen ? (
                      <ChevronDown className="w-6 h-6 stroke-3 text-white transform transition-transform duration-300" />
                    ) : (
                      <ChevronUp className="w-6 h-6 stroke-3 text-white transform transition-transform duration-300" />
                    )}
                  </div>
                </button>

                {/* Answer Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "bg-white max-h-96 opacity-100 "
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 my-2">
                    <div className="ml-18  bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                      <p className="text-black text-base leading-relaxed">
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
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact our team for personalized answers to your commercial
              cleaning needs.
            </p>
            <Button variant="contact" size="md" href="/contact">
              GET IN TOUCH
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main component with sample data
const CommercialCleaningFAQ: React.FC = () => {
  return <FAQAccordion faqs={faqData} />;
};

export default CommercialCleaningFAQ;

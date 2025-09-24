import React from "react";
import { useNavigate } from "react-router-dom";

interface BannerQuoteProps {
  // Accept CSS background classes or inline style
  backgroundClassName?: string;
  backgroundStyle?: React.CSSProperties;
  title?: string; // you can override default
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaPath?: string;
}

const BannerQuote: React.FC<BannerQuoteProps> = ({
  backgroundClassName = "bg-sky-200",
  backgroundStyle,
  title = "Professional Cleaning Services",
  subtitle = "Get Started With Our",
  description = `If you’re looking for a professional cleaning service for your Ottawa
    business or commercial property, rely on our team to get the job done right the first time around. Request a free quote from our team today to get started.`,
  ctaText = "GET A QUOTE",
  ctaPath = "/quote"
}) => {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate(ctaPath);
  };

  return (
    <section
      className={`${backgroundClassName} text-center py-16 px-4`}
      style={backgroundStyle}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
          {subtitle} <span className="font-bold">{title}</span>
        </h2>

        <p className="text-base md:text-lg text-black/80 max-w-2xl mx-auto my-8">
          {description}
        </p>

        <button
          className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
          onClick={handleEnquiryClick}
        >
          {ctaText}
        </button>
      </div>
    </section>
  );
};

export default BannerQuote;

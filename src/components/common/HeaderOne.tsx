import React from "react";

interface ServicesHeaderProps {
  /** URL or import path of background image */
  backgroundImageUrl?: string;
  /** Overlay color on top of background (e.g. semi-transparent) */
  overlayColorClass?: string;
  /** Optional small preheading text (like “PROFESSIONAL”) */
  preHeading?: string;
  /** Main heading text */
  heading: string;
  /** Subheading or “in Ottawa” text (if separate) */
  highlightText?: string;
  /** Paragraph(s) describing the services */
  description: string;
  /** Additional Tailwind classes for container */
  className?: string;
}

const HeaderOne: React.FC<ServicesHeaderProps> = ({
  backgroundImageUrl,
  overlayColorClass = "bg-white/80",
  preHeading,
  heading,
  highlightText,
  description,
  className = ""
}) => {
  return (
    <header
      className={`relative w-full bg-cover bg-center ${className}`}
      style={
        backgroundImageUrl
          ? { backgroundImage: `url(${backgroundImageUrl})` }
          : undefined
      }
    >
      {/* Overlay to help text readability */}
      <div
        className={`absolute inset-0 ${overlayColorClass}`}
        aria-hidden="true"
      ></div>

      <div className="relative z-10 max-w-3xl mx-auto py-8 px-4 text-center">
        {preHeading && (
          <div className="text-sm uppercase tracking-widest text-amber-900 mb-2">
            {preHeading}
          </div>
        )}

        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          {heading}{" "}
          {highlightText && (
            <span className="text-gray-600"> {highlightText}</span>
          )}
        </h1>

        <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </header>
  );
};

export default HeaderOne;

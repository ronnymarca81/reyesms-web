import React from "react";
import type { HeaderProps } from "./types";

export const HeaderCard: React.FC<HeaderProps> = ({
  backgroundImage,
  title,
  description,
  bottom
}) => {
  return (
    <header
      className="relative h-[85vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 bg-black/30" />

      {/* Floating Card */}
      <div className="relative z-10 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl max-w-3xl p-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {title}
        </h1>
        <p className="text-gray-700 mb-8 text-lg leading-relaxed">
          {description}
        </p>
        {bottom && <div className="flex gap-4 justify-center">{bottom}</div>}
      </div>
    </header>
  );
};

import React from "react";
import type { HeaderProps } from "./types";

export const HeaderCenter: React.FC<HeaderProps> = ({
  backgroundImage,
  title,
  description,
  bottom
}) => {
  return (
    <header
      className="relative h-[80vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl mb-8">{description}</p>
        {bottom && <div className="flex gap-4 justify-center">{bottom}</div>}
      </div>
    </header>
  );
};

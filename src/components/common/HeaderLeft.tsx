import React from "react";
import type { HeaderProps } from "./types";

export const HeaderLeft: React.FC<HeaderProps> = ({
  backgroundImage,
  title,
  description,
  bottom
}) => {
  return (
    <header
      className="relative h-[80vh] flex items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      <div className="relative z-10 max-w-2xl px-8 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl mb-8">{description}</p>
        {bottom && <div className="flex gap-4">{bottom}</div>}
      </div>
    </header>
  );
};

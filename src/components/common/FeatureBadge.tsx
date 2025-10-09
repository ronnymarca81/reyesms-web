import React from "react";

interface FeatureBadgeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  onClick?: () => void; // Optional click handler
}

export const FeatureBadge: React.FC<FeatureBadgeProps> = ({
  icon,
  title,
  description,
  color,
  onClick,
}) => (
  <div
    className={`relative overflow-hidden rounded-2xl p-10 ${color} text-white group cursor-pointer h-full flex flex-col justify-between`}
    onClick={onClick}
  >
    <div className="relative z-10 flex flex-col items-center justify-center text-center gap-4">
      {/* Icon */}
      <div>{icon}</div>

      {/* Title */}
      <h3 className="text-2xl font-bold">{title}</h3>

      {/* Description */}
      <p className="text-lg opacity-90 leading-relaxed">{description}</p>
    </div>

    {/* Decorative Hover Element */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
  </div>
);


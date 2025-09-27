import React from "react";
import type { CardProps } from "./types";

type Position = "top" | "bottom" | "left" | "right";

interface CardWithPositionProps extends CardProps {
  position: Position;
}

const Card: React.FC<CardWithPositionProps> = ({
  title,
  description,
  position
}) => {
  const isHorizontal = position === "left" || position === "right";

  const layoutClasses = isHorizontal
    ? "mt-8 mb-8 flex flex-row items-center"
    : "mt-8 mb-8 flex flex-col";

  const spacingBetween = isHorizontal
    ? position === "left"
      ? "mr-2"
      : "ml-2"
    : position === "top"
    ? "mb-2"
    : "mt-2";

  return (
    <div
      className={`
      group  /* trigger hover styles for children and parent border */
      ${layoutClasses} max-w-md
      cursor-pointer
      focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500
      transition-colors duration-200
      hover:bg-gray-100
      /* no border by default */
      border border-transparent rounded-4xl shadow-2xl
 
    `}
      tabIndex={0}
    >
      {(position === "top" || position === "left") && (
        <div
          className={`
          description-container
          overflow-hidden
          opacity-0
          max-h-0
          max-w-0
          transition-all duration-300 ease-in-out
          group-hover:opacity-100 group-hover:max-h-80 group-hover:max-w-full
          group-focus-within:opacity-100 group-focus-within:max-h-80 group-focus-within:max-w-full
          ${spacingBetween}
        `}
        >
          <p className="text-gray-600 text-md leading-relaxed">{description}</p>
        </div>
      )}

      <h3 className="text-lg font-bold text-gray-800">{title}</h3>

      {(position === "bottom" || position === "right") && (
        <div
          className={`
          description-container
          overflow-hidden
          opacity-0
          max-h-0
          max-w-0
          transition-all duration-300 ease-in-out
          group-hover:opacity-100 group-hover:max-h-80 group-hover:max-w-full
          group-focus-within:opacity-100 group-focus-within:max-h-80 group-focus-within:max-w-full
          ${spacingBetween}
        `}
        >
          <p className="text-gray-600 text-md leading-relaxed">{description}</p>
        </div>
      )}
    </div>
  );
};

export default Card;

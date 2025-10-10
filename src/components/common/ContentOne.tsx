import React from 'react';
import type { ButtonProps } from './types';

// The type for one or more Buttons
type ButtonElement = React.ReactElement<ButtonProps>;

// Props: title, contents, and buttons
interface RightContentProps {
  title: string;
  contents: string[];
  buttons?: ButtonElement | ButtonElement[];
}

const ContentOne: React.FC<RightContentProps> = ({ title, contents, buttons }) => {
  // A helper that takes a string possibly containing **word** and returns React elements
  function renderWithBold(text: string) {
    // split on `**bold**` markers
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const inner = part.slice(2, -2);
        return (
          <strong key={i} className="font-bold">
            {inner}
          </strong>
        );
      } else {
        return <span key={i}>{part}</span>;
      }
    });
  }
  return (
    <div className="flex flex-col justify-center h-full max-w-xl">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">{title}</h1>

      <div
        className="
        space-y-4 text-gray-600 leading-relaxed"
      >
        {contents.map((text, idx) => (
          <p key={idx} className="mb-4 first:mt-0 last:mb-0">
            {renderWithBold(text)}
          </p>
        ))}
      </div>

      {buttons && (
        <div className="mt-8 flex space-x-4">
          {/*
            If `buttons` is an array, render each, otherwise render single one.
          */}
          {Array.isArray(buttons)
            ? buttons.map((btn, idx) => React.cloneElement(btn, { key: idx }))
            : buttons}
        </div>
      )}
    </div>
  );
};

export default ContentOne;

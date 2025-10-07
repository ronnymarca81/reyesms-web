import React from "react";
import type{ HeaderProps } from './types'


export const HeroSection: React.FC<HeaderProps> = ({
  backgroundImage,
  title,
  description,
  button,
  view = "center",
  height = "80vh"
}) => {
  return (
    <header
      className={`relative flex items-center ${
        view === 'center' || view === 'card'
          ? 'justify-center'
          : view === 'right'
            ? 'justify-end'
            : 'justify-start'
      }`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height,
      }}
    >
      {/* Overlay depending on view */}
      {view === 'center' && <div className="absolute inset-0 bg-black/50" />}
      {view === 'left' && (
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      )}
      {view === 'right' && (
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-transparent" />
      )}
      {view === 'card' && <div className="absolute inset-0 bg-black/30" />}

      {/* Content */}
      {view === 'card' ? (
        <div className="relative z-10 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl max-w-3xl p-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h1>
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">{description}</p>
          {button && <div className="flex gap-4 justify-center">{button}</div>}
        </div>
      ) : (
        <div
          className={`relative z-10 max-w-3xl px-6 text-white ${
            view === 'left' ? 'text-left' : view === 'right' ? 'text-right' : 'text-center'
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{title}</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">{description}</p>
          {button && (
            <div
              className={`flex gap-4 ${
                view === 'left'
                  ? 'justify-start'
                  : view === 'right'
                    ? 'justify-end'
                    : 'justify-center'
              }`}
            >
              {button}
            </div>
          )}
        </div>
      )}
    </header>
  );
};

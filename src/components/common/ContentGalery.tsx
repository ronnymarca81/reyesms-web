import React, { useState, useEffect, useRef } from 'react';
import type { ContentGaleryProps } from '@components/common/types';
import { Button } from '@components/common/Button';



const ContentGalery: React.FC<ContentGaleryProps> = ({
  title,
  paragraphs = [],
  buttons = [],
  images = [],
  reverse = false,
  backgroundColor = 'bg-gray-50',
}) => {
  const normalizedImages = Array.isArray(images) ? images : images ? [images] : [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (normalizedImages.length <= 1) return;

    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % normalizedImages.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [normalizedImages.length, isPaused]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % normalizedImages.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + normalizedImages.length) % normalizedImages.length);

  return (
    <section className={`w-full py-16 ${backgroundColor}`}>
      <div
        className={`container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
          reverse ? 'md:flex flex-row-reverse' : ''
        }`}
      >
        {/* Content Section */}
        <div className="space-y-6 px-6">
          <h1 className="text-4xl font-bold text-gray-900">{title}</h1>

          <div className="space-y-4">
            {paragraphs.map((text, index) => (
              <p key={index} className="text-md text-gray-600">
                {text}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {buttons.map((btnProps, index) => (
              <Button key={index} {...btnProps} />
            ))}
          </div>
        </div>

        {/* Image Carousel Section */}
        <div
          className="relative w-full h-[400px] md:h-[500px] rounded-xl shadow-lg overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {normalizedImages.length > 0 ? (
            normalizedImages.map((src, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  i === currentIndex ? 'opacity-100 z-10' : 'opacity-0'
                }`}
                style={{
                  backgroundImage: `url(${src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            ))
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500">
              No image available
            </div>
          )}

          {normalizedImages.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
              >
                ‹
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
              >
                ›
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentGalery;

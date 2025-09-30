import React, { useState, useEffect, useRef } from "react";
import type { ContentGaleryProps } from "./types";

const ContentGalery: React.FC<ContentGaleryProps> = ({
  title,
  paragraphs = [],
  buttons = [],
  images = [],
  reverse = false,
  backgroundColor = "bg-gray-50"
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // ✅ Auto-play effect with pause on hover
  useEffect(() => {
    if (images.length <= 1) return;

    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 5000); // change slide every 5s
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images.length, isPaused]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className={`w-full py-16 ${backgroundColor}`}>
      <div
        className={`container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
          reverse ? "md:flex flex-row-reverse" : ""
        }`}
      >
        {/* Content Section */}
        <div className="space-y-6 px-6">
          <h1 className="text-4xl font-bold text-gray-900">{title}</h1>

          <div className="space-y-4">
            {paragraphs.map((text, index) => (
              <p key={index} className="text-lg text-gray-600">
                {text}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {buttons.map((btn, index) => (
              <button
                key={index}
                onClick={btn.onClick}
                className={`px-5 py-3 rounded-lg font-medium transition ${
                  btn.variant === "secondary"
                    ? "border border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Image Carousel Section */}
        <div
          className="relative w-full h-[400px] md:h-[500px] rounded-xl shadow-lg overflow-hidden"
          onMouseEnter={() => setIsPaused(true)} // ✅ pause on hover
          onMouseLeave={() => setIsPaused(false)} // ✅ resume on leave
        >
          {images.length > 0 ? (
            images.map((src, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  i === currentIndex ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  backgroundImage: `url(${src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              />
            ))
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500">
              No image available
            </div>
          )}

          {/* Controls */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
              >
                ‹
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
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

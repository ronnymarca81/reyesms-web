import { useEffect, useState } from "react";
import { TestimonialCard } from "./TestimonialCard";
import type { Testimonial } from "./types";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

export const TestimonialCarousel: React.FC<{
  testimonials: Testimonial[];
  autoplay: boolean;
  theme: "light" | "dark" | "gradient";
}> = ({ testimonials, autoplay, theme }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoplay);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, testimonials.length]);

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 p-4">
              <TestimonialCard
                testimonial={testimonial}
                variant="featured"
                theme={theme}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex space-x-4">
          <button
            onClick={prev}
            className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <Play
              className={`w-5 h-5 ${
                isPlaying ? "text-green-600" : "text-gray-600"
              }`}
            />
          </button>
        </div>

        {/* Dots */}
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
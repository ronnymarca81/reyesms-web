import { Award, Quote } from 'lucide-react';
import type{ Testimonial} from './types'
import StarRating from './StartRating';

export const TestimonialCard: React.FC<{
  testimonial: Testimonial;
  variant?: "default" | "compact" | "featured";
  theme?: "light" | "dark" | "gradient";
}> = ({ testimonial, variant = "default", theme = "light" }) => {
  const themeClasses = {
    light: "bg-white border-gray-200 text-gray-800",
    dark: "bg-gray-900 border-gray-700 text-white",
    gradient:
      "bg-gradient-to-br from-blue-50 via-white to-purple-50 border-blue-200 text-gray-800"
  };

  const quoteBgClasses = {
    light: "text-blue-100",
    dark: "text-gray-700",
    gradient: "text-blue-200"
  };

  if (variant === "compact") {
    return (
      <div
        className={`${themeClasses[theme]} p-6 rounded-xl border shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
      >
        <div className="flex items-start space-x-4">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100"
          />
          <div className="flex-1">
            <StarRating rating={testimonial.rating} size="sm" />
            <p className="mt-2 text-sm leading-relaxed">
              {testimonial.content}
            </p>
            <div className="mt-3">
              <p className="font-semibold text-sm">{testimonial.name}</p>
              <p className="text-xs text-gray-500">{testimonial.title}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "featured") {
    return (
      <div
        className={`${themeClasses[theme]} p-8 rounded-2xl border shadow-2xl relative overflow-hidden`}
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        <Quote
          className={`${quoteBgClasses[theme]} w-16 h-16 absolute top-6 right-6 opacity-20`}
        />

        <div className="relative z-10">
          <StarRating rating={testimonial.rating} size="lg" />
          <blockquote className="mt-6 text-lg leading-relaxed font-medium">
            "{testimonial.content}"
          </blockquote>

          <div className="flex items-center mt-8">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover ring-4 ring-white shadow-lg"
            />
            <div className="ml-4">
              <p className="font-bold text-lg">{testimonial.name}</p>
              <p className="text-sm opacity-75">{testimonial.title}</p>
              <p className="text-sm font-medium text-blue-600">
                {testimonial.company}
              </p>
            </div>
            {testimonial.verified && (
              <div className="ml-auto">
                <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                  <Award className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>
            )}
          </div>

          {testimonial.tags && (
            <div className="flex flex-wrap gap-2 mt-4">
              {testimonial.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${themeClasses[theme]} p-6 rounded-xl border shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative group`}
    >
      <Quote
        className={`${quoteBgClasses[theme]} w-12 h-12 absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
      />

      <div className="relative z-10">
        <StarRating rating={testimonial.rating} />
        <blockquote className="mt-4 leading-relaxed">
          "{testimonial.content}"
        </blockquote>

        <div className="flex items-center mt-6">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100"
          />
          <div className="ml-3">
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-sm text-gray-500">
              {testimonial.title} at {testimonial.company}
            </p>
            {testimonial.location && (
              <p className="text-xs text-gray-400">{testimonial.location}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
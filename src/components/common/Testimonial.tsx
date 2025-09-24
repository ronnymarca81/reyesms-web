import React, { useState, useEffect } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Play,
  Users,
  Award,
  Heart
} from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  location?: string;
  date?: string;
  verified?: boolean;
  tags?: string[];
}

interface TestimonialProps {
  testimonials: Testimonial[];
  layout?: "carousel" | "grid" | "masonry" | "single";
  autoplay?: boolean;
  showStats?: boolean;
  theme?: "light" | "dark" | "gradient";
}

const StarRating: React.FC<{ rating: number; size?: "sm" | "md" | "lg" }> = ({
  rating,
  size = "md"
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };

  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${sizeClasses[size]} ${
            star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          } transition-colors duration-200`}
        />
      ))}
    </div>
  );
};

const TestimonialCard: React.FC<{
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

const TestimonialCarousel: React.FC<{
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

const TestimonialStats: React.FC<{ testimonials: Testimonial[] }> = ({
  testimonials
}) => {
  const averageRating =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;
  const totalReviews = testimonials.length;
  const verifiedCount = testimonials.filter((t) => t.verified).length;

  return (
    <div className="bg-gradient-to-r from-blue-500 to-sky-800 rounded-2xl p-8 text-white mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            <span className="text-3xl font-bold">
              {averageRating.toFixed(1)}
            </span>
          </div>
          <p className="text-blue-100">Average Rating</p>
        </div>
        <div>
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Users className="w-8 h-8 text-blue-200" />
            <span className="text-3xl font-bold">{totalReviews}</span>
          </div>
          <p className="text-blue-100">Total Reviews</p>
        </div>
        <div>
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Heart className="w-8 h-8 text-red-400 fill-red-400" />
            <span className="text-3xl font-bold">
              {Math.round((verifiedCount / totalReviews) * 100)}%
            </span>
          </div>
          <p className="text-blue-100">Satisfaction Rate</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialComponent: React.FC<TestimonialProps> = ({
  testimonials,
  layout = "grid",
  autoplay = false,
  showStats = true,
  theme = "light"
}) => {
  const renderLayout = () => {
    switch (layout) {
      case "carousel":
        return (
          <TestimonialCarousel
            testimonials={testimonials}
            autoplay={autoplay}
            theme={theme}
          />
        );

      case "single":
        return (
          <div className="max-w-2xl mx-auto">
            <TestimonialCard
              testimonial={testimonials[0]}
              variant="featured"
              theme={theme}
            />
          </div>
        );

      case "masonry":
        return (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="break-inside-avoid">
                <TestimonialCard
                  testimonial={testimonial}
                  variant={
                    index % 3 === 0
                      ? "featured"
                      : index % 2 === 0
                      ? "default"
                      : "compact"
                  }
                  theme={theme}
                />
              </div>
            ))}
          </div>
        );

      default: // grid
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                theme={theme}
              />
            ))}
          </div>
        );
    }
  };

  const containerTheme = {
    light: "bg-gray-50",
    dark: "bg-gray-900",
    gradient: "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
  };

  return (
    <div className={`${containerTheme[theme]}  p-8`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            What Our Clients Say
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Real feedback from real customers who've experienced our exceptional
            service
          </p>
        </div>

        {/* Stats */}
        {showStats && <TestimonialStats testimonials={testimonials} />}

        {/* Testimonials */}
        {renderLayout()}
      </div>
    </div>
  );
};

// Demo component with sample data
const TestimonialDemo: React.FC = () => {
  const sampleTestimonials: Testimonial[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      title: "CEO",
      company: "TechFlow Solutions",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b766?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content:
        "Working with this team has been transformative for our business. Their attention to detail and innovative approach exceeded all our expectations.",
      location: "San Francisco, CA",
      verified: true,
      tags: ["Professional", "Reliable", "Innovative"]
    },
    {
      id: "2",
      name: "Michael Chen",
      title: "Product Manager",
      company: "InnovateNow",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content:
        "The level of expertise and customer service provided is unmatched. They delivered exactly what we needed, on time and within budget.",
      location: "Austin, TX",
      verified: true,
      tags: ["Expert", "Timely"]
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      title: "Marketing Director",
      company: "BrandCraft",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content:
        "Outstanding results! The team understood our vision perfectly and brought it to life in ways we never imagined possible.",
      location: "Miami, FL",
      verified: true,
      tags: ["Creative", "Visionary"]
    },
    {
      id: "4",
      name: "David Kim",
      title: "Founder",
      company: "StartupLab",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 4,
      content:
        "Great communication throughout the entire process. The final product exceeded our expectations and helped us launch successfully.",
      location: "Seattle, WA",
      verified: true,
      tags: ["Communicative", "Supportive"]
    },
    {
      id: "5",
      name: "Lisa Thompson",
      title: "Operations Manager",
      company: "GrowthCorp",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content:
        "Absolutely phenomenal service from start to finish. They went above and beyond to ensure every detail was perfect.",
      location: "Chicago, IL",
      verified: true,
      tags: ["Detailed", "Dedicated"]
    },
    {
      id: "6",
      name: "James Wilson",
      title: "CTO",
      company: "DataDriven",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content:
        "The technical expertise and problem-solving skills demonstrated by this team are truly impressive. Highly recommended!",
      location: "Boston, MA",
      verified: true,
      tags: ["Technical", "Problem-solver"]
    }
  ];

  const [layout, setLayout] = useState<
    "carousel" | "grid" | "masonry" | "single"
  >("carousel");
  const [theme, setTheme] = useState<"light" | "dark" | "gradient">("gradient");

  return (
    <div>
      {/* Layout Controls */}
      <div className="fixed top-4 right-4 z-50 bg-white rounded-lg shadow-lg p-4 space-y-2">
        <div>
          <label className="block text-sm font-medium mb-2">Layout:</label>
          <select
            value={layout}
            onChange={(e) => setLayout(e.target.value as any)}
            className="w-full p-2 border rounded text-sm"
          >
            <option value="carousel">Carousel</option>
            <option value="grid">Grid</option>
            <option value="masonry">Masonry</option>
            <option value="single">Single</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Theme:</label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as any)}
            className="w-full p-2 border rounded text-sm"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="gradient">Gradient</option>
          </select>
        </div>
      </div>

      <TestimonialComponent
        testimonials={sampleTestimonials}
        layout={layout}
        autoplay={true}
        showStats={true}
        theme={theme}
      />
    </div>
  );
};

export default TestimonialDemo;

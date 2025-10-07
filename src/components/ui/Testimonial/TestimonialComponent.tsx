import type { TestimonialProps } from "./types";
import Stats from "./Stat";
import { TestimonialCard } from "./TestimonialCard";
import { TestimonialCarousel } from "./TestimonialCarousel";

export const TestimonialComponent: React.FC<TestimonialProps> = ({
  testimonials,
  layout = "grid",
  autoplay = false,
  showStats = true,
  theme = "dark"
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
            Real feedback from real customers who have experienced our exceptional
            service
          </p>
        </div>

        {/* Stats */}
        {showStats && <Stats testimonials={testimonials} />}

        {/* Testimonials */}
        {renderLayout()}
      </div>
    </div>
  );
};

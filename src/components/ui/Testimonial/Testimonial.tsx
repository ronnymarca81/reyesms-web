import { sampleTestimonials } from "./ServiceApi";
import { TestimonialComponent } from "./TestimonialComponent";

interface TestimonialProps {
  layout?: "carousel" | "grid" | "masonry" | "single";
  theme?: "light" | "dark" | "gradient";
  autoplay?: boolean;
  showStats?: boolean;
}

const Testimonial: React.FC<TestimonialProps> = ({
  layout = "carousel",
  theme = "dark",
  autoplay = true,
  showStats = true
}) => {
  return (
    <div>
      <TestimonialComponent
        testimonials={sampleTestimonials}
        layout={layout}
        autoplay={autoplay}
        showStats={showStats}
        theme={theme}
      />
    </div>
  );
};

export default Testimonial;

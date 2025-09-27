import { sampleTestimonials } from "./ServiceApi";
import { TestimonialComponent } from "./TestimonialComponent";



// Demo component with sample data
const Testimonial: React.FC = () => {

  return (
    <div>
      <TestimonialComponent
        testimonials={sampleTestimonials}
        layout="carousel"
        autoplay={true}
        showStats={true}
        theme= "dark"
      />
    </div>
  );
};

export default Testimonial;

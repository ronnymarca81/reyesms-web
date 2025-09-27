export interface Testimonial {
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

export interface TestimonialProps {
  testimonials: Testimonial[];
  layout?: "carousel" | "grid" | "masonry" | "single";
  autoplay?: boolean;
  showStats?: boolean;
  theme?: "light" | "dark" | "gradient";
}

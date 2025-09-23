import { useNavigate } from "react-router-dom";

export default function BannerQuote() {
  const navigate = useNavigate()
  const handleEnquiryClick = () => {
    navigate("/quote");
  };
  return (
    <section className="bg-sky-200 text-center py-16 px-4">
      {/* Heading */}
      <span className="text-3xl md:text-4xl font-semibold text-black mb-4">
        Get Started With Our{" "}
        <h1 className="font-bold">
          Professional Cleaning Services
          <span> {" "} Today</span>
        </h1>
      </span>
      {/* Description */}
      <p className="text-base md:text-lg text-black/80 max-w-2xl mx-auto my-8">
        If you’re looking for a professional cleaning service for your Ottawa
        business or commercial property, rely on our team at Jani Queen to get
        the job done right the first time around. Request a free quote from our
        team today to get started.
      </p>

      {/* CTA Button */}
      <button
        className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-700 hover:border-4  transition"
        onClick={handleEnquiryClick}
      >
        GET A QUOTE
      </button>
    </section>
  );
}


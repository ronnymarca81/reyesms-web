import { Check, Phone } from "lucide-react";
import { safetyFeatures } from "../types";
import { defaultContactInfo } from "@myTypes/ServiceApi";
import { useNavigate } from "react-router-dom";

const imageUrl = "images/cleaning-safety.png";
const imageAlt =
  "Professional cleaner wearing blue gloves sanitizing surface with spray bottle";
export default function Values() {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate("/quote");
  };

  const handleCallClick = () => {
    // Handle call action
    window.location.href = `tel:${defaultContactInfo.phone}`;
  };
  return (
    <div className="bg-white rounded-3xl overflow-hidden  max-w-7xl mx-auto mb-12">
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        {/* Left Content Section */}
        <div className="flex items-center justify-center p-8 lg:p-12 z-10 relative order-1 lg:order-2">
          <div className="max-w-xl w-full">
            <h1 className="text-2xl lg:text-3xl xl:text-5xl font-bold leading-tight mb-10">
              Our company's top priority is{" "}
              <span className="text-red-700 underline decoration-red decoration-4 underline-offset-8">
                customer safety
              </span>
            </h1>

            {/* Safety Features List */}
            <div className="space-y-6 mb-10">
              {safetyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-red-500 rounded-lg p-2 flex-shrink-0 shadow-md">
                    <Check className="w-5 h-5  text-white font-bold stroke-3" />
                  </div>
                  <span className="text-xl text-black font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 lg:space-y-0 lg:flex lg:space-x-6">
              <button
                onClick={handleEnquiryClick}
                className="w-full lg:w-auto bg-blue-500 hover:bg-red-600 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-3 border-white hover:border-white"
              >
                GET A QUOTE
              </button>

              <button
                onClick={handleCallClick}
                className="w-full lg:w-auto bg-red-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-3 border-3 border-white hover:border-white"
              >
                <Phone className="w-6 h-6" />
                <span> {defaultContactInfo.phone}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative min-h-[600px] lg:min-h-full ">
          <div className="relative h-full w-full lg:rounded-r-2xl overflow-hidden">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="absolute inset-0 w-full h-full object-cover mx-4 shadow-lg shadow-green-800"
            />

            {/* Optionally, overlay or gradient if needed */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent lg:rounded-r-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

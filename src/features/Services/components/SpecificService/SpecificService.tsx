import React, { useState, useEffect, Fragment } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { Frequency } from "./Frequency";
import Benefit from "./Benefit";
import Task from "./Task";
import CtaSection from "./CtaSection";
import AnimatedBackground from "@components/common/AnimatedBackground";
import { blobConfigs } from "@components/common/blobConfigs";
import ContentImage from "@components/common/ContentImage";
import pgImage from "@assets/images/home.png";
import { div } from "framer-motion/client";


interface SpecificServiceProps {
  serviceType?: keyof typeof blobConfigs; // "office" | "healthcare" | "spa" ...
}

const SpecificService: React.FC<SpecificServiceProps> = ({
  serviceType = "office"
}) => {
  const [animateElements, setAnimateElements] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setAnimateElements(true);

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div className=" relative overflow-hidden bg-gradient-to-br from-blue-950 via-sky-900 to-gray-900">
        {/* 🔹 Animated Background based on serviceType */}
        <AnimatedBackground blobs={blobConfigs[serviceType]} enableParallax />

        {/* Hero Section */}
        <section className="relative z-10 py-24 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div
              className={`transition-all duration-1000 ${
                animateElements
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transform: `perspective(1000px) rotateX(${
                  mousePosition.y * 10
                }deg) rotateY(${mousePosition.x * 10}deg)`,
                transition: "transform 0.2s ease-out"
              }}
            >
              <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                {serviceType.charAt(0).toUpperCase() + serviceType.slice(1)}{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-amber-400 bg-clip-text text-transparent">
                  Cleaning
                </span>
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto mb-10">
                Ensure a productive and healthy environment for your team. Our
                detailed {serviceType} cleaning services are designed to
                maintain professionalism and hygiene throughout your workspace.
              </p>
              <button
                className="bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 flex items-center space-x-3 mx-auto group"
                style={{
                  transform: `translate(${mousePosition.x * 10}px, ${
                    mousePosition.y * 10
                  }px)`,
                  transition: "transform 0.2s ease-out"
                }}
              >
                <Calendar className="h-6 w-6" />
                <span>Schedule Your Service</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>
      </div>
      <ContentImage
        title="Office Cleaning"
        paragraphs={[
          "Maintain a pristine and productive workspace with our meticulous office cleaning services. We cover everything from dusting and sanitizing surfaces to trash removal and floor care, ensuring a healthy environment for your employees and clients.",
          "We deliver exceptional cleaning solutions, maintaining pristine and professional environments that reflect your business's high standards."
        ]}
        buttons={[
          {
            label: "Get a Free Quote",
            variant: "primary",
            onClick: () => alert("Quote requested!")
          },
          {
            label: "Our Services",
            variant: "secondary",
            onClick: () => alert("Services clicked!")
          }
        ]}
        image={pgImage}
        reverse={false} // set true to swap sides
        backgroundColor="bg-sky-100"
      />
      {/* Other Sections */}
      <Task theme="light" />
      <Benefit theme="dark" />
      <Frequency theme="gradient" />
      <CtaSection theme="cta" />
    </>
  );
};

export default SpecificService;

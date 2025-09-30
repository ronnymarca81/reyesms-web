import React, { useEffect, useState } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import AnimatedBackground from "@components/common/AnimatedBackground";
import { blobConfigs } from "@components/common/blobConfigs";
import { useNavigate } from "react-router-dom";

interface HeroSectionProps {
  serviceType: keyof typeof blobConfigs;
  name: string; // e.g. ["Office", "Cleaning"]
  description: string;
  highlightIndex?: number; // which word to highlight (default: last word)
}

const HeroSection: React.FC<HeroSectionProps> = ({
  serviceType,
  name,
  description,
  highlightIndex
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

  function splitServiceName(name: string): string[] {
    return name.trim().split(" ");
  }
  const words = splitServiceName(name);
  const indexToHighlight =
    highlightIndex !== undefined ? highlightIndex : words.length - 1;
  const navigate = useNavigate()  
  const handleGetQuote = () => {
    navigate("/quote");
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-sky-900 to-gray-900">
      {/* 🔹 Animated Background */}
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
              {words.map((word, i) =>
                i === indexToHighlight ? (
                  <span
                    key={i}
                    className="bg-gradient-to-r from-blue-400 via-cyan-400 to-amber-400 bg-clip-text text-transparent"
                  >
                    {word}{" "}
                  </span>
                ) : (
                  <span key={i}>{word} </span>
                )
              )}
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto mb-10">
              {description}
            </p>

            <button
              onClick={handleGetQuote}
              className="bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 flex items-center space-x-3 mx-auto group"
              style={{
                transform: `translate(${mousePosition.x * 10}px, ${
                  mousePosition.y * 10
                }px)`,
                transition: "transform 0.2s ease-out"
              }}
            >
              <Calendar className="h-6 w-6" />
              <span>Get a Free Quote</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;

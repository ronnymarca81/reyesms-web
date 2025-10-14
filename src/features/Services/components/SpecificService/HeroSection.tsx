import React, { useEffect, useState } from 'react';
import { Calendar, ArrowRight, Sparkles } from 'lucide-react';
import AnimatedBackground from '@components/common/AnimatedBackground';
import { blobConfigs } from '@components/common/blobConfigs';
import { Button } from '@components/common/Button';

interface HeroSectionProps {
  serviceType?: keyof typeof blobConfigs;
  name: string;
  description: string;
  highlightIndex?: number;
  visible?: boolean; // 👈 New prop to toggle button
}

const HeroSection: React.FC<HeroSectionProps> = ({
  serviceType = 'office',
  name,
  description,
  highlightIndex,
  visible = true, // 👈 Default to true
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

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const words = name.trim().split(' ');
  const indexToHighlight = highlightIndex ?? words.length - 1;

  const perspectiveTransform = `perspective(1000px) rotateX(${
    mousePosition.y * 10
  }deg) rotateY(${mousePosition.x * 10}deg)`;

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-sky-900 to-gray-900">
      <AnimatedBackground blobs={blobConfigs[serviceType]} enableParallax />

      <section className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              transform: perspectiveTransform,
              transition: 'transform 0.2s ease-out',
            }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-yellow-300" />
              <span className="text-yellow-300 font-semibold text-md">
                Professional Cleaning and Maintenance Services
              </span>
            </div>

            <h2 className="text-6xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {words.map((word, i) =>
                i === indexToHighlight ? (
                  <span
                    key={i}
                    className="bg-gradient-to-r from-blue-400 via-cyan-400 to-amber-400 bg-clip-text text-transparent"
                  >
                    {word}{' '}
                  </span>
                ) : (
                  <span key={i}>{word} </span>
                )
              )}
            </h2>

            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto mb-8">
              {description}
            </p>

            {visible && (
              <Button
                variant="outline"
                size="md"
                href="/quote"
                className="inline-flex items-center space-x-3 "
              >
                <Calendar className="h-4 w-4" />
                <span>Request a Quote</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;

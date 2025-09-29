"use client";
import React, { useState, useEffect } from "react";

export interface BlobConfig {
  size: string;
  color: string;
  position: string;
  opacity: string;
  animation: string;
  translate?: { x: number; y: number };
}

interface AnimatedBackgroundProps {
  blobs: BlobConfig[];
  enableParallax?: boolean;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  blobs,
  enableParallax = true
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!enableParallax) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [enableParallax]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {blobs.map((blob, i) => (
        <div
          key={i}
          className={`${blob.position} ${blob.size} ${blob.color} ${blob.opacity} ${blob.animation} rounded-full mix-blend-multiply filter blur-3xl`}
          style={{
            transform: enableParallax
              ? `translate(${mousePosition.x * (blob.translate?.x || 0)}px, ${
                  mousePosition.y * (blob.translate?.y || 0)
                }px)`
              : "none"
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;

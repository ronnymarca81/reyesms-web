import React from "react";
import { BarChart3, Zap, Award, Target, Settings, Users } from "lucide-react";

interface GearProps {
  image: React.ReactNode;
  title: string;
  description: string;
  size?: "small" | "medium" | "large";
  rotationSpeed?: "slow" | "normal" | "fast";
  direction?: "clockwise" | "counterclockwise";
  cardPosition?: "top" | "bottom" | "left" | "right";
}

export const Gear: React.FC<GearProps> = ({
  image,
  title,
  description,
  size = "medium",
  rotationSpeed = "normal",
  direction = "clockwise",
  cardPosition = "bottom"
}) => {
  const sizeClasses = {
    small: "w-20 h-20",
    medium: "w-32 h-32",
    large: "w-40 h-40"
  };

  const speedClasses = {
    slow: "duration-8000",
    normal: "duration-6000",
    fast: "duration-4000"
  };

  const directionClass =
    direction === "clockwise"
      ? "animate-spin group-hover:animate-spin"
      : "-animate-spin group-hover:animate-spin";

  // Card positioning classes
  const cardPositionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-4",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-4",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-4",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-4"
  };

  // Arrow positioning for card
  const arrowClasses = {
    top: "top-full left-1/2 transform -translate-x-1/2 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white",
    bottom:
      "bottom-full left-1/2 transform -translate-x-1/2 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white",
    left: "left-full top-1/2 transform -translate-y-1/2 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-white",
    right:
      "right-full top-1/2 transform -translate-y-1/2 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-white"
  };

  return (
    <div className="relative flex items-center justify-center group cursor-pointer">
      {/* Information Card */}
      <div
        className={`absolute ${cardPositionClasses[cardPosition]} z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-95 pointer-events-none w-3xs`}
      >
        <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4">
          <h3 className="font-bold text-gray-800 text-sm mb-2 transition-all duration-300">
            {title}
          </h3>
          <p className="text-gray-600 text-xs leading-relaxed transform transition-all duration-300 group-hover:opacity-100 opacity-0 group-hover:translate-y-0 translate-y-2">
            {description}
          </p>
        </div>
        {/* Arrow */}
        <div className={`absolute w-0 h-0 ${arrowClasses[cardPosition]}`}></div>
      </div>

      {/* Always visible title */}
      <div
        className={`absolute ${
          cardPosition === "top"
            ? "bottom-full mb-2"
            : cardPosition === "bottom"
            ? "top-full mt-2"
            : cardPosition === "left"
            ? "right-full mr-3"
            : "left-full ml-3"
        } ${
          cardPosition === "left" || cardPosition === "right"
            ? "top-1/2 transform -translate-y-1/2"
            : "left-1/2 transform -translate-x-1/2"
        } z-10`}
      >
        <span className="text-sm font-bold text-gray-700 bg-white px-2 py-1 rounded shadow-sm border border-gray-200 whitespace-nowrap">
          {title}
        </span>
      </div>

      {/* Outer Ring */}
      <div
        className={`absolute inset-0 ${sizeClasses[size]} group-hover:${sizeClasses["large"]} opacity-20 group-hover:opacity-40 transition-all duration-500`}
      >
        <svg
          viewBox="0 0 120 120"
          className={`w-full h-full ${directionClass} ${speedClasses[rotationSpeed]}`}
        >
          <circle
            cx="60"
            cy="60"
            r="55"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="8 4"
            className="text-blue-400"
          />
        </svg>
      </div>

      {/* Main Gear */}
      <div
        className={`relative ${sizeClasses[size]} group-hover:${sizeClasses["large"]} transition-all duration-500 transform group-hover:scale-150`}
      >
        <svg
          viewBox="0 0 100 100"
          className={`w-full h-full ${directionClass} ${speedClasses[rotationSpeed]} transition-all duration-300`}
        >
          {/* Gear teeth */}
          <g className="text-blue-600 fill-current group-hover:text-blue-700 transition-colors duration-300">
            {/* Outer gear teeth */}
            {Array.from({ length: 12 }, (_, i) => (
              <rect
                key={i}
                x="48"
                y="2"
                width="4"
                height="8"
                transform={`rotate(${i * 30} 50 50)`}
                className="fill-current"
              />
            ))}

            {/* Main gear body */}
            <circle
              cx="50"
              cy="50"
              r="35"
              className="fill-current drop-shadow-lg"
            />

            {/* Inner gear teeth */}
            {Array.from({ length: 8 }, (_, i) => (
              <rect
                key={i}
                x="48"
                y="20"
                width="4"
                height="6"
                transform={`rotate(${i * 45} 50 50)`}
                className="fill-blue-800 group-hover:fill-blue-900 transition-colors duration-300"
              />
            ))}

            {/* Center circle */}
            <circle
              cx="50"
              cy="50"
              r="15"
              className="fill-blue-800 group-hover:fill-blue-900 transition-colors duration-300"
            />
          </g>
        </svg>

        {/* Icon container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 text-white flex items-center justify-center group-hover:w-10 group-hover:h-10 transition-all duration-300">
            {image}
          </div>
        </div>
      </div>

      {/* Hover glow effect */}
      <div
        className={`absolute inset-0 ${sizeClasses[size]} group-hover:${sizeClasses["large"]} bg-blue-400 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10`}
      ></div>
    </div>
  );
};

const GearsDisplay: React.FC = () => {
  const gearData = [
    {
      image: <BarChart3 className="w-6 h-6" />,
      title: "Analytics",
      description:
        "Advanced data visualization and insights to help you understand your business metrics and make informed decisions.",
      size: "medium" as const,
      rotationSpeed: "slow" as const,
      direction: "counterclockwise" as const,
      cardPosition: "bottom" as const
    },
    {
      image: <Zap className="w-6 h-6" />,
      title: "Performance",
      description:
        "Optimize your system performance with real-time monitoring, automated scaling, and intelligent resource allocation.",
      size: "large" as const,
      rotationSpeed: "fast" as const,
      direction: "counterclockwise" as const,
      cardPosition: "top" as const
    },
    {
      image: <Award className="w-6 h-6" />,
      title: "Quality Assurance",
      description:
        "Comprehensive testing framework with automated quality checks, code reviews, and continuous integration processes.",
      size: "medium" as const,
      rotationSpeed: "slow" as const,
      direction: "counterclockwise" as const,
      cardPosition: "bottom" as const
    },
    {
      image: <Target className="w-6 h-6" />,
      title: "Goal Tracking",
      description:
        "Set, monitor, and achieve your objectives with smart goal tracking, milestone management, and progress analytics.",
      size: "large" as const,
      rotationSpeed: "normal" as const,
      direction: "counterclockwise" as const,
      cardPosition: "top" as const
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Interactive Gear System
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hover over any gear to see detailed information and watch it
            transform 
          </p>
        </div>

        {/* Main gears display with more spacing for cards */}
        <div className="flex flex-wrap justify-center items-center gap-24 mb-20 py-16">
          {gearData.map((gear, index) => (
            <Gear
              key={index}
              image={gear.image}
              title={gear.title}
              description={gear.description}
              size={gear.size}
              rotationSpeed={gear.rotationSpeed}
              direction={gear.direction}
              cardPosition={gear.cardPosition}
            />
          ))}
        </div>

        {/* Demonstration Grid */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-12">
          <h2 className="text-2xl font-semibold mb-8 text-gray-800 text-center">
            Card Position Examples
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 py-12">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-8 text-gray-600">
                Top Position
              </h3>
              <Gear
                image={<Settings className="w-6 h-6" />}
                title="Settings"
                description="Configure your application settings and preferences for optimal performance."
                size="medium"
                rotationSpeed="normal"
                cardPosition="top"
              />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-medium mb-8 text-gray-600">
                Bottom Position
              </h3>
              <Gear
                image={<Users className="w-6 h-6" />}
                title="Team"
                description="Manage your team members, roles, and collaborative workflows efficiently."
                size="medium"
                rotationSpeed="normal"
                cardPosition="bottom"
              />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-medium mb-8 text-gray-600">
                Left Position
              </h3>
              <Gear
                image={<BarChart3 className="w-6 h-6" />}
                title="Reports"
                description="Generate comprehensive reports with detailed analytics and insights."
                size="medium"
                rotationSpeed="normal"
                cardPosition="left"
              />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-medium mb-8 text-gray-600">
                Right Position
              </h3>
              <Gear
                image={<Zap className="w-6 h-6" />}
                title="Automation"
                description="Streamline your workflow with intelligent automation and smart triggers."
                size="medium"
                rotationSpeed="normal"
                cardPosition="right"
              />
            </div>
          </div>
        </div>

        {/* Updated Usage Example */}
        <div className="bg-gray-900 rounded-xl p-8 text-white">
          <h3 className="text-xl font-semibold mb-4 text-gray-100">
            Enhanced Usage Example:
          </h3>
          <pre className="text-sm text-green-400 overflow-x-auto">
            {`<Gear
    image={<YourIcon className="w-6 h-6" />}
    title="Your Title"
    description="Detailed description that appears on hover"
    size="medium"
    rotationSpeed="normal"
    direction="clockwise"
    cardPosition="bottom"
    />`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default GearsDisplay;

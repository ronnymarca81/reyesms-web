import React from "react";

interface LogoProps {
  brandName: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ brandName, className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Building Icon */}
      <div className="relative w-10 h-10">
        {/* Base */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-6 bg-blue-500 rounded-sm" >
        </div>
        {/* Tower */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-3 h-4 bg-blue-600 rounded-sm">
          
        </div>
        {/* Details */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-300 rounded" />
      </div>

      {/* Text */}
      <span className="text-2xl font-bold tracking-wide">{brandName}</span>
    </div>
  );
};

export default Logo;

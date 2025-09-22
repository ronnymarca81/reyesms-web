import type { LogoProps } from "@components/layout/types";
import { defaultBrandName, defaultLastName } from "@myTypes/ServiceApi";

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="w-12 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-lg">RM</span>
      </div>
      <div className="flex flex-col">
        <span className="text-white font-bold text-2xl leading-tight">
          {defaultBrandName}
        </span>
        <span className="text-cyan-400 text-xs leading-tight">
          {defaultLastName}
        </span>
      </div>
    </div>
  );
};

export default Logo;

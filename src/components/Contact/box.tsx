import { ChevronsRight, ChevronsDown } from "lucide-react";

interface StepProps {
  number: string;
  title: string;
  description: string;
  showArrow?: boolean;
}

const Box: React.FC<StepProps> = ({
  number,
  title,
  description,
  showArrow = false,
}) => {
  return (
    <div className="group max-w-2xl flex flex-col md:flex-row items-center rounded-2xl p-6 min-w-[280px] flex-1 relative bg-white">
      {/* Number */}
      <div className="flex-shrink-0 w-26 h-16 bg-blue-500 text-white rounded-lg flex items-center justify-center text-5xl font-bold">
        {number}
      </div>

      {/* Content */}
      <div className="flex-1 bg-white/90 rounded-xl p-4 text-center md:text-left">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>

      {/* Arrow */}
      <div
        className="flex-shrink-0 text-gray-400 transition-transform duration-300 
                   group-hover:text-blue-400 group-hover:translate-x-1 mt-2 md:mt-0 md:ml-4"
      >
        {/* Arrow */}
        {showArrow && (
          <>
            {/* Desktop: ChevronRight */}
            <ChevronsRight className="hidden md:block w-10 h-10 text-gray-500 flex-shrink-0" />

            {/* Mobile: ChevronDown */}
            <ChevronsDown className="block md:hidden w-10 h-10 text-gray-500 flex-shrink-0" />
          </>
        )}
      </div>
    </div>
  );
};
export default Box;

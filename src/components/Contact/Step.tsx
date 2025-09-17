import { ChevronsRight, ChevronsDown } from "lucide-react";

interface StepProps {
  number: string;
  title: string;
  description: string;
  showArrow?: boolean;
}

const Step: React.FC<StepProps> = ({
  number,
  title,
  description,
  showArrow = false
}) => {
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-start gap-6 mt-6 mb-6  max-w-2xl">
        {/* Number */}
        <div className="flex-shrink-0 w-26 h-16 bg-blue-500 text-white rounded-lg flex items-center justify-center text-5xl font-bold">
          {number}
        </div>
        {/* Title + Description */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
          <p className="text-gray-600 text-lg">{description}</p>
        </div>
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
export default Step;

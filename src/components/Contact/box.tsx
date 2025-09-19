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
    <>
      <div className="block md:hidden p-2">
        <div className="flex flex-col  justify-center">
          <div className="bg-sky-200 rounded-2xl grid grid-cols-3 gap-2">
            <div className="my-2 mx-2 bg-blue-500 text-white rounded-lg flex items-center justify-center text-5xl font-bold">
              {number}
            </div>
            <div className="bg-white my-2 mx-2  rounded-lg flex place-items-center col-start-2 col-end-4 text-2xl font-bold text-gray-800">
              {title}
            </div>
            <div className="bg-white mx-2 mt-2 mb-4  rounded-lg col-start-1 col-end-4 ">
              {description}
            </div>
          </div>
          {/* Arrow */}
          {showArrow && (
            <div className="mt-6 flex justify-center items-center">
              <ChevronsDown className="w-10 h-10 text-blue-700" />
            </div>
          )}
        </div>
      </div>
      <div className="hidden md:block p-2 ">
        <div className="grid grid-flow-col grid-rows-3">
          <div className="col-start-1 col-span-3 flex  rounded-t-2xl">
            {/* Number */}
            <div className="my-2 mx-2 w-26 h-16 bg-blue-500 text-white rounded-lg flex items-center justify-center text-5xl font-bold">
              {number}
            </div>
            {/* Content */}
            <div className="mt-2 mx-2 flex items-center flex-grow ">
              <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
            </div>
          </div>
          <div className="col-start-1 col-span-3  rounded-b-2xl">
            <p className=" text-gray-600 text-lg">{description}</p>
          </div>
          {showArrow && (
            <div className="mx-8 row-span-2 flex items-center justify-center">
              <ChevronsRight className="w-10 h-10 text-gray-500 flex-shrink-0 " />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Box;

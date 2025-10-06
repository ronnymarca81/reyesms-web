import React from "react";
import { type Variants, easeOut } from "framer-motion";
import { ChevronsRight } from "lucide-react";
import { motion } from "framer-motion";
import type { StepProps } from "../types";

// Card animation
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut }
  }
};

// Arrow animation (directional)
const arrowVariantsMobile: Variants = {
  hidden: { opacity: 0, y: -15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut, delay: 0.3 }
  }
};

const arrowVariantsDesktop: Variants = {
  hidden: { opacity: 0, x: -15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: easeOut, delay: 0.3 }
  }
};

const Step: React.FC<StepProps> = ({
  icon: Icon,
  number,
  title,
  description,
  color = "bg-blue-500",
  showArrow = false
}) => {
  return (
    <motion.div
      className="flex flex-col lg:flex-row items-center w-full lg:w-auto lg:flex-1"
      initial="hidden"
      animate="visible"
      variants={{}}
    >
      {/* Step Card */}
      <motion.div
        className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-sm hover:shadow-md transition-all h-full max-w-md mx-auto lg:max-w-none"
        variants={cardVariants}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-start justify-between gap-3 mb-2">
          <div
            className={`${color} text-white font-bold text-xl sm:text-2xl rounded-lg px-3 sm:px-4 py-2 flex-shrink-0`}
          >
            {Icon ? <Icon className="w-5 h-5" /> : number}
          </div>
          <h3 className="font-bold text-gray-900 text-base sm:text-lg leading-tight pt-2">
            {title}
          </h3>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </motion.div>

      {/* Arrow Separator */}
      {showArrow && (
        <>
          {/* Mobile/Tablet: Vertical Arrow */}
          <motion.div
            className="flex lg:hidden items-center justify-center py-2"
            variants={arrowVariantsMobile}
          >
            <ChevronsRight className="text-blue-600 w-6 h-6 sm:w-8 sm:h-8 rotate-90 stroke-3" />
          </motion.div>

          {/* Desktop: Horizontal Arrow */}
          <motion.div
            className="hidden lg:flex items-center justify-center px-2 xl:px-4"
            variants={arrowVariantsDesktop}
            animate="visible"
          >
            <ChevronsRight className="text-blue-600 w-6 h-6 xl:w-8 xl:h-8 flex-shrink-0 stroke-3 " />
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

export default Step;

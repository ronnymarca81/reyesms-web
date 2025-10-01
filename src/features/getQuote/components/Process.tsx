import React from "react";
import { defaultSteps } from "../serviceApi";
import Step from "./Step";
import Request from "./Request";
import { motion, type Variants } from "framer-motion";

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 } // stagger steps automatically
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Process: React.FC = () => {
  return (
    <div className="w-full bg-sky-100 py-16 px-4">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-4"
          variants={itemVariants}
        >
          Simple 4 Steps Process
        </motion.h2>

        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        />
      </motion.div>

      {/* Steps Section */}
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="mb-8 flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-1">
          {defaultSteps.map((step, index) => (
            <motion.div key={step.number} variants={itemVariants}>
              <Step
                number={step.number}
                title={step.title}
                description={step.description}
                showArrow={step.showArrow}
                isVisible={true} // not needed anymore, but if Step uses it internally keep it
                delay={index * 200} // optional, framer already staggers but you can keep it
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact + Request Section */}
      <motion.div
        className="bg-sky-100 container mx-auto px-2 py-1 mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-7xl mx-auto items-start"
          variants={itemVariants}
        >
          {/* Get Estimate Form Component */}
          <div className="w-full md:sticky md:top-8">
            <Request />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Process;

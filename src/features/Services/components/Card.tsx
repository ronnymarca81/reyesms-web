import { ChevronsRight } from "lucide-react";
import { motion } from "framer-motion";

interface CardProps {
  image: string;
  title: string;
  description: string;
  onLearnMore?: () => void;
}

export const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  onLearnMore
}) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden group relative"
    >
      {/* Image with gradient overlay */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
        <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold drop-shadow-lg">
          {title}
        </h3>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

        {/* Animated Button */}
        <motion.button
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
          onClick={onLearnMore}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300"
        >
          Learn More
          <ChevronsRight className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  );
};

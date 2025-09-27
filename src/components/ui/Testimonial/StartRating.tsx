import { Star } from 'lucide-react'

const StarRating: React.FC<{ rating: number; size?: "sm" | "md" | "lg" }> = ({
  rating,
  size = "md"
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };

  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${sizeClasses[size]} ${
            star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          } transition-colors duration-200`}
        />
      ))}
    </div>
  );
};
export default StarRating
import { Star, Users, Heart} from 'lucide-react'
import type{ Testimonial } from './types'
const Stats: React.FC<{ testimonials: Testimonial[] }> = ({
  testimonials
}) => {
  const averageRating =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;
  const totalReviews = testimonials.length;
  const verifiedCount = testimonials.filter((t) => t.verified).length;

  return (
    <div className="bg-gradient-to-r from-blue-500 to-sky-800 rounded-2xl p-8 text-white mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            <span className="text-3xl font-bold">
              {averageRating.toFixed(1)}
            </span>
          </div>
          <p className="text-blue-100">Average Rating</p>
        </div>
        <div>
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Users className="w-8 h-8 text-blue-200" />
            <span className="text-3xl font-bold">{totalReviews}</span>
          </div>
          <p className="text-blue-100">Total Reviews</p>
        </div>
        <div>
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Heart className="w-8 h-8 text-red-400 fill-red-400" />
            <span className="text-3xl font-bold">
              {Math.round((verifiedCount / totalReviews) * 100)}%
            </span>
          </div>
          <p className="text-blue-100">Satisfaction Rate</p>
        </div>
      </div>
    </div>
  );
};

export default Stats

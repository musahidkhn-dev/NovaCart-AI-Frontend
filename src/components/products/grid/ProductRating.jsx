import { Star } from "lucide-react";

const ProductRating = ({ rating, reviews }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1 rounded-full bg-yellow-100 px-2 py-0.5">
        <Star
          size={12}
          fill="currentColor"
          className="text-yellow-500"
        />

        <span className="text-[11px] font-semibold">
          {rating}
        </span>
      </div>

      <span className="text-xs text-muted">
        ({reviews})
      </span>
    </div>
  );
};

export default ProductRating;
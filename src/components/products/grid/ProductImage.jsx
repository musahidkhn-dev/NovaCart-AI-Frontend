import { Heart } from "lucide-react";

const ProductImage = ({ image, title }) => {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <img
        src={image}
        alt={title}
        className="h-[135px] w-full object-contain transition-transform duration-300 group-hover:scale-105"
      />

      <button
        type="button"
        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-black/5 transition hover:scale-105"
        aria-label={`Add ${title} to wishlist`}
      >
        <Heart size={15} strokeWidth={1.8} />
      </button>
    </div>
  );
};

export default ProductImage;
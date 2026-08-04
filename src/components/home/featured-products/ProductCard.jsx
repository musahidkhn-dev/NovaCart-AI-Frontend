import { Heart, Scale, ShoppingCart, Star } from "lucide-react";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  return (
    <motion.article
      transition={{ duration: 0.25 }}
      className="group w-full max-w-[360px] overflow-hidden rounded-[28px] border border-border bg-white shadow-lg transition-all duration-300 hover:border-primary/30 hover:shadow-2xl"
    >
      {/* Image */}

      <div className="relative z-0 flex h-[240px] items-center justify-center bg-[#FCFAF7] p-6">
        <button className="absolute right-5 top-5 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white transition-all duration-300 hover:scale-110">
          <Heart
            size={18}
            className="transition-colors duration-300 group-hover:text-primary"
          />
        </button>

        <span className="absolute left-5 top-5 z-20 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
          {product.badge}
        </span>

        <img
          src={product.image}
          alt={product.name}
          className="mx-auto max-h-[180px] w-auto object-contain transition duration-500 group-hover:scale-103"
        />
      </div>

      {/* Content */}

      <div className="space-y-3 p-5">
        <p className="text-sm text-muted">
          {product.brand}
        </p>

        <h3 className="line-clamp-2 text-xl font-bold">
          {product.name}
        </h3>

        <div className="flex items-center gap-2">
          <Star
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />

          <span className="font-semibold">
            {product.rating}
          </span>

          <span className="text-sm text-muted">
            ({product.reviews})
          </span>
        </div>

        <div className="flex items-end gap-3">
          <span className="text-3xl font-bold">
            {product.price}
          </span>

          <span className="pb-1 text-sm text-muted line-through">
            {product.originalPrice}
          </span>
        </div>

        <div className="inline-flex rounded-full bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
          AI Score {product.aiScore}
        </div>

        <div className="flex gap-3 pt-2">
          <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-5 py-3 transition-all duration-300 hover:border-primary hover:bg-primary/5">
            <Scale size={18} />
            Compare
          </button>

          <button className="flex flex-[1.3] items-center justify-center gap-2 rounded-xl bg-primary py-3  font-medium text-white transition-all duration-300 hover:opacity-90">
            <ShoppingCart size={18} />
            Add 
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default ProductCard;
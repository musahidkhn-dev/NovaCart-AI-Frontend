import { Heart, Scale, ShoppingCart, Star } from "lucide-react";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-[28px] border border-border bg-surface shadow-soft transition-all duration-300 hover:shadow-card"
    >
      {/* Image Section */}

      <div className="relative bg-background p-8">
        <button className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white transition hover:scale-110">
          <Heart size={18} />
        </button>

        <span className="absolute left-5 top-5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
          {product.badge}
        </span>

        <img
          src={product.image}
          alt={product.name}
          className="mx-auto h-56 object-contain transition duration-300 group-hover:scale-110"
        />
      </div>

      {/* Content */}

      <div className="space-y-3 p-6">
        <p className="text-sm text-muted">
          {product.brand}
        </p>

        <h3 className="line-clamp-2 text-xl font-bold">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 text-sm">
          <Star
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />

          <span className="font-medium">
            {product.rating}
          </span>

          <span className="text-muted">
            ({product.reviews})
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold">
            {product.price}
          </span>

          <span className="text-sm text-muted line-through">
            {product.originalPrice}
          </span>
        </div>

        <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
          AI Score {product.aiScore}
        </div>

        <div className="mt-5 flex gap-3">
          <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border py-3 transition hover:bg-surface-alt">
            <Scale size={18} />

            Compare
          </button>

          <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary py-3 font-medium text-white transition hover:opacity-90">
            <ShoppingCart size={18} />

            Add
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default ProductCard;
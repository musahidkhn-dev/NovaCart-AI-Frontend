import { Heart } from "lucide-react";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";
import ProductRating from "./ProductRating";
import ProductActions from "./ProductActions";
import { Link } from "react-router-dom";
import { useWishlist } from "../../../context/useWishlist";

const ProductCard = ({ product }) => {
  const { toggleWishlist, isInWishlist } = useWishlist();

  const wishlist = isInWishlist(product.id);
  return (
    <div className="group overflow-hidden rounded-2xl border border-border bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Recommendation */}
      {product.isAIPick && (
        <div className="mb-2">
          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-medium text-primary">
            Nova Pick
          </span>
        </div>
      )}

      {/* Image Section */}
      <div className="relative h-[155px] w-full rounded-xl bg-[#faf8f5]">
        <Link to={`/products/${product.id}`} className="block h-full">
          <ProductImage image={product.image} title={product.title} />
        </Link>

        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white shadow-sm transition-all duration-200 hover:scale-105 hover:border-primary"
          aria-label={
            wishlist
              ? `Remove ${product.title} from wishlist`
              : `Add ${product.title} to wishlist`
          }
        >
          <Heart
            size={17}
            className={
              wishlist
                ? "fill-primary text-primary"
                : "text-muted hover:text-primary"
            }
          />
        </button>
      </div>

      {/* Product Details */}
      <div className="mt-4">
        <p className="text-[10px] font-medium uppercase tracking-wide text-primary">
          {product.brand}
        </p>

        <div className="grid grid-cols-[1fr_auto] items-start gap-x-3">
          <div>
            <Link to={`/products/${product.id}`} className="block">
              <h3 className="line-clamp-2 text-base font-bold leading-tight transition hover:text-primary">
                {product.title}
              </h3>
            </Link>

            <div className="mt-1.5">
              <ProductRating
                rating={product.rating}
                reviews={product.reviews}
              />
            </div>
          </div>

          <div className="text-right">
            <ProductPrice
              price={product.price}
              originalPrice={product.originalPrice}
            />
          </div>
        </div>

        <div className="mt-1 flex items-center justify-end gap-2">
          <span className="rounded-full bg-green-100 px-2 py-0.5 text-[9px] font-medium text-green-700">
            In Stock
          </span>

          <span className="text-[10px] text-muted">🚚 Free Delivery</span>
        </div>

        <div className="mt-2">
          <ProductActions product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";
import ProductRating from "./ProductRating";
import ProductActions from "./ProductActions";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
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
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative h-[155px] w-full rounded-xl bg-[#faf8f5]">
          <ProductImage image={product.image} title={product.title} />
        </div>
      </Link>

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
          <ProductActions />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

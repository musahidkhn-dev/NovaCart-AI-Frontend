import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../grid/ProductCard";

const RelatedProducts = ({ currentProductId }) => {
  const relatedProducts = products
    .filter((product) => product.id !== currentProductId)
    .slice(0, 3);

  return (
    <section className="mt-14 border-t border-border pt-10">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            You May Also Like
          </h2>

          <p className="mt-1 text-sm text-muted">
            Explore more products you might like.
          </p>
        </div>

        <Link
          to="/products"
          className="text-sm font-medium text-primary hover:underline"
        >
          View All
        </Link>
      </div>

      <div className="mt-7 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {relatedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={{
              ...product,
              isAIPick: false,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
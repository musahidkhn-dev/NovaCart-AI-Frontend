import { AnimatePresence, motion } from "framer-motion";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products, search, setSearch, filters, setFilters }) => {
  if (products.length === 0) {
    return (
      <div className="flex min-h-[280px] items-center justify-center rounded-2xl border border-border bg-white px-6 text-center">
        <div>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl">
            🔍
          </div>

          <h3 className="mt-4 text-lg font-semibold">No products found</h3>

          <p className="mt-2 text-sm text-muted">
            We couldn't find any products matching your search or filters.
          </p>
          
          <div className="mt-5 flex justify-center gap-3">
            {search.trim() && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="rounded-lg bg-primary px-4 py-2 text-xs font-medium text-white transition hover:opacity-90"
              >
                Clear Search
              </button>
            )}

            {(filters.category ||
              filters.brand ||
              filters.price ||
              filters.rating) && (
              <button
                type="button"
                onClick={() =>
                  setFilters({
                    category: "",
                    brand: "",
                    price: null,
                    rating: null,
                  })
                }
                className="rounded-lg border border-border px-4 py-2 text-xs font-medium transition hover:bg-gray-50"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
  return (
    <AnimatePresence mode="popLayout">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <motion.div
            key={product.id}
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.35, 1],
            }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
    </div>
      </AnimatePresence>
  );
};

export default ProductGrid;

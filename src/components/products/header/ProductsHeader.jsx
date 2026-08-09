import { ChevronRight } from "lucide-react";

const ProductsHeader = () => {
  return (
    <div className="border-b border-border pb-8">
      {/* Breadcrumb */}

      <div className="flex items-center gap-2 text-sm text-muted">
        <span>Home</span>

        <ChevronRight size={16} />

        <span className="font-medium text-heading">
          Products
        </span>
      </div>

      {/* Heading */}

      <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-4xl font-black tracking-tight">
            All Products
          </h1>

          <p className="mt-3 max-w-2xl text-lg leading-8 text-muted">
            Discover thousands of products powered by AI recommendations,
            smart comparisons and trusted sellers.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 lg:items-end">
          <p className="text-sm text-muted">
            Showing{" "}
            <span className="font-semibold text-heading">
              24
            </span>{" "}
            of{" "}
            <span className="font-semibold text-heading">
              240
            </span>{" "}
            products
          </p>

          <select className="rounded-2xl border border-border bg-white px-4 py-3 outline-none transition-all focus:border-primary">
            <option>Featured</option>

            <option>Newest</option>

            <option>Price : Low to High</option>

            <option>Price : High to Low</option>

            <option>Highest Rated</option>

            <option>Best AI Score</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductsHeader;
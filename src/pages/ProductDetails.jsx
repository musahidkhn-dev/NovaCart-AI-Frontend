import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  ArrowLeft,
  Heart,
  ShoppingCart,
  Truck,
  ShieldCheck,
} from "lucide-react";

import { products } from "../components/products/data/products";
import ProductReviews from "../components/products/details/ProductReviews";
import RelatedProducts from "../components/products/related/RelatedProducts";

const ProductDetails = () => {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="mx-auto w-full max-w-7xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>

        <Link
          to="/products"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary"
        >
          <ArrowLeft size={16} />
          Back to Products
        </Link>
      </div>
    );
  }

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100,
  );

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center gap-2 text-sm text-muted">
        <Link to="/products" className="transition hover:text-primary">
          Products
        </Link>

        <span>/</span>

        <span>{product.brand}</span>

        <span>/</span>

        <span className="text-heading">{product.title}</span>
      </div>

      {/* Main Product Section */}
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Product Image */}
        <div className="relative flex min-h-[420px] items-center justify-center rounded-2xl bg-[#faf8f5] p-10">
          <img
            src={product.image}
            alt={product.title}
            className="h-[360px] w-full object-contain"
          />

          <button
            type="button"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-105"
            aria-label={`Add ${product.title} to wishlist`}
          >
            <Heart size={20} />
          </button>

          {product.isAIPick && (
            <span className="absolute left-5 top-5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Nova Pick
            </span>
          )}
        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-center">
          <p className="text-xs font-medium uppercase tracking-widest text-primary">
            {product.brand}
          </p>

          <h1 className="mt-2 text-3xl font-bold leading-tight lg:text-4xl">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="mt-4 flex items-center gap-3">
            <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-800">
              ⭐ {product.rating}
            </span>

            <span className="text-sm text-muted">
              {product.reviews} reviews
            </span>
          </div>

          {/* Price */}
          <div className="mt-7">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold">
                ₹{product.price.toLocaleString()}
              </span>

              <span className="text-base text-muted line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            </div>

            <span className="mt-2 inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              {discount}% OFF
            </span>
          </div>

          {/* Availability */}
          <div className="mt-7 flex flex-wrap gap-3">
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              In Stock
            </span>

            <span className="flex items-center gap-1 text-sm text-muted">
              <Truck size={16} />
              Free Delivery
            </span>
          </div>

          {/* Benefits */}
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-xl border border-border p-3">
              <Truck size={18} className="text-primary" />

              <div>
                <p className="text-sm font-medium">Free Delivery</p>

                <p className="text-xs text-muted">Fast and reliable delivery</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-border p-3">
              <ShieldCheck size={18} className="text-primary" />

              <div>
                <p className="text-sm font-medium">Secure Purchase</p>

                <p className="text-xs text-muted">
                  Safe and protected checkout
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex gap-3">
            <button
              type="button"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-medium transition hover:bg-gray-50"
            >
              <Heart size={18} />
              Wishlist
            </button>

            <button
              type="button"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              <ShoppingCart size={18} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Product Information */}
      <div className="mt-14 border-t border-border pt-10">
        <h2 className="text-2xl font-bold">Product Information</h2>

        {/* About Product */}
        <div className="mt-6 rounded-2xl border border-border bg-[#faf8f5] p-6">
          <h3 className="text-lg font-semibold">About this product</h3>

          <p className="mt-3 max-w-5xl text-sm leading-7 text-muted">
            {product.description}
          </p>
        </div>

        {/* Specifications */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold">Specifications</h3>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {Object.entries(product.specifications || {}).map(
              ([key, value]) => (
                <div
                  key={key}
                  className="rounded-xl border border-border bg-white px-5 py-4 transition hover:border-primary/30"
                >
                  <p className="text-xs font-medium uppercase tracking-wide text-muted">
                    {key}
                  </p>

                  <p className="mt-1.5 text-sm font-semibold text-heading">
                    {value}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
      <ProductReviews
        rating={product.rating}
        reviews={product.reviews}
        reviewList={product.reviewList}
      />
      <RelatedProducts currentProductId={product.id} />
    </div>
  );
};

export default ProductDetails;

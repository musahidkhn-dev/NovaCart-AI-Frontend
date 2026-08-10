import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

import ProductCard from "../components/products/grid/ProductCard";
import { useWishlist } from "../context/UseWishlist";

const Wishlist = () => {
  const {
    wishlistItems,
    } = useWishlist();

  return (
    <Section>
      <Container>
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 text-sm text-muted">
            <span>Home</span>
            <span>/</span>
            <span className="font-medium text-heading">
              Wishlist
            </span>
          </div>

          <h1 className="mt-5 text-4xl font-black tracking-tight">
            My Wishlist
          </h1>

          <p className="mt-2 text-sm text-muted">
            {wishlistItems.length}{" "}
            {wishlistItems.length === 1 ? "item" : "items"} saved
          </p>
        </div>

        {/* Wishlist */}
        {wishlistItems.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {wishlistItems.map((product) => (
              <div key={product.id} className="relative">
                <ProductCard product={product} />

                
              </div>
            ))}
          </div>
        ) : (
          /* Empty Wishlist */
          <div className="mt-10 flex min-h-[420px] items-center justify-center rounded-2xl border border-border bg-white px-6 text-center">
            <div className="max-w-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Heart size={28} />
              </div>

              <h2 className="mt-6 text-2xl font-bold">
                Your wishlist is empty
              </h2>

              <p className="mt-3 text-sm leading-6 text-muted">
                Save products you love and find them easily later.
              </p>

              <Link
                to="/products"
                className="mt-7 inline-flex rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore Products
              </Link>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
};

export default Wishlist;
import { Search, Heart, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useCart } from "../../../context/useCart";
import { useWishlist } from "../../../context/useWishlist";

const NavbarActions = () => {
  const { cartCount } = useCart();

  const { wishlistItems } = useWishlist();

  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    const query = search.trim();

    if (!query) return;

    navigate(`/products?search=${encodeURIComponent(query)}`);
    setSearchOpen(false);
    setSearch("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }

    if (event.key === "Escape") {
      setSearchOpen(false);
      setSearch("");
    }
  };

  return (
    <div className="flex items-center gap-3">
      {/* Search */}
      {searchOpen ? (
        <div className="flex h-10 w-52 items-center rounded-xl border border-border bg-white px-3 transition-all duration-300 sm:w-64">
          <Search size={17} className="shrink-0 text-muted" />

          <input
            autoFocus
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search products..."
            className="ml-2 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted"
          />

          <button
            type="button"
            onClick={() => {
              setSearchOpen(false);
              setSearch("");
            }}
            className="ml-2 text-muted transition hover:text-heading"
            aria-label="Close search"
          >
            <X size={16} />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setSearchOpen(true)}
          aria-label="Search products"
          className="flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200 hover:bg-surface-alt"
        >
          <Search size={18} />
        </button>
      )}

      {/* Wishlist */}
      <Link
        to="/wishlist"
        aria-label="Open wishlist"
        className="relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200 hover:bg-surface-alt"
      >
        <Heart size={18} />

        {wishlistItems.length > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-white">
            {wishlistItems.length}
          </span>
        )}
      </Link>

      {/* Cart */}
      <Link
        to="/cart"
        aria-label="Open cart"
        className="relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200 hover:bg-surface-alt"
      >
        <ShoppingCart size={18} />

        {cartCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-white">
            {cartCount}
          </span>
        )}
      </Link>

      {/* Login */}
      <Link
        to="/login"
        className="rounded-xl bg-primary px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary-hover"
      >
        Login
      </Link>
    </div>
  );
};

export default NavbarActions;
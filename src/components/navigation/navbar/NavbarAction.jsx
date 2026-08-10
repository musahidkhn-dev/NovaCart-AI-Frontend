import { Search, Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

import { useCart } from "../../../context/useCart";
import { useWishlist } from "../../../context/useWishlist";

const NavbarActions = () => {
  const { cartCount } = useCart();
  const { wishlistItems } = useWishlist();

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200 hover:bg-surface-alt"
      >
        <Search size={18} />
      </button>

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

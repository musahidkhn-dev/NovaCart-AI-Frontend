import { Search, Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const NavbarActions = () => {
  return (
    <div className="hidden items-center gap-3 lg:flex">

      <button
        className="flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200 hover:bg-surface-alt"
      >
        <Search size={18} />
      </button>

      <button
        className="flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200 hover:bg-surface-alt"
      >
        <Heart size={18} />
      </button>

      <button
        className="relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200 hover:bg-surface-alt"
      >
        <ShoppingCart size={18} />

        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-white">
          0
        </span>
      </button>

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
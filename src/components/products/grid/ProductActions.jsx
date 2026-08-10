import { GitCompare, ShoppingCart } from "lucide-react";
import { useCart } from "../../../context/useCart";

const ProductActions = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="flex gap-2">
      <button
        type="button"
        className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border py-1.5 text-[11px] font-medium text-heading transition hover:bg-gray-50"
      >
        <GitCompare size={14} />
        Compare
      </button>

      <button
        type="button"
        onClick={() => addToCart(product)}
        className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary py-1.5 text-[11px] font-medium text-white transition hover:opacity-90"
      >
        <ShoppingCart size={14} />
        Add
      </button>
    </div>
  );
};

export default ProductActions;
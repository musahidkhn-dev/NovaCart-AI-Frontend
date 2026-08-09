import { GitCompare, ShoppingCart } from "lucide-react";

const ProductActions = () => {
  return (
    <div className="flex gap-2">
      <button className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border py-1.5 text-[11px] font-medium transition hover:bg-primary/5">
        <GitCompare size={14} />
        Compare
      </button>

      <button className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary py-1.5 text-[11px] font-medium text-white transition hover:opacity-90">
        <ShoppingCart size={14} />
        Add
      </button>
    </div>
  );
};

export default ProductActions;
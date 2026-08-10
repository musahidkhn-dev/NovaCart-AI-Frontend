import { Minus, Plus, Trash2 } from "lucide-react";

const CartItem = ({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  return (
    <div className="flex flex-col gap-4 py-6 sm:grid sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8">
      {/* Product */}
      <div className="flex min-w-0 gap-4 sm:gap-5">
        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-[#faf8f5] p-3 sm:h-28 sm:w-28">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-contain"
          />
        </div>

        <div className="min-w-0 pt-1">
          <p className="text-[10px] font-medium uppercase tracking-wider text-primary">
            {item.brand}
          </p>

          <h3 className="mt-1 text-base font-semibold leading-tight">
            {item.title}
          </h3>

          <p className="mt-2 text-lg font-bold">
            ₹{item.price.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Quantity + Remove */}
      <div className="flex items-center justify-between gap-4 sm:justify-end sm:gap-8">
        <div className="flex items-center rounded-lg border border-border">
          <button
            type="button"
            onClick={() => onDecrease(item.id)}
            disabled={item.quantity === 1}
            className="flex h-8 w-8 items-center justify-center text-muted transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label={`Decrease quantity of ${item.title}`}
          >
            <Minus size={14} />
          </button>

          <span className="flex h-8 min-w-8 items-center justify-center border-x border-border px-2 text-sm font-medium">
            {item.quantity}
          </span>

          <button
            type="button"
            onClick={() => onIncrease(item.id)}
            className="flex h-8 w-8 items-center justify-center text-muted transition hover:bg-gray-50"
            aria-label={`Increase quantity of ${item.title}`}
          >
            <Plus size={14} />
          </button>
        </div>

        <button
          type="button"
          onClick={() => onRemove(item.id)}
          className="flex items-center gap-1.5 text-xs font-medium text-muted transition hover:text-red-500"
        >
          <Trash2 size={14} />
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
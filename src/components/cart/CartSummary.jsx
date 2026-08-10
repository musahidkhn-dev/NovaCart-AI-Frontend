import { ArrowRight } from "lucide-react";

const CartSummary = ({
  subtotal,
  discount,
  delivery,
  total,
}) => {
  return (
    <div className="rounded-2xl border border-border bg-white p-5 sm:p-6">
      <h2 className="text-lg font-bold">
        Order Summary
      </h2>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted">
            Subtotal
          </span>

          <span className="font-medium">
            ₹{subtotal.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-muted">
            Discount
          </span>

          <span className="font-medium text-green-600">
            -₹{discount.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-muted">
            Delivery
          </span>

          <span className="font-medium text-green-600">
            {delivery === 0
              ? "Free"
              : `₹${delivery.toLocaleString()}`}
          </span>
        </div>
      </div>

      <div className="my-5 border-t border-border" />

      <div className="flex items-center justify-between">
        <span className="text-base font-semibold">
          Total
        </span>

        <span className="text-xl font-bold">
          ₹{total.toLocaleString()}
        </span>
      </div>

      <button
        type="button"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
      >
        Proceed to Checkout
        <ArrowRight size={16} />
      </button>

      <p className="mt-3 text-center text-[11px] text-muted">
        Secure checkout · Safe payment
      </p>
    </div>
  );
};

export default CartSummary;
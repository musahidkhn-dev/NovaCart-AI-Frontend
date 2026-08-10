import { ArrowLeft, ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

import CartList from "../components/cart/CartList";
import CartSummary from "../components/cart/CartSummary";

import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

import { useCart } from "../context/useCart";

const Cart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const originalTotal = cartItems.reduce(
    (total, item) =>
      total + (item.originalPrice ?? item.price) * item.quantity,
    0,
  );

  const discount = originalTotal - subtotal;

  const delivery = subtotal > 0 ? 0 : 0;

  const total = subtotal + delivery;

  return (
    <Section>
      <Container>
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-heading"
            >
              <ArrowLeft size={16} />
              Continue Shopping
            </Link>

            <h1 className="mt-4 text-4xl font-black tracking-tight">
              Your Cart
            </h1>

            <p className="mt-2 text-sm text-muted">
              {cartItems.length}{" "}
              {cartItems.length === 1 ? "item" : "items"} in your cart
            </p>
          </div>

          <div className="hidden h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary sm:flex">
            <ShoppingBag size={22} />
          </div>
        </div>

        {/* Cart Content */}
        {cartItems.length > 0 ? (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
            <CartList
              items={cartItems}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
              onRemove={removeFromCart}
            />

            <div className="lg:sticky lg:top-24 lg:self-start">
              <CartSummary
                subtotal={subtotal}
                discount={discount}
                delivery={delivery}
                total={total}
              />
            </div>
          </div>
        ) : (
          /* Empty Cart */
          <div className="mt-10 flex min-h-[420px] items-center justify-center rounded-2xl border border-border bg-white px-6 text-center">
            <div className="max-w-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <ShoppingBag size={28} />
              </div>

              <h2 className="mt-6 text-2xl font-bold">
                Your cart is empty
              </h2>

              <p className="mt-3 text-sm leading-6 text-muted">
                Looks like you haven't added anything to your cart yet.
                Explore our products and find something you'll love.
              </p>

              <Link
                to="/products"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore Products
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
};

export default Cart;
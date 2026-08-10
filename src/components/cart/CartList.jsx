import CartItem from "./CartItem";

const CartList = ({
  items,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  return (
    <div className="rounded-2xl border border-border bg-white px-5">
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default CartList;
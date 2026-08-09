const ProductPrice = ({ price, originalPrice }) => {
  const discount = Math.round(
    ((originalPrice - price) / originalPrice) * 100
  );

  return (
    <div className="flex flex-col items-end">
      <div className="flex items-baseline gap-2">
        <span className="text-xl font-bold leading-none">
          ₹{price.toLocaleString()}
        </span>

        <span className="text-[10px] text-muted line-through">
          ₹{originalPrice.toLocaleString()}
        </span>
      </div>

      <span className="mt-1 rounded-full bg-green-100 px-2 py-0.5 text-[9px] font-medium text-green-700">
        {discount}% OFF
      </span>
    </div>
  );
};

export default ProductPrice;
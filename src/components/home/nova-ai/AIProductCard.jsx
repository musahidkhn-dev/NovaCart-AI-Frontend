const AIProductCard = ({ product }) => {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-border bg-white p-3 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
      
      <div className="flex items-center gap-3">
        <img
          src={product.image}
          alt={product.name}
          className="h-14 w-14 rounded-xl object-cover bg-surface"
        />

        <div>
          <h4 className="font-semibold">{product.name}</h4>

          <p className="text-xs text-muted">
            {product.specs}
          </p>
        </div>
      </div>

      <span className="font-bold text-primary">
        {product.price}
      </span>
    </div>
  );
};

export default AIProductCard;
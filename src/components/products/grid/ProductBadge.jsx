const ProductBadge = ({ isAIPick }) => {
  if (!isAIPick) return null;

  return (
    <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
      AI Pick
    </span>
  );
};

export default ProductBadge;
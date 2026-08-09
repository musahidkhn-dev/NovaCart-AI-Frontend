import ProductCard from "./ProductCard";
import { products } from "../data/products";

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-6 2xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
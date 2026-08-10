import { useState } from "react";

import ProductsHeader from "../components/products/header/ProductsHeader";
import FilterSidebar from "../components/products/filters/FilterSidebar";
import ProductGrid from "../components/products/grid/ProductGrid";
import Pagination from "../components/products/pagination/Pagination";

import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

import { products } from "../components/products/data/products";

const Products = () => {
  const [filters, setFilters] = useState({
    category: "",
    brand: "",
    price: null,
    rating: null,
  });

  const [sort, setSort] = useState("featured")

  const filteredProducts = products.filter((product) => {
    if(
        filters.category &&
        product.category !== filters.category
    ) {
      return false;
    }

    if(
        filters.brand && 
        product.brand !== filters.brand
    ) {
      return false;
    }

    if(filters.price ) {
      const {min, max} = filters.price;

      if(product.price < min) {
        return false;
      }

      if(max !== null && product.price > max) {
        return false;
      }
    }

    if(
        filters.rating &&
        product.rating < filters.rating
    ) {
      return false;
    }
    return true;
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sort) {
      case "price_low_to_high":
        return a.price - b.price;

      case "price_high_to_low":
        return b.price - a.price;
      
      case "highest_rated":
        return  b.rating - a.rating;

      case "newest":
        return 0;

      case "featured":
      default:
        return 0;
    }
  });



  return (
    <Section>
      <Container>

        <ProductsHeader 
          sort={sort}
          setSort={setSort}
          productCount={sortedProducts.length}
        />

        <div className="mt-10 flex gap-8">

          <aside className="hidden w-72 lg:block">
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
             />
          </aside>

          <main className="flex-1">
            <ProductGrid
              products={sortedProducts}
             />

            <div className="mt-12">
              <Pagination />
            </div>
          </main>

        </div>

      </Container>
    </Section>
  );
};

export default Products;
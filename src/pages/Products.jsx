import { useEffect, useState } from "react";

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

  const [sort, setSort] = useState("featured");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 6;

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  const filteredProducts = products.filter((product) => {
    if (debouncedSearch.trim()) {
      const query = debouncedSearch.toLowerCase().trim();

      const matchesSearch =
        product.title.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);

      if (!matchesSearch) {
        return false;
      }
    }

    if (filters.category && product.category !== filters.category) {
      return false;
    }

    if (filters.brand && product.brand !== filters.brand) {
      return false;
    }

    if (filters.price) {
      const { min, max } = filters.price;

      if (product.price < min) {
        return false;
      }

      if (max !== null && product.price > max) {
        return false;
      }
    }

    if (filters.rating && product.rating < filters.rating) {
      return false;
    }
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sort) {
      case "price_low_to_high":
        return a.price - b.price;

      case "price_high_to_low":
        return b.price - a.price;

      case "highest_rated":
        return b.rating - a.rating;

      case "newest":
        return 0;

      case "featured":
      default:
        return 0;
    }
  });

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;

  const paginatedProducts = sortedProducts.slice(
    startIndex,
    startIndex + productsPerPage,
  );

  return (
    <Section>
      <Container>
        <ProductsHeader
          sort={sort}
          setSort={(value) => {
            setSort(value);
            setCurrentPage(1);
          }}
          productCount={sortedProducts.length}
          totalProducts={products.length}
          search={search}
          setSearch={(value) => {
            setSearch(value);
            setCurrentPage(1);
          }}
        />

        <div className="mt-10 flex gap-8">
          <aside className="hidden w-72 lg:block">
            <FilterSidebar
              filters={filters}
              setFilters={(value) => {
                setFilters(value);
                setCurrentPage(1);
              }}
            />
          </aside>

          <main className="flex-1">
            <ProductGrid
              products={paginatedProducts}
              search={search}
              setSearch={(value) => {
                setSearch(value);
                setCurrentPage(1);
              }}
              filters={filters}
              setFilters={(value) => {
                setFilters(value);
                setCurrentPage(1);
              }}
            />

            <div className="mt-12">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                totalProducts={sortedProducts.length}
                productsPerPage={productsPerPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </main>
        </div>
      </Container>
    </Section>
  );
};

export default Products;

import { useEffect, useState } from "react";

import ProductsHeader from "../components/products/header/ProductsHeader";
import FilterSidebar from "../components/products/filters/FilterSidebar";
import ProductGrid from "../components/products/grid/ProductGrid";
import Pagination from "../components/products/pagination/Pagination";

import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

import { products } from "../components/products/data/products";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category") || "";
  const searchFromUrl = searchParams.get("search") || "";  

  const [filters, setFilters] = useState({
    category: categoryFromUrl,
    brand: "",
    price: null,
    rating: null,
  });

  const [sort, setSort] = useState("featured");
  const [search, setSearch] = useState(searchFromUrl);
  const [debouncedSearch, setDebouncedSearch] = useState(searchFromUrl);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 6;
  const categoryMap = {
    Electronics: ["Smartphones", "Headphones"],
    Computers: ["Laptops"],
    Fashion: [],
    Home: [],
    Sports: [],
    Gaming: [],
    Books: [],
    Groceries: [],
  };

  const searchAliases = {
  electronics: [
    "electronics",
    "smartphone",
    "smartphones",
    "phone",
    "phones",
    "mobile",
    "mobiles",
    "headphone",
    "headphones",
  ],

  computers: [
    "computer",
    "computers",
    "laptop",
    "laptops",
  ],

  fashion: [
    "fashion",
    "clothing",
    "clothes",
  ],

  home: [
    "home",
    "home appliances",
  ],

  sports: [
    "sports",
    "sport",
  ],

  gaming: [
    "gaming",
    "game",
    "games",
  ],

  books: [
    "book",
    "books",
  ],

  groceries: [
    "grocery",
    "groceries",
  ],
};
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  const filteredProducts = products.filter((product) => {

    const activeSearch = searchFromUrl || debouncedSearch;

    if (activeSearch.trim()) {
      const query = activeSearch.toLowerCase().trim();

      const aliases = searchAliases[query] || [query];

      const matchesSearch = aliases.some(
        (keyword) => 
          product.title.toLowerCase().includes(keyword) ||
          product.brand.toLowerCase().includes(keyword) ||
          product.category.toLowerCase().includes(keyword),
      );
        
      if (!matchesSearch) {
        return false;
      }
    }

    if (filters.category && !activeSearch) {
      const allowedCategories = categoryMap[filters.category] ?? [
        filters.category,
      ];

      if (!allowedCategories.includes(product.category)) {
        return false;
      }
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
            
            const params = new URLSearchParams(searchParams);

            if(value.trim()) {
              params.set("search", value);
            } else {
              params.delete("search");
            }

            setSearchParams(params, { replace: true });
          }}
          productCount={sortedProducts.length}
          totalProducts={products.length}
          search={search}
          setSearch={(value) => {
            setSearch(value);
            setCurrentPage(1);
          }}
        />

        <div className="mt-10 flex flex-col gap-8 lg:flex-row">
          <aside className="w-72 shrink-0">
            <FilterSidebar
              filters={filters}
              setFilters={(value) => {
                setFilters(value);
                setCurrentPage(1);
              }}
            />
          </aside>

          <main className="min-w-0 flex-1">
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

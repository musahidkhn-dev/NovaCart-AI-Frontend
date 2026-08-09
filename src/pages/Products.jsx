import ProductsHeader from "../components/products/header/ProductsHeader";
import FilterSidebar from "../components/products/filters/FilterSidebar";
import ProductGrid from "../components/products/grid/ProductGrid";
import Pagination from "../components/products/pagination/Pagination";

import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

const Products = () => {
  return (
    <Section>
      <Container>

        <ProductsHeader />

        <div className="mt-10 flex gap-8">

          <aside className="hidden w-72 lg:block">
            <FilterSidebar />
          </aside>

          <main className="flex-1">
            <ProductGrid />

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
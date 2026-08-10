import CategoryFilter from "./CategoryFilter";
import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";

const FilterSidebar = ({ filters, setFilters }) => {
  return (
    <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold py-2">Filters</h2>

        <button
          type="button"
          onClick={() =>
            setFilters({
              category: "",
              brand: "",
              price: null,
              rating: null,
            })
          }
          className="text-xs font-medium text-primary transition hover:opacity-80"
        >
          Clear all
        </button>
      </div>

      <CategoryFilter filters={filters} setFilters={setFilters} />
      <div className="my-6" />
      <BrandFilter filters={filters} setFilters={setFilters} />
      <div className="my-6" />
      <PriceFilter filters={filters} setFilters={setFilters} />
      <div className="my-6" />
      <RatingFilter filters={filters} setFilters={setFilters} />
    </div>
  );
};

export default FilterSidebar;

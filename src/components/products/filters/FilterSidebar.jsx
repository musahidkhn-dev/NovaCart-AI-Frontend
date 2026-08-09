import CategoryFilter from "./CategoryFilter";
import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";
import AIScoreFilter from "./AIScoreFilter";

const FilterSidebar = () => {
  return (
    <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">
        Filters
      </h2>

      <CategoryFilter />
      <div className="my-6" />
      <BrandFilter />
      <div className="my-6" />
      <PriceFilter />
      <div className="my-6" />
      <RatingFilter />
      <div className="my-6" />
      <AIScoreFilter />
    </div>
  );
};

export default FilterSidebar;
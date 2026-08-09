import FilterSection from "./FilterSection";
import { brands } from "./filterData";

const BrandFilter = () => {
  return (
    <FilterSection title="Brand">
      <div className="space-y-3">
        {brands.map((brand) => (
          <label
            key={brand.id}
            className="flex cursor-pointer items-center gap-3"
          >
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-border accent-primary"
            />

            <span className="text-sm text-heading">
              {brand.name}
            </span>
          </label>
        ))}
      </div>
    </FilterSection>
  );
};

export default BrandFilter;
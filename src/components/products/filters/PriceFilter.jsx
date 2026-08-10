import FilterSection from "./FilterSection";
import { priceRanges } from "./filterData";

const PriceFilter = ({filters, setFilters}) => {
  return (
    <FilterSection title="Price">
      <div className="space-y-3">
        {priceRanges.map((price) => (
          <label
            key={price.id}
            className="flex cursor-pointer items-center gap-3"
          >
            <input
              type="radio"
              name="price"
              checked={filters.price?.id === price.id}
              onChange={() => {
                setFilters((prev) => ({
                  ...prev,
                  price: 
                    prev.price?.id === price.id
                      ? null
                      : price,
                }));
              }}
              className="h-4 w-4 accent-primary"
            />

            <span className="text-sm text-heading">
              {price.label}
            </span>
          </label>
        ))}
      </div>
    </FilterSection>
  );
};

export default PriceFilter;
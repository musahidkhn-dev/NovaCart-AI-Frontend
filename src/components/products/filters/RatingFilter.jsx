import FilterSection from "./FilterSection";
import { ratings } from "./filterData";

const RatingFilter = () => {
  return (
    <FilterSection title="Rating">
      <div className="space-y-3">
        {ratings.map((rating) => (
          <label
            key={rating.id}
            className="flex cursor-pointer items-center gap-3"
          >
            <input
              type="radio"
              name="rating"
              className="h-4 w-4 accent-primary"
            />

            <span className="text-sm text-heading">
              {rating.label}
            </span>
          </label>
        ))}
      </div>
    </FilterSection>
  );
};

export default RatingFilter;
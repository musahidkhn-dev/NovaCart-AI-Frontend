import FilterSection from "./FilterSection";
import { categories } from "./filterData";

const CategoryFilter = () => {
  return (
    <FilterSection title="Category">
      <div className="space-y-3">
        {categories.map((category) => (
          <label
            key={category.id}
            className="flex cursor-pointer items-center gap-3"
          >
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-border accent-primary"
            />

            <span className="text-sm text-heading">
              {category.name}
            </span>
          </label>
        ))}
      </div>
    </FilterSection>
  );
};

export default CategoryFilter;
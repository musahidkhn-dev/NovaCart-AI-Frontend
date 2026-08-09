import FilterSection from "./FilterSection";
import { aiScores } from "./filterData";

const AIScoreFilter = () => {
  return (
    <FilterSection title="AI Score">
      <div className="space-y-3">
        {aiScores.map((score) => (
          <label
            key={score.id}
            className="flex cursor-pointer items-center gap-3"
          >
            <input
              type="radio"
              name="aiScore"
              className="h-4 w-4 accent-primary"
            />

            <span className="text-sm text-heading">
              {score.label}
            </span>
          </label>
        ))}
      </div>
    </FilterSection>
  );
};

export default AIScoreFilter;
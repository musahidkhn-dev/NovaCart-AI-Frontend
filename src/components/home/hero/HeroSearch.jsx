import { Search } from "lucide-react";

const HeroSearch = ({ placeholder, setIsPaused }) => {
  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="mt-7"
    >
      <div className="flex items-center rounded-2xl border border-border bg-surface px-5 py-4 shadow-soft transition-all duration-300 focus-within:border-primary focus-within:shadow-lg">
        <Search size={20} className="text-muted" />

        <input
          type="text"
          placeholder={placeholder}
          className="ml-3 w-full bg-transparent outline-none placeholder:text-muted"
        />
      </div>
    </div>
  );
};

export default HeroSearch;

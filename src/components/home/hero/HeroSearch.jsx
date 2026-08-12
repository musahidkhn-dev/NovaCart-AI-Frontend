import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSearch = ({ placeholder, setIsPaused }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const query = search.trim();

    if (!query) return;

    navigate(`/products?search=${encodeURIComponent(query)}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="mt-7"
    >
      <div className="flex items-center rounded-2xl border border-border bg-white px-4 py-3 shadow-soft">
        <Search size={20} className="shrink-0 text-muted" />

        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="ml-3 w-full bg-transparent outline-none placeholder:text-muted"
        />

        <button
          type="button"
          onClick={handleSearch}
          className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default HeroSearch;
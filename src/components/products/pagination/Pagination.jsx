import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = () => {
  const currentPage = 1;
  const totalPages = 40;

  return (
    <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
      {/* Result Count */}
      <p className="text-sm text-muted">
        Showing <span className="font-medium text-heading">1–6</span> of{" "}
        <span className="font-medium text-heading">240</span> products
      </p>

      {/* Pagination */}
      <div className="flex items-center gap-1">
        <button
          type="button"
          disabled={currentPage === 1}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Previous page"
        >
          <ChevronLeft size={16} />
        </button>

        <button
          type="button"
          className="flex h-9 min-w-9 items-center justify-center rounded-lg bg-primary px-3 text-sm font-medium text-white"
        >
          1
        </button>

        <button
          type="button"
          className="flex h-9 min-w-9 items-center justify-center rounded-lg px-3 text-sm text-muted transition hover:bg-gray-50"
        >
          2
        </button>

        <button
          type="button"
          className="flex h-9 min-w-9 items-center justify-center rounded-lg px-3 text-sm text-muted transition hover:bg-gray-50"
        >
          3
        </button>

        <span className="px-1 text-sm text-muted">...</span>

        <button
          type="button"
          className="flex h-9 min-w-9 items-center justify-center rounded-lg px-3 text-sm text-muted transition hover:bg-gray-50"
        >
          {totalPages}
        </button>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition hover:bg-gray-50"
          aria-label="Next page"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
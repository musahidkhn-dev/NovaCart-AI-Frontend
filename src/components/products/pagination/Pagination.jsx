import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({
  currentPage,
  totalPages,
  totalProducts,
  productsPerPage,
  setCurrentPage,
}) => {
  return (
    <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
      {/* Result Count */}
      <p className="text-sm text-muted">
        Showing{" "}
        {totalProducts === 0 ? 0 : (currentPage - 1) * productsPerPage + 1}–
        {Math.min(currentPage * productsPerPage, totalProducts)} of{" "}
        {totalProducts} products
      </p>

      {/* Pagination */}
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => setCurrentPage((page) => page - 1)}
          disabled={currentPage === 1}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Previous page"
        >
          <ChevronLeft size={16} />
        </button>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              type="button"
              onClick={() => setCurrentPage(page)}
              className={`flex h-9 min-w-9 items-center justify-center rounded-lg px-3 text-sm transition ${
                currentPage === page
                  ? "bg-primary font-medium text-white"
                  : "text-muted hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ),
        )}

        <button
          type="button"
          onClick={() => setCurrentPage((page) => page + 1)}
          disabled={currentPage === totalPages}
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

import {
  Search,
  MoreHorizontal,
  Eye,
  Check,
  EyeOff,
  Trash2,
  Star,
} from "lucide-react";
import { useState } from "react";

const initialReviews = [
  {
    id: 1,
    customer: "Rahul Sharma",
    product: "iPhone 15 Pro",
    rating: 5,
    review: "Amazing product. The build quality and performance are excellent.",
    date: "12 Aug 2026",
    status: "Approved",
  },
  {
    id: 2,
    customer: "Priya Patel",
    product: "Samsung Galaxy S24",
    rating: 4,
    review: "Very good phone with a great display and camera.",
    date: "10 Aug 2026",
    status: "Approved",
  },
  {
    id: 3,
    customer: "Amit Kumar",
    product: "Sony WH-1000XM5",
    rating: 5,
    review: "Best noise cancellation headphones I have used.",
    date: "08 Aug 2026",
    status: "Pending",
  },
  {
    id: 4,
    customer: "Neha Verma",
    product: "Nike Air Max",
    rating: 3,
    review: "Good shoes but the fitting could have been better.",
    date: "06 Aug 2026",
    status: "Pending",
  },
  {
    id: 5,
    customer: "Vikas Singh",
    product: "OnePlus 13",
    rating: 2,
    review: "Expected better battery performance at this price.",
    date: "04 Aug 2026",
    status: "Hidden",
  },
  {
    id: 6,
    customer: "Arjun Patel",
    product: "Apple AirPods Pro",
    rating: 5,
    review: "Excellent sound quality and very comfortable.",
    date: "02 Aug 2026",
    status: "Approved",
  },
];

const AdminReviews = () => {
  const [reviews, setReviews] = useState(initialReviews);

  const [search, setSearch] = useState("");
  const [ratingFilter, setRatingFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [openMenu, setOpenMenu] = useState(null);
  const [reviewToView, setReviewToView] = useState(null);
  const [reviewToDelete, setReviewToDelete] = useState(null);

  const filteredReviews = reviews.filter((review) => {
    const query = search.toLowerCase().trim();

    const matchesSearch =
      !query ||
      review.customer.toLowerCase().includes(query) ||
      review.product.toLowerCase().includes(query) ||
      review.review.toLowerCase().includes(query);

    const matchesRating =
      ratingFilter === "All" || review.rating === Number(ratingFilter);

    const matchesStatus =
      statusFilter === "All" || review.status === statusFilter;

    return matchesSearch && matchesRating && matchesStatus;
  });

  const getStatusClass = (status) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-700";

      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Hidden":
        return "bg-gray-100 text-gray-600";

      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const handleUpdateReviewStatus = (review, status) => {
    setReviews((prevReviews) =>
      prevReviews.map((item) =>
        item.id === review.id
          ? {
              ...item,
              status,
            }
          : item,
      ),
    );

    setOpenMenu(null);
  };

  const handleDeleteReview = () => {
    if (!reviewToDelete) return;

    setReviews((prevReviews) =>
      prevReviews.filter((review) => review.id !== reviewToDelete.id),
    );

    setReviewToDelete(null);
  };

  return (
    <div>
      {/* Header */}
      <div>
        <h1 className="text-2xl font-black text-heading">Reviews</h1>

        <p className="mt-1 text-sm text-muted">
          Manage customer reviews and ratings across NovaCart.
        </p>
      </div>

      {/* Filters */}
      <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-border bg-white p-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Search */}
        <div className="flex w-full items-center gap-3 rounded-xl border border-border bg-[#FAFAFA] px-4 py-2.5 lg:max-w-md">
          <Search size={18} className="shrink-0 text-muted" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search reviews..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
          />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          {/* Rating Filter */}
          <select
            value={ratingFilter}
            onChange={(e) => setRatingFilter(e.target.value)}
            className="rounded-xl border border-border bg-white px-4 py-2.5 text-sm outline-none focus:border-primary"
          >
            <option value="All">All Ratings</option>

            <option value="5">5 Stars</option>

            <option value="4">4 Stars</option>

            <option value="3">3 Stars</option>

            <option value="2">2 Stars</option>

            <option value="1">1 Star</option>
          </select>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-xl border border-border bg-white px-4 py-2.5 text-sm outline-none focus:border-primary"
          >
            <option value="All">All Status</option>

            <option value="Approved">Approved</option>

            <option value="Pending">Pending</option>

            <option value="Hidden">Hidden</option>
          </select>
        </div>
      </div>

      {/* Count */}
      <div className="mt-5">
        <p className="text-sm text-muted">
          Showing{" "}
          <span className="font-semibold text-heading">
            {filteredReviews.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-heading">{reviews.length}</span>{" "}
          reviews
        </p>
      </div>

      {/* Desktop Table */}
      <div className="mt-4 hidden overflow-hidden rounded-2xl border border-border bg-white shadow-sm md:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1050px] text-left">
            <thead>
              <tr className="border-b border-border bg-[#FAFAFA] text-xs text-muted">
                <th className="px-5 py-4 font-medium">Customer</th>

                <th className="px-5 py-4 font-medium">Product</th>

                <th className="px-5 py-4 font-medium">Rating</th>

                <th className="px-5 py-4 font-medium">Review</th>

                <th className="px-5 py-4 font-medium">Date</th>

                <th className="px-5 py-4 font-medium">Status</th>

                <th className="px-5 py-4 text-right font-medium">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredReviews.map((review) => (
                <tr
                  key={review.id}
                  className="border-b border-border last:border-0 hover:bg-[#FAFAFA]"
                >
                  {/* Customer */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
                        {review.customer.charAt(0)}
                      </div>

                      <p className="text-sm font-semibold text-heading">
                        {review.customer}
                      </p>
                    </div>
                  </td>

                  {/* Product */}
                  <td className="px-5 py-4 text-sm font-medium text-heading">
                    {review.product}
                  </td>

                  {/* Rating */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1">
                      <Star
                        size={15}
                        className="fill-yellow-400 text-yellow-400"
                      />

                      <span className="text-sm font-semibold">
                        {review.rating}.0
                      </span>
                    </div>
                  </td>

                  {/* Review */}
                  <td className="max-w-[280px] px-5 py-4">
                    <p className="truncate text-sm text-muted">
                      {review.review}
                    </p>
                  </td>

                  {/* Date */}
                  <td className="px-5 py-4 text-sm text-muted">
                    {review.date}
                  </td>

                  {/* Status */}
                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusClass(
                        review.status,
                      )}`}
                    >
                      {review.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-5 py-4 text-right">
                    <div className="relative inline-block">
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMenu(openMenu === review.id ? null : review.id)
                        }
                        className="rounded-lg p-2 transition hover:bg-surface-alt"
                      >
                        <MoreHorizontal size={18} />
                      </button>

                      {openMenu === review.id && (
                        <div className="absolute right-0 z-30 mt-2 w-48 overflow-hidden rounded-xl border border-border bg-white p-1.5 text-left shadow-xl">
                          <button
                            type="button"
                            onClick={() => {
                              setReviewToView(review);
                              setOpenMenu(null);
                            }}
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-primary/5 hover:text-primary"
                          >
                            <Eye size={16} />
                            View Review
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              handleUpdateReviewStatus(review, "Approved")
                            }
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-green-50 hover:text-green-600"
                          >
                            <Check size={16} />
                            Approve Review
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              handleUpdateReviewStatus(review, "Hidden")
                            }
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-gray-50 hover:text-gray-600"
                          >
                            <EyeOff size={16} />
                            Hide Review
                          </button>

                          <div className="my-1 border-t border-border" />

                          <button
                            type="button"
                            onClick={() => {
                              setReviewToDelete(review);
                              setOpenMenu(null);
                            }}
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 transition hover:bg-red-50"
                          >
                            <Trash2 size={16} />
                            Delete Review
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}

              {filteredReviews.length === 0 && (
                <tr>
                  <td
                    colSpan="7"
                    className="px-5 py-12 text-center text-sm text-muted"
                  >
                    No reviews found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="mt-4 space-y-3 md:hidden">
        {filteredReviews.map((review) => (
          <div
            key={review.id}
            className="rounded-2xl border border-border bg-white p-4 shadow-sm"
          >
            {/* Top */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
                  {review.customer.charAt(0)}
                </div>

                <div>
                  <p className="text-sm font-semibold text-heading">
                    {review.customer}
                  </p>

                  <p className="mt-0.5 text-xs text-muted">{review.product}</p>
                </div>
              </div>

              {/* Menu */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setOpenMenu(openMenu === review.id ? null : review.id)
                  }
                  className="rounded-lg p-2 transition hover:bg-surface-alt"
                >
                  <MoreHorizontal size={18} />
                </button>

                {openMenu === review.id && (
                  <div className="absolute right-0 z-30 mt-2 w-48 overflow-hidden rounded-xl border border-border bg-white p-1.5 shadow-xl">
                    <button
                      type="button"
                      onClick={() => {
                        setReviewToView(review);
                        setOpenMenu(null);
                      }}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm hover:bg-primary/5 hover:text-primary"
                    >
                      <Eye size={16} />
                      View Review
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        handleUpdateReviewStatus(review, "Approved")
                      }
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm hover:bg-green-50 hover:text-green-600"
                    >
                      <Check size={16} />
                      Approve Review
                    </button>

                    <button
                      type="button"
                      onClick={() => handleUpdateReviewStatus(review, "Hidden")}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm hover:bg-gray-50 hover:text-gray-600"
                    >
                      <EyeOff size={16} />
                      Hide Review
                    </button>

                    <div className="my-1 border-t border-border" />

                    <button
                      type="button"
                      onClick={() => {
                        setReviewToDelete(review);
                        setOpenMenu(null);
                      }}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
                    >
                      <Trash2 size={16} />
                      Delete Review
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Review */}
            <div className="mt-4 border-t border-border pt-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star size={15} className="fill-yellow-400 text-yellow-400" />

                  <span className="text-sm font-semibold">
                    {review.rating}.0
                  </span>
                </div>

                <span
                  className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${getStatusClass(
                    review.status,
                  )}`}
                >
                  {review.status}
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-muted">
                {review.review}
              </p>

              <p className="mt-3 text-xs text-muted">{review.date}</p>
            </div>
          </div>
        ))}

        {filteredReviews.length === 0 && (
          <div className="rounded-2xl border border-border bg-white px-5 py-12 text-center text-sm text-muted">
            No reviews found.
          </div>
        )}
      </div>
      {reviewToView && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-lg rounded-2xl border border-border bg-white p-6 shadow-2xl">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-bold text-heading">
                  Review Details
                </h2>

                <p className="mt-1 text-sm text-muted">
                  Customer review information
                </p>
              </div>

              <button
                type="button"
                onClick={() => setReviewToView(null)}
                className="rounded-lg px-2 py-1 text-muted transition hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            {/* Customer + Product */}
            <div className="mt-6 rounded-xl bg-[#FAFAFA] p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 font-bold text-primary">
                  {reviewToView.customer.charAt(0)}
                </div>

                <div>
                  <p className="text-sm font-semibold text-heading">
                    {reviewToView.customer}
                  </p>

                  <p className="mt-0.5 text-xs text-muted">
                    {reviewToView.product}
                  </p>
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="mt-5">
              <p className="text-xs font-medium uppercase tracking-wide text-muted">
                Rating
              </p>

              <div className="mt-2 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className={
                      index < reviewToView.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}

                <span className="ml-2 text-sm font-semibold text-heading">
                  {reviewToView.rating}.0 / 5
                </span>
              </div>
            </div>

            {/* Review */}
            <div className="mt-5">
              <p className="text-xs font-medium uppercase tracking-wide text-muted">
                Review
              </p>

              <p className="mt-2 rounded-xl border border-border p-4 text-sm leading-6 text-heading">
                {reviewToView.review}
              </p>
            </div>

            {/* Meta */}
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-muted">Date</p>

                <p className="mt-1 text-sm font-semibold text-heading">
                  {reviewToView.date}
                </p>
              </div>

              <div>
                <p className="text-xs text-muted">Status</p>

                <span
                  className={`mt-1 inline-block rounded-full px-3 py-1 text-xs font-medium ${getStatusClass(
                    reviewToView.status,
                  )}`}
                >
                  {reviewToView.status}
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setReviewToView(null)}
                className="rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {reviewToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl border border-border bg-white p-6 shadow-2xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
              <Trash2 size={20} />
            </div>

            <h2 className="mt-5 text-xl font-bold text-heading">
              Delete Review?
            </h2>

            <p className="mt-2 text-sm leading-6 text-muted">
              Are you sure you want to delete the review by{" "}
              <span className="font-semibold text-heading">
                {reviewToDelete.customer}
              </span>
              ?
            </p>

            <p className="mt-2 text-xs text-red-500">
              This action cannot be undone.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setReviewToDelete(null)}
                className="rounded-xl border border-border px-4 py-2.5 text-sm font-medium transition hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleDeleteReview}
                className="rounded-xl bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-700"
              >
                Delete Review
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminReviews;

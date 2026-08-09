import { Star } from "lucide-react";

const ProductReviews = ({ rating, reviews, reviewList = [] }) => {
  return (
    <section className="mt-12 border-t border-border pt-10">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-bold">Customer Reviews</h2>

          <button
            type="button"
            className="text-sm font-medium text-primary transition hover:opacity-80"
          >
            View all reviews
          </button>
        </div>

        <div className="mt-3 flex items-center gap-3">
          <div className="flex items-center gap-1 rounded-full bg-yellow-100 px-3 py-1">
            <Star size={15} className="fill-yellow-500 text-yellow-500" />

            <span className="text-sm font-semibold text-yellow-800">
              {rating}
            </span>
          </div>

          <span className="text-sm text-muted">Based on {reviews} reviews</span>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-7 grid gap-4 md:grid-cols-2">
        {reviewList.map((review) => (
          <div
            key={review.id}
            className="rounded-xl border border-border bg-white p-4"
          >
            {/* Reviewer */}
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">{review.name}</p>

              <div className="flex items-center gap-0.5">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <Star
                    key={index}
                    size={14}
                    className="fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>
            </div>

            {/* Comment */}
            <p className="mt-3 text-sm leading-6 text-muted">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductReviews;

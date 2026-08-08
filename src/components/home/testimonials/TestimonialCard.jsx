import { motion } from "framer-motion";
import { Star, BadgeCheck, Quote } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
        rotate: 0.3,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className="group rounded-3xl border border-border bg-white p-7 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-2xl"
    >
      {/* User */}

      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-14 w-14 rounded-full object-cover"
        />

        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-bold">{testimonial.name}</h3>

            <BadgeCheck size={16} className="text-primary" />
          </div>

          <p className="text-sm text-muted">{testimonial.role}</p>
        </div>
      </div>

      {/* Rating */}

      <div className="mt-6 flex gap-1">
        {[...Array(testimonial.rating)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>
      <Quote size={70} className="absolute right-6 top-6 text-primary/5" />
      {/* Review */}

      <p className="mt-5 leading-8 text-muted">"{testimonial.review}"</p>
    </motion.div>
  );
};

export default TestimonialCard;

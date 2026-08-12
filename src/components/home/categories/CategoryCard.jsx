import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const Icon = category.icon;
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate(
      `/products?category=${encodeURIComponent(category.name)}`
    );
  };

  return (
    <motion.div
      whileHover={{ y: 5 }}
      transition={{ duration: 0.25 }}
      onClick={handleCategoryClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          handleCategoryClick();
        }
      }}
      role="link"
      tabIndex={0}
      className="group h-[250px] min-w-[260px] cursor-pointer overflow-hidden rounded-[24px] border border-border bg-white p-6 shadow-soft transition-all duration-300 hover:border-primary/30 hover:shadow-2xl sm:h-[280px] sm:min-w-[300px] sm:rounded-[28px] sm:p-8 lg:min-w-[320px]"
    >
      {/* Icon */}
      <div className="flex justify-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-primary/5 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/10">
          <Icon size={44} className="text-primary" />
        </div>
      </div>

      {/* Content */}
      <div className="mt-8 flex-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">
          {category.name}
        </h3>

        <div className="mt-5 inline-flex rounded-full bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
          {category.productCount} Products
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-center gap-2 border-t border-border pt-6 font-medium text-primary transition-all duration-300 group-hover:gap-3">
        <span>Explore</span>

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-2"
        />
      </div>
    </motion.div>
  );
};

export default CategoryCard;
import { motion } from "framer-motion";

const StatCard = ({ stat }) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
      }}
      className="rounded-3xl border border-border bg-white p-8 text-center shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
    >
      <div className="text-4xl font-black text-primary sm:text-5xl lg:text-6xl">
        {stat.value}
      </div>

      <p className="mt-3 text-sm text-muted sm:text-lg">
        {stat.label}
      </p>
    </motion.div>
  );
};

export default StatCard;
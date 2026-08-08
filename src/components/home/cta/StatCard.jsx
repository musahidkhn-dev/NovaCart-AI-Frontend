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
      <h3 className="text-6xl font-black text-primary">
        {stat.value}
      </h3>

      <p className="mt-3 text-lg text-muted">
        {stat.label}
      </p>
    </motion.div>
  );
};

export default StatCard;
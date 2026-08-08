import { motion } from "framer-motion";

const WhyCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ 
        duration: 0.3,
        ease: "easeOut",
       }}
      className="group rounded-3xl border border-border bg-white p-9 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
    >
      <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 mb-2 text-xs font-semibold text-primary">
        Nova Verified
      </span>
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
        <Icon className="h-9 w-9 text-primary transition-colors duration-300 group-hover:text-white" />
      </div>

      <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>

      <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
    </motion.div>
  );
};

export default WhyCard;

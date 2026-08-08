import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AIFeatureCard = ({ feature }) => {
  const Icon = feature.icon;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group flex h-full flex-col rounded-3xl border border-border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
        <Icon size={28} />
      </div>
      
      <span className="mt-5 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
        AI Powered
      </span>

      <h3 className="mt-5 text-2xl font-bold leading-tight">{feature.title}</h3>

      <p className="mt-4 flex-1 text-[15px] leading-7 text-muted">{feature.description}</p>

      <button className="group/button mt-auto pt-6 inline-flex items-center gap-2 font-semibold text-primary transition-all duration-300 hover:gap-3">
        {feature.button}

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover/button:translate-x-1"
        />
      </button>
    </motion.div>
  );
};

export default AIFeatureCard;

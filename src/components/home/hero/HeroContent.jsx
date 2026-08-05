import { motion, AnimatePresence } from "framer-motion";

import HeroSearch from "./HeroSearch";
import HeroActions from "./HeroActions";
import HeroStats from "./HeroState";

const HeroContent = ({ slide }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slide.id}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          AI Commerce Platform
        </p>

        <h1 className="text-5xl font-black leading-[0.95] tracking-tight  lg:text-6xl ">
          {slide.title}

          <br />

          <span className="text-primary">
            {slide.highlight}
          </span>
        </h1>

        <p className="mt-4 max-w-lg text-base leading-7 text-muted ">
          {slide.description}
        </p>

        <HeroSearch
          placeholder={slide.searchPlaceholder}
        />

        <HeroActions
          primary={slide.ctaPrimary}
          secondary={slide.ctaSecondary}
        />

        <HeroStats />
      </motion.div>
    </AnimatePresence>
  );
};

export default HeroContent;
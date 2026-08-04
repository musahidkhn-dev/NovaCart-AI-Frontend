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
        className="max-w-2xl"
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          AI Commerce Platform
        </p>

        <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-[84px]">
          {slide.title}

          <br />

          <span className="text-primary">
            {slide.highlight}
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8 text-muted lg:text-xl">
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
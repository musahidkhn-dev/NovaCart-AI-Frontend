import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Brain, Sparkles, Star } from "lucide-react";

const HeroImage = ({
  slide,
  activeSlide,
  totalSlides,
  nextSlide,
  previousSlide,
  progress,
  setIsPaused,
}) => {
  return (
    <AnimatePresence mode="sync">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.94 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Background Glow */}

        <div className="absolute inset-0 -z-10 rounded-full bg-primary/10 blur-[120px]" />

        {/* Product Card */}

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="overflow-hidden rounded-[36px] border border-white/70 bg-white shadow-xl backdrop-blur-xl"
        >
          <div className="relative flex h-[260px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFF9F3] via-white to-[#F8F5EF] p-4">
            <div className="absolute h-72 w-72 rounded-full bg-primary/10 blur-[80px]" />
            <div className="absolute left-10 top-10 h-24 w-24 rounded-full border border-primary/10" />
            <div className="absolute bottom-10 right-10 h-16 w-16 rounded-full bg-primary/5 rounded-full" />
            <img
              src={slide.product.image}
              alt={slide.product.name}
              className="relative z-10 max-h-[210px] w-auto object-contain drop-shadow-2xl transition duration-500 hover:scale-105"
            />
          </div>

          <div className="space-y-3 p-6">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {slide.product.badge}
              </span>

              <div className="flex items-center gap-1">
                <Star size={16} className="fill-yellow-400 text-yellow-400" />

                <span className="text-sm font-medium">
                  {slide.product.rating}
                </span>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted">{slide.product.brand}</p>

              <h3 className="mt-1 text-xl font-bold">{slide.product.name}</h3>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">{slide.product.price}</span>

              <div className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white">
                AI Score {slide.product.aiScore}
              </div>
            </div>
          </div>
        </div>

        {/* AI Card */}

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 5,
          }}
          className="absolute -left-10 top-8 hidden w-60 rounded-2xl border border-border bg-white p-5 shadow-card lg:block"
        >
          <div className="mb-3 flex items-center gap-2">
            <Brain size={18} className="text-primary" />

            <h4 className="font-semibold">{slide.ai.title}</h4>
          </div>

          <p className="text-sm leading-6 text-muted">{slide.ai.message}</p>
        </motion.div>

        {/* Floating Chips */}

        <div className="absolute -right-5 top-14 hidden space-y-3 xl:block">
          {slide.chips.map((chip) => (
            <motion.div
              key={chip}
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="flex items-center gap-2 rounded-full border border-border bg-white px-3 py-2 shadow-soft"
            >
              <Sparkles size={14} className="text-primary" />

              <span className="text-sm font-medium">{chip}</span>
            </motion.div>
          ))}
        </div>

        {/* Controls */}

        <div className="mt-8 flex items-center justify-between">
          <div className="flex gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                  activeSlide === index
                    ? "h-2 w-10 bg-primary/20"
                    : "h-2 w-2 bg-border"
                }`}
              >
                {activeSlide === index && (
                  <div
                    className="absolute left-0 top-0 h-full rounded-full bg-primary transition-none"
                    style={{
                      width: `${progress}%`,
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={previousSlide}
              className="rounded-xl border border-border p-3 transition hover:bg-surface-alt"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              onClick={nextSlide}
              className="rounded-xl border border-border p-3 transition hover:bg-surface-alt"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HeroImage;

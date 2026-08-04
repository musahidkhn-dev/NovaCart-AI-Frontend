import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

import Container from "../../ui/Container";
import Section from "../../ui/Section";

import CategoryCard from "./CategoryCard";
import { categoryData } from "./categoryData";

const Categories = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  return (
    <Section id="categories" className="bg-[#FCFAF7] py-24">
      <Container>
        {/* Header */}

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Categories
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-tight lg:text-5xl">
              Shop by Category
            </h2>

            <p className="mt-4 max-w-xl text-lg leading-8 text-muted">
              Everything you need, organized into smart shopping categories.
            </p>
          </motion.div>

          <div className="flex items-center gap-2 self-start lg:self-end">
            <button
              onClick={scrollLeft}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition hover:bg-surface-alt"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              onClick={scrollRight}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition hover:bg-surface-alt"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="relative mt-14">
          <motion.div
            ref={sliderRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="no-scrollbar mt-14 flex snap-x gap-6 overflow-x-auto scroll-smooth pb-4"
          >
            {categoryData.map((category) => (
              <div key={category.id} className="snap-start">
                <CategoryCard category={category} />
              </div>
            ))}
          </motion.div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent" />
        </div>
        {/* CTA */}

        <div className="mt-12 flex justify-center">
          <button className="group inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 font-medium transition hover:bg-surface-alt">
            Browse All Categories
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </Container>
    </Section>
  );
};

export default Categories;

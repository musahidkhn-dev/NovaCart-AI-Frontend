import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Container from "../../ui/Container";
import Section from "../../ui/Section";

import ProductCard from "./ProductCard";
import { productData } from "./productData";

const FeaturedProducts = () => {
  return (
    <Section
      id="featured-products"
      className="py-20"
    >
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Featured Products
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight lg:text-5xl">
              Handpicked by Nova AI
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              Explore premium products recommended by Nova AI based on
              quality, popularity, ratings, and overall value.
            </p>
          </motion.div>

          <button className="group inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 font-medium transition hover:bg-surface-alt">
            View All

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {productData.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FeaturedProducts;
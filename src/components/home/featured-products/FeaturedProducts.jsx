import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Container from "../../ui/Container";
import Section from "../../ui/Section";

import ProductCard from "./ProductCard";
import { productData } from "./productData";

const tabs = [
  "All",
  "AI Picks",
  "Trending",
  "Best Rated",
];

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <Section
      id="featured-products"
      className="bg-white py-24"
    >
      <Container>
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Featured Products
          </span>

          <h2 className="mt-6 text-5xl font-black tracking-tight">
            Discover Nova AI's Picks
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
            Handpicked products based on quality, popularity, value,
            and AI recommendations.
          </p>
        </motion.div>

        {/* Tabs */}

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-5 py-3 text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-primary text-white"
                  : "border border-border bg-white hover:border-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Products */}

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {productData.map((product) => (
            <div className="flex justify-center"><ProductCard
              key={product.id}
              product={product}
            /></div>
          ))}
        </div>

        {/* CTA */}

        <div className="mt-14 flex justify-center">
          <button className="group inline-flex items-baseline gap-1 rounded-full border border-border px-7 py-4 font-medium transition-all hover:border-primary hover:bg-primary/5">
            View All Products

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

export default FeaturedProducts;
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
      className="bg-white pt-8 pb-10"
    >
      <Container>
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            Featured Products
          </span>

          <h2 className="mt-3 text-4xl lg:text-[42px] font-black leading-tight">
            Discover Nova AI's Picks
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-base leading-6 text-muted">
            Handpicked products based on quality, popularity, value,
            and AI recommendations.
          </p>
        </motion.div>

        {/* Tabs */}

        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
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

        <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {productData.map((product) => (
            <div 
              key={product.id}
              className="flex justify-center">
            <ProductCard product={product}/>
            </div>
          ))}
        </div>

        {/* CTA */}

        <div className="mt-6 flex justify-center">
          <button className="group inline-flex items-baseline gap-1 rounded-full border border-border px-6 py-3 font-medium transition-all hover:border-primary hover:bg-primary/5">
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
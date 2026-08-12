import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../../ui/Container";
import Section from "../../ui/Section";

import ProductCard from "./ProductCard";
import { productData } from "./productData";

const tabs = ["All", "AI Picks", "Trending", "Best Rated"];

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState("All");
  const filteredProducts = productData.filter((product) => {
    switch (activeTab) {
      case "AI Picks":
        return product.badge === "AI Pick";

      case "Trending":
        return product.badge === "Trending";

      case "Best Rated":
        return product.rating >= 4.8;

      case "All":
      default:
        return true;
    }
  });

  return (
    <Section id="featured-products" className="bg-white py-10 sm:py-14 lg:py-16">
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

          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl lg:text-[42px]">
            Discover Nova AI's Picks
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted sm:text-base">
            Handpicked products based on quality, popularity, value, and AI
            recommendations.
          </p>
        </motion.div>

        {/* Tabs */}

        <div className="mt-6 flex flex-wrap justify-center gap-2 sm:mt-5">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-all sm:px-5 sm:py-2.5 sm:text-sm ${
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

        <div className="mt-8 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8 2xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="flex justify-center">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* CTA */}

        <div className="mt-8 flex justify-center">
          <Link
            to="/products"
            className="group inline-flex items-baseline gap-1 rounded-full border border-border px-6 py-3 font-medium transition-all hover:border-primary hover:bg-primary/5"
          >
            <span>View All Products</span>
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default FeaturedProducts;

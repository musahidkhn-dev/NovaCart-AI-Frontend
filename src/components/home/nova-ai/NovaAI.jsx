import { motion } from "framer-motion";

import Container from "../../ui/Container";
import Section from "../../ui/Section";

import AIFeatureCard from "./AIFeatureCard";
import AIProductCard from "./AIProductCard";

import { aiFeatures } from "./aiFeatures";
import { aiProducts } from "./aiProductData";
import { useEffect, useState } from "react";

const NovaAI = () => {
  const [showResponse, setShowResponse] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowResponse(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Section className="bg-gradient-to-b from-[#FFFDFB] to-white py-20">
      <Container>
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Nova AI
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight lg:text-5xl">
            Your Intelligent Shopping Copilot
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted">
            Experience AI-powered shopping with smart recommendations, instant
            comparisons, review summaries and seller tools — all in one place.
          </p>
        </motion.div>

        {/* Main Layout */}

        <div className="mt-16 space-y-10">
          {/* LEFT : Chat Preview */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-fit overflow-hidden rounded-[32px] border border-border bg-white shadow-xl"
          >
            {/* Chat Header */}

            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <div>
                <h3 className="text-lg font-bold">Nova AI Assistant</h3>

                <p className="text-sm text-muted">Shopping Copilot</p>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>
                <span className="text-xs text-muted">Online</span>
              </div>
            </div>

            {/* Chat */}

            <div className="flex flex-col gap-4 p-5">
              <div className="ml-auto max-w-[360px] rounded-[24px] bg-primary px-6 py-4 text-white shadow-xl">
                I need a laptop under ₹80,000 for coding.
              </div>

              {!showResponse ? (
                <div className="flex gap-2 py-4">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-primary"></span>
                  <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:150ms]"></span>
                  <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:300ms]"></span>
                </div>
              ) : (
                <div className="w-[70%] rounded-3xl border border-border bg-white p-6 shadow-sm">
                  <p className="font-medium">
                    Based on your budget, I recommend:
                  </p>

                  <div className="mt-5 space-y-3">
                    {aiProducts.map((product) => (
                      <AIProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              )}
              {showResponse && (
                <>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <button className="rounded-full bg-primary/10 px-4 py-2 text-sm transition-all duration-300 hover:bg-primary hover:text-white">
                      Compare
                    </button>

                    <button className="rounded-full bg-primary/10 px-4 py-2 text-sm transition-all duration-300 hover:bg-primary hover:text-white">
                      Reviews
                    </button>

                    <button className="rounded-full bg-primary/10 px-4 py-2 text-sm transition-all duration-300 hover:bg-primary hover:text-white">
                      Best Price
                    </button>
                  </div>
                </>
              )}
            </div>
          </motion.div>

          {/* RIGHT : Feature Cards */}

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {aiFeatures.map((feature) => (
              <AIFeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default NovaAI;

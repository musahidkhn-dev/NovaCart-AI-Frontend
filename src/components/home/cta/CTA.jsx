import { motion } from "framer-motion";

import Container from "../../ui/Container";
import Section from "../../ui/Section";

import StatCard from "./StatCard";
import { stats } from "./statsData";

const CTA = () => {
  return (
    <Section className="bg-[#FAFAFA] py-16">
      <Container>

        {/* Stats */}

        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <StatCard
              key={stat.id}
              stat={stat}
            />
          ))}
        </div>

        {/* CTA Box */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 overflow-hidden rounded-[28px] bg-primary px-5 py-12 text-center text-white shadow-2xl sm:mt-16 sm:rounded-[36px] sm:px-8 sm:py-16 lg:rounded-[40px] lg:px-10 lg:py-20"
        >
          <h2 className="mx-auto max-w-3xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            Ready to Shop Smarter?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/80 sm:mt-6 sm:text-lg sm:leading-8">
            Discover products faster, compare with AI and shop confidently with
            NovaCart.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">

            <button className="w-full rounded-full bg-white px-8 py-3.5 font-semibold text-primary transition hover:scale-105 hover:shadow-xl sm:w-auto sm:py-4">
              Start Shopping
            </button>

            <button className="w-full rounded-full border border-white/40 px-8 py-3.5 font-semibold transition hover:bg-white hover:text-primary sm:w-auto sm:py-4">
              Explore AI
            </button>

          </div>
        </motion.div>

      </Container>
    </Section>
  );
};

export default CTA;
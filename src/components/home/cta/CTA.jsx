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
          className="mt-16 overflow-hidden rounded-[40px] bg-primary px-10 py-20 text-center text-white shadow-2xl"
        >
          <h2 className="mx-auto max-w-3xl text-4xl font-black lg:text-5xl">
            Ready to Shop Smarter?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Discover products faster, compare with AI and shop confidently with
            NovaCart.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <button className="rounded-full bg-white px-8 py-4 font-semibold text-primary transition hover:scale-105 hover:shadow-xl">
              Start Shopping
            </button>

            <button className="rounded-full border border-white/40 px-8 py-4 font-semibold transition hover:bg-white hover:text-primary">
              Explore AI
            </button>

          </div>
        </motion.div>

      </Container>
    </Section>
  );
};

export default CTA;
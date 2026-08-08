import { motion } from "framer-motion";

import Container from "../../ui/Container";
import Section from "../../ui/Section";

import WhyCard from "./WhyCard";
import { whyData } from "./whyData";

const WhyNovaCart = () => {
  return (
    <Section className="bg-[#FAFAFA] py-24">
      <Container>
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Why NovaCart
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight lg:text-5xl">
            Why Thousands Choose  <br /> NovaCart
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted">
            NovaCart combines AI intelligence with trusted sellers, secure
            payments and fast delivery to give you a better shopping experience.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {whyData.map((item) => (
            <WhyCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default WhyNovaCart;

import { motion } from "framer-motion";

import Container from "../../ui/Container";
import Section from "../../ui/Section";

import WhyCard from "./WhyCard";
import { whyData } from "./whyData";

const WhyNovaCart = () => {
  return (
    <Section className="bg-[#FAFAFA] py-14 sm:py-20 lg:py-24">
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

          <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:mt-5 lg:text-5xl">
            Why Thousands Choose  <br /> NovaCart
          </h2>

          <p className="mt-4 text-sm leading-6 text-muted sm:text-lg sm:leading-8 lg:mt-5">
            NovaCart combines AI intelligence with trusted sellers, secure
            payments and fast delivery to give you a better shopping experience.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 xl:mt-16 xl:grid-cols-4">
          {whyData.map((item) => (
            <WhyCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default WhyNovaCart;

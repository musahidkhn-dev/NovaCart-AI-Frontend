import { motion } from "framer-motion";

import Container from "../../ui/Container";
import Section from "../../ui/Section";

import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonialData";

const Testimonials = () => {
  return (
    <Section>
      <Container>

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Testimonials
          </span>

          <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:mt-5 lg:text-5xl">
            Loved By Developers, Shoppers & Sellers
          </h2>

          <p className="mt-4 text-sm leading-6 text-muted sm:text-lg sm:leading-8 lg:mt-5">
            Thousands of users trust NovaCart AI to discover products,
            compare options and shop with confidence.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 xl:mt-16 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>

      </Container>
    </Section>
  );
};

export default Testimonials;
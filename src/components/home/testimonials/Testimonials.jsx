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

          <h2 className="mt-5 text-4xl font-black tracking-tight lg:text-5xl">
            Loved By Developers, Shoppers & Sellers
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted">
            Thousands of users trust NovaCart AI to discover products,
            compare options and shop with confidence.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
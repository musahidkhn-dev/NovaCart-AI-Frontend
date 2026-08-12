import { motion } from "framer-motion";

import Container from "../../ui/Container";
import Section from "../../ui/Section";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import FooterLinks from "./FooterLinks";
import { footerLinks } from "./footerData";

const Footer = () => {
  return (
    <Section className="border-t border-border bg-surface/40">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-black">
              🟤NovaCart <br /> AI Commerce
            </h2>

            <p className="mt-5 max-w-lg text-sm  leading-7 text-muted sm:text-base sm:leading-8">
              AI-powered eCommerce platform helping users discover products,
              compare options and shop smarter with confidence.
            </p>
            <div className="mt-8 flex items-center gap-5">
              <FaGithub
                size={22}
                className="cursor-pointer text-muted transition-all duration-300 hover:scale-110 hover:text-primary"
              />

              <FaLinkedin
                size={22}
                className="cursor-pointer text-muted transition-all duration-300 hover:scale-110 hover:text-primary"
              />

              <FaXTwitter
                size={22}
                className="cursor-pointer text-muted transition-all duration-300 hover:scale-110 hover:text-primary"
              />
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-3"
          >
            {footerLinks.map((section) => (
              <FooterLinks
                key={section.title}
                title={section.title}
                links={section.links}
              />
            ))}
          </motion.div>
        </div>
        <div className="mt-16 border-t border-border pt-8 flex flex-col gap-4 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>© 2026 NovaCart. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="cursor-pointer transition hover:text-primary">
              Privacy
            </span>

            <span className="cursor-pointer transition hover:text-primary">
              Terms
            </span>

            <span className="cursor-pointer transition hover:text-primary">
              Contact
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Footer;

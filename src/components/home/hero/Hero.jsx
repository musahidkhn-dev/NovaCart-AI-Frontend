import { useEffect, useState } from "react";

import Container from "../../ui/Container";
import Section from "../../ui/Section";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

import { heroSlides } from "./HeroSlide";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const previousSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <Section className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#FFF8F1] via-white to-[#F7F3EC]" />
      <div className="absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-[140px]" />
      <div className="absolute -right-40 bottom-10 -z-10 h-[420px] w-[420px] rounded-full bg-amber-200/20 blur-[160px]" />
      <Container>
        <div
          className="grid items-center gap-16 lg:grid-cols-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <HeroContent slide={heroSlides[activeSlide]} />

          <HeroImage
            slide={heroSlides[activeSlide]}
            activeSlide={activeSlide}
            totalSlides={heroSlides.length}
            nextSlide={nextSlide}
            previousSlide={previousSlide}
          />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;

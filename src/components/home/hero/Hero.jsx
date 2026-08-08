import { useEffect, useState, useCallback } from "react";

import Container from "../../ui/Container";
import Section from "../../ui/Section";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

import { heroSlides } from "./HeroSlide";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    setProgress(0);
  }, []);

  const previousSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
    setProgress(0);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;

        if (next >= 100) {
          nextSlide();
          return 0;
        }

        return next;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <Section className="relative overflow-hidden pt-4 pb-10 lg:pt-12 lg:pb-12">
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#FFF8F1] via-white to-[#F7F3EC]" />
      <div className="absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-[140px]" />
      <div className="absolute -right-40 bottom-10 -z-10 h-[420px] w-[420px] rounded-full bg-amber-200/20 blur-[160px]" />
      <Container>
        <div
          
          className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <HeroContent setIsPaused={setIsPaused} slide={heroSlides[activeSlide]} />

          <HeroImage
            slide={heroSlides[activeSlide]}
            activeSlide={activeSlide}
            totalSlides={heroSlides.length}
            nextSlide={nextSlide}
            previousSlide={previousSlide}
            progress={progress}
            setIsPaused={setIsPaused}
          />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;

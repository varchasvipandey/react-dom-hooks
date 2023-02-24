import { useEffect, useState, useCallback } from "react";

interface UseCarouselProps {
  containerRef: React.RefObject<HTMLDivElement>;
  loop?: boolean;
}

interface State {
  totalSlide: number;
  activeSlide: number;
  slides: ChildNode[] | null;
}

export default function useCarousel({ containerRef, loop }: UseCarouselProps) {
  const [state, setState] = useState<State>({
    totalSlide: 0,
    activeSlide: 0,
    slides: null,
  });

  // increment activeSlide
  const changeSlide = useCallback((direction: "next" | "prev") => {
    setState((prev) => ({
      ...prev,
      activeSlide:
        direction === "next"
          ? prev.activeSlide < prev.totalSlide // ? if active slide is not the last slide
            ? prev.activeSlide + 1
            : loop // ? if loop is true - make first slide the active slide
            ? 1 // ? back to first slide
            : prev.activeSlide // ? do nothing on "next"
          : prev.activeSlide > 1 // ! "prev" case - if active slide is not the first slide
          ? prev.activeSlide - 1 // ! decrement active slide
          : loop // ! if loop is true - make last slide the active slide
          ? prev.totalSlide // ! back to last slide
          : 1, // ! do nothing on "prev"
    }));
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const allSlides = Array.from(container.childNodes);

      // hide all slides except first one
      allSlides.forEach((slide, i) => {
        // @ts-ignore
        slide.style.display = i === 0 ? "block" : "none";
      });

      setState({
        totalSlide: container.childElementCount,
        activeSlide: 1,
        slides: allSlides,
      });
    }
  }, []);

  // slides visibility
  useEffect(() => {
    if (state.slides) {
      state.slides.forEach((slide, i) => {
        // @ts-ignore
        slide.style.display = i + 1 === state.activeSlide ? "block" : "none";
      });
    }
  }, [state.activeSlide, state.slides]);

  return {
    totalSlides: state.totalSlide,
    activeSlide: state.activeSlide,
    changeSlide,
  };
}

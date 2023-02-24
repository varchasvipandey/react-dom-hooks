/// <reference types="react" />
interface UseCarouselProps {
    containerRef: React.RefObject<HTMLDivElement>;
    loop?: boolean;
}
export default function useCarousel({ containerRef, loop }: UseCarouselProps): {
    totalSlides: number;
    activeSlide: number;
    changeSlide: (direction: "next" | "prev") => void;
};
export {};

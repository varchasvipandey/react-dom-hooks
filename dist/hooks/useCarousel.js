"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useCarousel({ containerRef, loop }) {
    const [state, setState] = (0, react_1.useState)({
        totalSlide: 0,
        activeSlide: 0,
        slides: null,
    });
    // increment activeSlide
    const changeSlide = (0, react_1.useCallback)((direction) => {
        setState((prev) => (Object.assign(Object.assign({}, prev), { activeSlide: direction === "next"
                ? prev.activeSlide < prev.totalSlide // ? if active slide is not the last slide
                    ? prev.activeSlide + 1
                    : loop // ? if loop is true - make first slide the active slide
                        ? 1 // ? back to first slide
                        : prev.activeSlide // ? do nothing on "next"
                : prev.activeSlide > 1 // ! "prev" case - if active slide is not the first slide
                    ? prev.activeSlide - 1 // ! decrement active slide
                    : loop // ! if loop is true - make last slide the active slide
                        ? prev.totalSlide // ! back to last slide
                        : 1 })));
    }, []);
    (0, react_1.useEffect)(() => {
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
    (0, react_1.useEffect)(() => {
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
exports.default = useCarousel;

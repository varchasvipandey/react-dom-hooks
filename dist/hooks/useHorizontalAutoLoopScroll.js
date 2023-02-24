"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useHorizontalAutoLoopScroll({ containerId, childClass, loopSpeed = 85, }) {
    const [pause, setPause] = (0, react_1.useState)(false);
    const isElementInViewport = (el) => {
        var rect = el.getBoundingClientRect();
        return rect.right > 0;
    };
    const pauseLoop = (0, react_1.useCallback)(() => setPause(true), []);
    const resumeLoop = (0, react_1.useCallback)(() => setPause(false), []);
    (0, react_1.useEffect)(() => {
        if (pause)
            return;
        const scrollContainer = document.getElementById(containerId);
        const scrollContainerWidth = scrollContainer.scrollWidth;
        const scrollInterval = self.setInterval(() => {
            const first = document.querySelector(`#${containerId} .${childClass}`);
            if (!isElementInViewport(first)) {
                scrollContainer.appendChild(first);
                scrollContainer.scrollTo(scrollContainer.scrollLeft - first.offsetWidth, 0);
            }
            if (scrollContainer.scrollLeft !== scrollContainerWidth) {
                scrollContainer.scrollTo(scrollContainer.scrollLeft + 1, 0);
            }
        }, loopSpeed >= 0 && loopSpeed <= 100 ? 100 - loopSpeed : 15);
        return () => {
            clearInterval(scrollInterval);
        };
    }, [pause]);
    return {
        pauseLoop,
        resumeLoop,
    };
}
exports.default = useHorizontalAutoLoopScroll;

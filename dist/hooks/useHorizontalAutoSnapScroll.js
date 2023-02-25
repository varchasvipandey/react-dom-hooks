"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useHorizontalAutoSnapScroll({ scrollLeftBy, snapDelay, }) {
    const scrollInterval = (0, react_1.useRef)(null);
    const scrollContainer = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (scrollInterval.current)
            clearInterval(scrollInterval.current);
        else {
            const container = scrollContainer.current;
            if (container) {
                scrollInterval.current = setInterval(() => {
                    if (container.scrollLeft + container.offsetWidth >=
                        container.scrollWidth) {
                        container.scrollBy({
                            left: -container.scrollWidth,
                            behavior: "smooth",
                        });
                    }
                    else
                        container.scrollBy({ left: scrollLeftBy, behavior: "smooth" });
                }, snapDelay);
            }
        }
        return () => {
            if (scrollInterval.current)
                clearInterval(scrollInterval.current);
        };
    }, []);
    return { containerRef: scrollContainer };
}
exports.default = useHorizontalAutoSnapScroll;

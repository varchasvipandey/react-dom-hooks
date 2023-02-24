"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useVerticalSectionScroll(containerId) {
    const [container, setContainer] = (0, react_1.useState)(null);
    const handleScroll = (0, react_1.useCallback)((direction) => {
        if (container) {
            let scrollYBy = container.offsetHeight;
            if (direction === "up")
                scrollYBy *= -1;
            container.scrollBy({ top: scrollYBy, behavior: "smooth" });
        }
    }, [container]);
    (0, react_1.useEffect)(() => {
        setContainer(document.getElementById(containerId));
    }, []);
    return {
        handleScroll,
    };
}
exports.default = useVerticalSectionScroll;

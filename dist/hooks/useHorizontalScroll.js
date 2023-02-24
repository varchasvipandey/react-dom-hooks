"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useHorizontalSectionScroll(containerId) {
    const [container, setContainer] = (0, react_1.useState)(null);
    const handleScroll = (0, react_1.useCallback)((direction) => {
        if (container) {
            let scrollXBy = container.offsetWidth;
            if (direction === "left")
                scrollXBy *= -1;
            container.scrollBy({ left: scrollXBy, behavior: "smooth" });
        }
    }, [container]);
    (0, react_1.useEffect)(() => {
        setContainer(document.getElementById(containerId));
    }, []);
    return {
        handleScroll,
    };
}
exports.default = useHorizontalSectionScroll;

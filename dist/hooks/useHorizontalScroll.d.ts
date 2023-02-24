export default function useHorizontalSectionScroll(containerId: string): {
    handleScroll: (direction: "left" | "right") => void;
};

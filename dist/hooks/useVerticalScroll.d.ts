export default function useVerticalSectionScroll(containerId: string): {
    handleScroll: (direction: "up" | "down") => void;
};

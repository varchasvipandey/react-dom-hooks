/// <reference types="react" />
interface UseHorizontalAutoSnapScrollProps {
    scrollLeftBy: number;
    snapDelay: number;
}
export default function useHorizontalAutoSnapScroll({ scrollLeftBy, snapDelay, }: UseHorizontalAutoSnapScrollProps): {
    containerRef: import("react").MutableRefObject<HTMLDivElement | null>;
};
export {};

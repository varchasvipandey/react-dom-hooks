interface UseHorizontalAutoLoopScrollProps {
    containerId: string;
    childClass: string;
    loopSpeed?: number;
}
export default function useHorizontalAutoLoopScroll({ containerId, childClass, loopSpeed, }: UseHorizontalAutoLoopScrollProps): {
    pauseLoop: () => void;
    resumeLoop: () => void;
};
export {};

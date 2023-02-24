import { useEffect, useState, useCallback } from "react";

interface UseHorizontalAutoLoopScrollProps {
  containerId: string;
  childClass: string;
  loopSpeed?: number; // 0 - 100
}

export default function useHorizontalAutoLoopScroll({
  containerId,
  childClass,
  loopSpeed = 85,
}: UseHorizontalAutoLoopScrollProps) {
  const [pause, setPause] = useState(false);

  const isElementInViewport = (el: HTMLDivElement) => {
    var rect = el.getBoundingClientRect();
    return rect.right > 0;
  };

  const pauseLoop = useCallback(() => setPause(true), []);
  const resumeLoop = useCallback(() => setPause(false), []);

  useEffect(() => {
    if (pause) return;

    const scrollContainer = document.getElementById(
      containerId
    ) as HTMLDivElement;
    const scrollContainerWidth = scrollContainer.scrollWidth;

    const scrollInterval = self.setInterval(
      () => {
        const first = document.querySelector(
          `#${containerId} .${childClass}`
        ) as HTMLDivElement;
        if (!isElementInViewport(first)) {
          scrollContainer.appendChild(first);
          scrollContainer.scrollTo(
            scrollContainer.scrollLeft - first.offsetWidth,
            0
          );
        }
        if (scrollContainer.scrollLeft !== scrollContainerWidth) {
          scrollContainer.scrollTo(scrollContainer.scrollLeft + 1, 0);
        }
      },
      loopSpeed >= 0 && loopSpeed <= 100 ? 100 - loopSpeed : 15
    );

    return () => {
      clearInterval(scrollInterval);
    };
  }, [pause]);

  return {
    pauseLoop,
    resumeLoop,
  };
}

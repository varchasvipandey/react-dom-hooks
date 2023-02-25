import { useEffect, useRef } from "react";

interface UseHorizontalAutoSnapScrollProps {
  scrollLeftBy: number;
  snapDelay: number; // ms
}

export default function useHorizontalAutoSnapScroll({
  scrollLeftBy,
  snapDelay,
}: UseHorizontalAutoSnapScrollProps) {
  const scrollInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const scrollContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollInterval.current) clearInterval(scrollInterval.current);
    else {
      const container = scrollContainer.current;

      if (container) {
        scrollInterval.current = setInterval(() => {
          if (
            container.scrollLeft + container.offsetWidth >=
            container.scrollWidth
          ) {
            container.scrollBy({
              left: -container.scrollWidth,
              behavior: "smooth",
            });
          } else container.scrollBy({ left: scrollLeftBy, behavior: "smooth" });
        }, snapDelay);
      }
    }
    return () => {
      if (scrollInterval.current) clearInterval(scrollInterval.current);
    };
  }, []);

  return { containerRef: scrollContainer };
}

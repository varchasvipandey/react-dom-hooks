import { useEffect, useState, useCallback } from "react";

export default function useVerticalSectionScroll(containerId: string) {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  const handleScroll = useCallback(
    (direction: "up" | "down"): void => {
      if (container) {
        let scrollYBy = container.offsetHeight;
        if (direction === "up") scrollYBy *= -1;
        container.scrollBy({ top: scrollYBy, behavior: "smooth" });
      }
    },
    [container]
  );

  useEffect(() => {
    setContainer(document.getElementById(containerId));
  }, []);

  return {
    handleScroll,
  };
}

import { useEffect, useState, useCallback } from "react";

export default function useHorizontalSectionScroll(containerId: string) {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  const handleScroll = useCallback(
    (direction: "left" | "right"): void => {
      if (container) {
        let scrollXBy = container.offsetWidth;
        if (direction === "left") scrollXBy *= -1;
        container.scrollBy({ left: scrollXBy, behavior: "smooth" });
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

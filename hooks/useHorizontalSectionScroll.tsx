import { useEffect, useState } from "react";

export default function useHorizontalSectionScroll(containerId: string) {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  const handleScroll = (direction: "left" | "right"): void => {
    if (container) {
      let scrollXBy = container.offsetWidth;
      if (direction === "left") scrollXBy *= -1;
      container.scrollBy({ left: scrollXBy, behavior: "smooth" });
    }
  };

  useEffect(() => {
    setContainer(document.getElementById(containerId));
  }, []);

  return {
    handleScroll,
  };
}

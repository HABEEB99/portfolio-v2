import { useInView } from "react-intersection-observer";
import { useActiveSection } from "./use-active-section";
import { useEffect } from "react";

export const useSectionInView = (section: string, threshold = 0.75) => {
  const { setActiveSection, lastClicked } = useActiveSection();
  const { ref, inView } = useInView({ threshold });

  useEffect(() => {
    if (inView && Date.now() - lastClicked > 1000) {
      setActiveSection(section);
    }
  }, [inView, setActiveSection, lastClicked]);

  return { ref };
};

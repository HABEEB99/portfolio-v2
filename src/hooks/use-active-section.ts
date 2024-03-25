import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface IActiveSection {
  activeSection: string;
  lastClicked: number;
  setActiveSection: (section: string) => void;
  setLastClicked: (lastClicked: number) => void;
}

export const useActiveSection = create<IActiveSection>()(
  devtools(
    persist(
      (set) => ({
        activeSection: "Home",
        lastClicked: 0,
        setActiveSection: (section) =>
          set((state) => ({ activeSection: section })),
        setLastClicked: (currentLastClicked) =>
          set((state) => ({ lastClicked: currentLastClicked })),
      }),
      { name: "activeStore" }
    )
  )
);

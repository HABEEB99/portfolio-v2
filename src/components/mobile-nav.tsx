"use client";

import { useActiveSection } from "@/hooks/use-active-section";
import { cn, navItems } from "@/lib/utils";
import Link from "next/link";

export const MobileNav = () => {
  const { activeSection, setActiveSection } = useActiveSection();
  return (
    <div className="absolute right-0 top-[20vh] bg-gray-400 flex flex-col items-center justify-center lg:hidden p-2">
      <div
        className=" w-full h-full flex flex-col items-center justify-around 
    rounded-full gap-6"
      >
        {navItems.map(({ title, icon: Icon, link }) => (
          <Link href={link} key={title}>
            <Icon
              className={cn(
                `${
                  activeSection === title
                    ? "w-5 h-5 text-btn font-bold animate-bounce"
                    : "w-5 h-5 text-slate-600"
                }`
              )}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

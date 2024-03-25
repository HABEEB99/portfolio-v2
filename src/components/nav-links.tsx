"use client";
import { useActiveSection } from "@/hooks/use-active-section";
import { motion } from "framer-motion";
import { cn, navItems } from "@/lib/utils";
import Link from "next/link";

export const NavLinks = () => {
  const { activeSection, setActiveSection } = useActiveSection();

  return (
    <div className="hidden lg:flex items-center justify-center space-x-4">
      {navItems.map(({ title, link, icon: Icon }) => (
        <Link
          href={link}
          key={title}
          className="flex items-center justify-center space-x-1 group"
          onClick={() => setActiveSection(title)}
        >
          <Icon
            className={cn(
              activeSection === title
                ? "w-3 h-3 font-bold text-btn animate-bounce"
                : "w-3 h-3 text-muted-foreground group-hover:text-btn group-hover:animate-bounce"
            )}
          />
          <span
            className={cn(
              activeSection === title
                ? "text-sm font-bold text-btn"
                : "text-xs text-muted-foreground group-hover:text-btn"
            )}
          >
            {title}
          </span>
        </Link>
      ))}
    </div>
  );
};

import { Button } from "@/components/ui/button";
import { Logo, NavLinks, ThemeSwitcher } from "@/components";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full h-[8vh] shadow-sm shadow-modal flex items-center justify-between fixed inset-y-0 !z-[999] wrapper">
      <Logo />

      <NavLinks />

      <div className="flex items-center justify-center space-x-2">
        <ThemeSwitcher />
        <Button variant="main" asChild>
          <Link href="#contacts" className="gap-2">
            <PhoneCall className="w-4 h-4" /> Hire me
          </Link>
        </Button>
      </div>
    </header>
  );
};

import { type ClassValue, clsx } from "clsx";
import {
  GraduationCap,
  HardHat,
  Home,
  PencilRuler,
  PhoneCall,
  User,
} from "lucide-react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const navItems = [
  { title: "Home", link: "#hero", icon: Home },
  { title: "About", link: "#about", icon: User },
  { title: "Projects", link: "#projects", icon: HardHat },
  { title: "Skills", link: "#skills", icon: PencilRuler },
  { title: "Qualification", link: "#qualification", icon: GraduationCap },
  { title: "Contacts", link: "#contacts", icon: PhoneCall },
] as const;

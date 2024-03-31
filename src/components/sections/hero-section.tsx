"use client";

import Link from "next/link";
import Image from "next/image";

import { urlFor } from "@/lib/sanity-client";

import { Button } from "../ui/button";
import { Eye } from "lucide-react";

import { useSectionInView } from "@/hooks/use-section-in-view";

interface IHeroProps {
  hero: { _id: string; intro: string; imageUrl: string };
}

export const HeroSection: React.FC<IHeroProps> = ({
  hero: { imageUrl, intro },
}) => {
  const { ref } = useSectionInView("Home");

  return (
    <div id="hero" className="section" ref={ref}>
      <div className="w-full h-full pt-16 flex flex-col-reverse gap-y-8 md:gap-y-0 md:flex-row items-center justify-around my-auto">
        <div className="w-full md:w-[50%] h-[50%] md:h-full  space-y-3">
          <h2 className="text-2xl md:text-4xl tracking-wide">{intro}</h2>
          <Button variant="main" size="lg" asChild className="w-full md:w-60">
            <Link href="#projects" className="gap-2">
              <Eye className="w-4 h-4" />
              My Projects
            </Link>
          </Button>
        </div>

        <div className="w-full md:w-[50%] h-[50%] md:h-full flex items-center justify-center">
          <div className="relative w-60 h-60">
            <Image
              src={urlFor(imageUrl).url()}
              alt="Habeeb Ahmadu"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

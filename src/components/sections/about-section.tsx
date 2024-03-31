"use client";

import Image from "next/image";
import Link from "next/link";

import { File } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { SectionHeader } from "@/components";
import { urlFor } from "@/lib/sanity-client";

import { useSectionInView } from "@/hooks/use-section-in-view";

interface IAboutProps {
  about: {
    _id: string;
    intro: string;
    image: string;
    cv: string;
    features: {
      _key: string;
      title: string;
      description: string;
      image: string;
    }[];
  };
}

export const AboutSection: React.FC<IAboutProps> = ({
  about: { intro, image, cv, features },
}) => {
  const { ref } = useSectionInView("About");

  return (
    <div id="about" className="section" ref={ref}>
      <SectionHeader title="About" description="Information about me" />

      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row items-center justify-between my-auto">
        <div className="relative w-full md:w-[50%] h-64">
          <Image
            src={urlFor(image).url()}
            alt="Habeeb Ahmadu"
            fill
            quality={95}
            className="object-contain"
          />
        </div>

        <div className="w-full md:w-[50%] flex flex-col gap-4">
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-2">
            {features.map(({ _key, description, image, title }) => (
              <Dialog key={_key}>
                <DialogTrigger asChild>
                  <Card className="w-full md:w-30 flex-col flex items-center justify-center cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-sm">{title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-col flex items-center justify-center gap-2">
                      <Image
                        src={urlFor(image).url()}
                        alt="Habeeb Ahmadu"
                        quality={95}
                        width={40}
                        height={40}
                      />
                      <p className="line-clamp-2 text-xs">{description}</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                <DialogContent className="w-full md:w-96 flex flex-col items-center justify-center">
                  <h4 className="font-bold">{title}</h4>
                  <Image
                    src={urlFor(image).url()}
                    alt="Habeeb Ahmadu"
                    quality={95}
                    width={40}
                    height={40}
                  />
                  <p className="text-sm">{description}</p>
                </DialogContent>
              </Dialog>
            ))}
          </div>
          <p className="text-sm tracking-wider">{intro}</p>

          <Button variant="main" size="lg" className="w-full md:w-60" asChild>
            <Link download href={cv} target="_blank">
              <File className="w-4 h-4 mr-2" />
              Download CV
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

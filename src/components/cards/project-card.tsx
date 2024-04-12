import Image from "next/image";
import { Card, CardContent, CardFooter } from "../ui/card";
import { urlFor } from "@/lib/sanity-client";
import Link from "next/link";
import { Github, Globe } from "lucide-react";
import { Button } from "../ui/button";

interface IProjectCardProps {
  _id: string;
  title: string;
  description: string;
  type: string;
  projectUrl: string;
  codeUrl: string;
  slug: string;
  imageUrl: string;
}

export const ProjectCard: React.FC<IProjectCardProps> = ({
  title,
  imageUrl,
  codeUrl,
  description,
  projectUrl,
  type,
}) => {
  return (
    <Card className="w-80 h-[60vh] flex flex-col">
      <CardContent className="flex-1 px-0">
        <div className="w-full h-[60%] relative bg-yellow-400">
          <Image
            src={urlFor(imageUrl).url()}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        <div className="px-6 py-2">
          <h3>{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <Link href={codeUrl}>
          <Github className="w-4 h-4" />
        </Link>

        <Link href={projectUrl}>
          <Globe className="w-4 h-4" />
        </Link>
      </CardFooter>
    </Card>
  );
};

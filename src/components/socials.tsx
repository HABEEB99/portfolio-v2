import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export const Socials = () => {
  return (
    <div className="absolute top-[50vh] left-4 flex flex-col space-y-2">
      <Link href="https://github.com/HABEEB99" target="_blank">
        <Github className="w-4 h-4 text-gray-400 hover:text-gray-500 active:text-gray-600" />
      </Link>

      <Link href="https://www.linkedin.com/in/habeeb-ahmadu" target="_blank">
        <Linkedin className="w-4 h-4 text-sky-400 hover:text-sky-500 active:text-sky-600" />
      </Link>
    </div>
  );
};

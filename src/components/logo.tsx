import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="#hero" className="flex items-center justify-center space-x-2">
      <Image
        src="/logo.png"
        alt="Habeeb Ahmadu"
        width={30}
        height={30}
        quality={95}
      />

      <div className="flex flex-col -space-y-2">
        <h4
          className="text-sm md:text-lg text-transparent py-1 bg-clip-text bg-gradient-to-r 
      from-btn font-bold to-modal"
        >
          Habeeb Ahmadu
        </h4>
        <span className="text-xs text-muted-foreground">Software Engineer</span>
      </div>
    </Link>
  );
};

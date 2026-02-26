import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  blacklink?: boolean;
};

export default function Logo({ blacklink = false, }: LogoProps) {

  const logo = (
    <div className="relative w-10 h-10">
      <Image
        src="/bird/1.png"
        alt="Logo"
        fill
        className={cn("rounded-full object-cover overflow-visible", "bg-[#eeceb1]")}
      />
    </div>
  );

  return blacklink ? <Link href="/">{logo}</Link> : logo;
}

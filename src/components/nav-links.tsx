"use client";
import { motion } from "motion/react";
import { navItems } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
export default function NavLinks() {
  return (
    <motion.div
      className={cn(
        "flex flex-1 flex-row items-center justify-center space-x-1 text-sm font-medium text-zinc-600 transition duration-200  lg:space-x-2 "
      )}
    >
      <div className="hidden lg:flex space-x-2">
        {navItems.map((item, idx) => (
          <Link
            key={`link-${idx}`}
            href={item.href}
            className="relative px-2 py-2 text-neutral-600 dark:text-neutral-300 hover:bg-[#eeceb1]/50 rounded-full"
          >
            <span className="">{item.name}</span>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}


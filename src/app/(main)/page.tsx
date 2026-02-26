
"use client";

import { motion } from "motion/react";
import Image from "next/image";

const BIRDS = [
  // Top
  { id: 1, src: "/bird/3.png", className: "absolute top-0 left-40", initial: { x: -120, y: -80, opacity: 0 }, delay: 0.1 },

  // Top Right
  { id: 6, src: "/bird/5.png", className: "absolute top-0 right-23", initial: { x: 100, y: -80, opacity: 0 }, delay: 0.3 },

  // Right
  { id: 2, src: "/bird/6.png", className: "absolute top-40 right-0", initial: { x: 120, y: -60, opacity: 0 }, delay: 0.5 },

  // Bottom Right
  { id: 7, src: "/bird/7.png", className: "absolute right-0 -bottom-32", initial: { x: 100, y: 100, opacity: 0 }, delay: 0.7 },

  // Bottom Left
  { id: 3, src: "/bird/1.png", className: "absolute -bottom-20 left-0", initial: { x: -100, y: 100, opacity: 0 }, delay: 0.9 },

  // Left
  { id: 4, src: "/bird/2.png", className: "absolute left-0 top-40", initial: { x: -120, y: 0, opacity: 0 }, delay: 1.1 },

  // Top Center
  { id: 5, src: "/bird/4.png", className: "absolute -top-10", initial: { x: 0, y: -100, opacity: 0 }, delay: 1.3 },
];

export default function AnniversaryPage() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-background">

      {/* Birds */}
      {BIRDS.map((bird) => (
        <motion.div
          key={bird.id}
          className={`${bird.className} z-10`}
          initial={bird.initial}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
            delay: bird.delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <Image
            src={bird.src}
            alt={`Bird ${bird.id}`}
            width={270}
            height={270}
            className="w-full h-auto object-contain drop-shadow-xl"
          />
        </motion.div>
      ))}

      {/* Center Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center text-center px-8 pointer-events-none select-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 1.8,   // appears after all birds
          duration: 1,
          ease: "easeOut"
        }}
      >
        <div className="flex-col">
          <span className="text-5xl">
            Happy Anniversary
          </span>
          <div>
            <span className="text-feather-cardinal text-4xl mt-2"> aarushi </span>
          </div>
          <p> with all my heart </p>
        </div>
      </motion.div>

    </main>
  );
}


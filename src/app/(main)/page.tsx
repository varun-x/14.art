"use client";

import { motion } from "motion/react";
import Image from "next/image";

const poem = [
  "You are the rarest bird I've ever known —",
  "with wings that carry colour through the sky,",
  "a song that makes the quietest mornings glow,",
  "and eyes that see the beauty others pass by.",
  "",
  "You paint the world the way the sparrow flies —",
  "without a map, without a reason why,",
  "just instinct, grace, and something in your soul",
  "that turns the ordinary into gold.",
  "",
  "So here's a little corner of the world,",
  "a sky with just your name written across it —",
  "a place for every feather, every flight,",
  "for everything you are, and all you'll be.",
];


const BIRDS = [
  {
    id: 1,
    src: "/bird/3.png",
    className: "absolute top-0  left-40"
  },
  {
    id: 2,
    src: "/bird/6.png",
    className: "absolute top-40 right-0",
  },
  {
    id: 3,
    src: "/bird/1.png",
    className: "absolute -bottom-20 left-0"
  },
  {
    id: 4,
    src: "/bird/2.png",
    className: "left-0 top-40"
  },
  {
    id: 5,
    src: "/bird/4.png",
    className: "absolute -top-10 "
  },
  {
    id: 6,
    src: "/bird/5.png",
    className: "absolute top-0 right-0 "
  },
  {
    id: 7,
    src: "/bird/7.png",
    // Left side, mid
    className: "absolute right-0 -bottom-35 "
  },
];

export default function AnniversaryPage() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden flex items-center justify-center"    >


      {/* Birds */}
      {BIRDS.map((bird) => (
        <motion.div
          key={bird.id}
          className={bird.className}
          style={{ position: "absolute", zIndex: 5 }}
          initial={bird.initial}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{
            duration: 1.35,
            delay: bird.delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <Image
            src={bird.src}
            alt={`Bird ${bird.id}`}
            width={270}
            height={270}
            className="w-full h-auto object-contain"
            style={{
              filter: "drop-shadow(0 6px 20px oklch(0 0 0 / 0.12))",
            }}
          />
        </motion.div>
      ))}
    </main >
  );
}


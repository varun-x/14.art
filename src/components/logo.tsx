"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  blacklink?: boolean;
};

const images = [
  "/bird/1.png",
  "/bird/2.png",
  "/bird/3.png",
  "/bird/4.png",
  "/bird/5.png",
  "/bird/6.png",
  "/bird/7.png",
];

export default function Logo({ blacklink = false }: LogoProps) {
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const changeImage = () => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentImage(images[randomIndex]);

      const randomDelay = Math.floor(Math.random() * 4000) + 2000;
      // 2s → 6s random delay

      timeout = setTimeout(changeImage, randomDelay);
    };

    changeImage();

    return () => clearTimeout(timeout);
  }, []);

  const logo = (
    <div className="relative size-9 overflow-visible">
      <Image
        src={currentImage}
        alt="Logo"
        fill
        className="rounded-full object-cover object-right bg-[#f9564e] "
      />
    </div>
  );

  return blacklink ? <Link href="/">{logo}</Link> : logo;
}


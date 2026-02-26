"use client"
import { cn } from "@/lib/utils"
import { motion, useScroll, useMotionValueEvent } from "motion/react"
import { useRef, useState } from "react"
import Logo from "./logo"
import NavLinks from "./nav-links"
import Signature from "./signature"
import Image from "next/image"
export const AppNavBar = ({ className }: { className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const [visible, setVisible] = useState<boolean>(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) setVisible(true)
    else setVisible(false)
  });
  return (
    <motion.div ref={ref} className={cn("sticky inset-x-0 top-1 z-40 w-full  bg-[#f6f1e8] ", className)}>
      <motion.div
        animate={{
          boxShadow: visible
            ? "0 0 6px rgba(238, 206, 177, 0.6), 0 1px 2px rgba(238, 206, 177, 0.4), 0 0 0 1px rgba(238, 206, 177, 0.3)"
            : "none",
          width: visible ? "60%" : "90%",
          y: visible ? 12 : 10,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
        className={cn(
          "relative z-60 mx-auto w-full max-w-6xl flex-row items-center justify-between self-start rounded-md px-3 py-2 lg:flex",
          "bg-[#f6f1e8] shadow-xl",
          "rounded-full",
          visible && "",
        )}
      >
        <div className="flex justify-between w-full h-8 items-center ">
          <div className="flex items-center">
            <div className="flex gap-2 items-center">
              <Logo blacklink />
              {/* <Signature /> */}

              {false && <div className="h-7 bg-[#eeceb1] w-1 rounded-full hidden md:block " />}
              <motion.div
                className="overflow-hidden"
                animate={{
                  width: visible ? 0 : "auto",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.3,
                }}
              >
                <motion.div
                  className="whitespace-nowrap text-xs flex items-center"
                  animate={{
                    x: visible ? "100%" : "0%",
                    opacity: visible ? 0 : 1,
                  }}
                  transition={{
                    x: {
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    },
                    opacity: {
                      duration: 0.2,
                      delay: visible ? 0 : 0.1,
                    },
                  }}

                >
                  <span className="">
                    To the bird of my heart
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </div>
          {/* right section */}
          <div className="">
            <NavLinks />
          </div>
        </div>
      </motion.div >
    </motion.div >
  )
}


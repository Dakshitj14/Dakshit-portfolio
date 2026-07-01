"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: React.ReactNode | string | any;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "rgba(0, 0, 0, 0.4)",
    "rgba(9, 9, 11, 0.4)",
    "rgba(24, 24, 27, 0.4)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #4f46e5, #06b6d4)", // Indigo to Cyan
    "linear-gradient(to bottom right, #a855f7, #6366f1)", // Purple to Indigo
    "linear-gradient(to bottom right, #3b82f6, #8b5cf6)", // Blue to Purple
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[32rem] justify-between space-x-10 overflow-y-auto rounded-2xl p-8 border border-zinc-850 dark:border-zinc-850 w-full"
      ref={ref}
      style={{ scrollbarWidth: "none" }}
    >
      <div className="relative flex items-start px-4 w-full lg:w-1/2">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-24 first:mt-8 last:mb-32">
              <motion.h3
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.25,
                }}
                className="text-2xl font-bold font-outfit text-slate-100"
              >
                {item.title}
              </motion.h3>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.25,
                }}
                className="mt-6 text-sm text-zinc-400 leading-relaxed font-sans"
              >
                {item.description}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-8 hidden h-72 w-96 overflow-hidden rounded-xl bg-white/5 border border-zinc-800 lg:flex items-center justify-center shadow-inner",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};

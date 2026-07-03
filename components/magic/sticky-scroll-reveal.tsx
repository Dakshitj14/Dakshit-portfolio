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

  // Reset scroll position and active card when section leaves the viewport
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setActiveCard(0);
          if (ref.current) {
            ref.current.scrollTop = 0;
          }
        }
      },
      {
        root: null,
        threshold: 0, // Trigger when 100% off-screen
      }
    );

    observer.observe(element);
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref]);

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
      className="relative flex flex-col lg:flex-row h-[32rem] sm:h-[36rem] lg:h-[32rem] justify-between overflow-y-auto rounded-2xl p-4 sm:p-6 lg:p-8 border border-zinc-800/80 dark:border-zinc-850 w-full"
      ref={ref}
      style={{ scrollbarWidth: "none" }}
    >
      {/* Sticky visual card for mobile/tablet only */}
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-0 w-full h-40 sm:h-48 overflow-hidden rounded-xl bg-white/5 border border-zinc-800 flex lg:hidden items-center justify-center shadow-inner z-30 mb-6 shrink-0",
          contentClassName
        )}
      >
        <motion.div
          key={activeCard}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full flex items-center justify-center"
        >
          {content[activeCard].content ?? null}
        </motion.div>
      </div>

      {/* Scrolling Text Column */}
      <div className="relative flex items-start px-2 sm:px-4 w-full lg:w-1/2 order-2 lg:order-1">
        <div className="max-w-2xl w-full">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-12 lg:my-24 first:mt-2 lg:first:mt-8 last:pb-[28rem] lg:last:pb-[24rem]">
              <motion.h3
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.25,
                }}
                className="text-xl lg:text-2xl font-bold font-outfit text-slate-100"
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
                className="mt-4 text-xs lg:text-sm text-zinc-400 leading-relaxed font-sans"
              >
                {item.description}
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky visual card for desktop only */}
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-8 hidden h-72 w-96 overflow-hidden rounded-xl bg-white/5 border border-zinc-800 lg:flex items-center justify-center shadow-inner order-1 lg:order-2 self-start",
          contentClassName,
        )}
      >
        <motion.div
          key={activeCard}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full flex items-center justify-center"
        >
          {content[activeCard].content ?? null}
        </motion.div>
      </div>
    </motion.div>
  );
};

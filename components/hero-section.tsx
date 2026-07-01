"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShimmerButton } from "@/components/magic/shimmer-button";
import { ArrowRight, Download, Send } from "lucide-react";
import { KineticText } from "@/components/magic/kinetic-text";

const roles = [
  "Full Stack Developer",
  "AI Enthusiast",
  "Hackathon Finalist",
  "Open Source Learner",
  "Problem Solver",
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center"
    >
      <div className="z-10 flex flex-col items-center gap-6 max-w-4xl">
        {/* Intro Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300 dark:text-indigo-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
          </span>
          Open to New Opportunities
        </motion.div>

        {/* Large Typography Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-outfit text-5xl font-extrabold tracking-tight sm:text-7xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-zinc-800 to-zinc-500 dark:from-white dark:to-zinc-400"
        >
          <KineticText text="Dakshit Jha" />
        </motion.h1>

        {/* Rotating Roles cycler */}
        <div className="h-12 sm:h-16 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-xl font-medium tracking-wide sm:text-3xl text-indigo-400 font-sans"
            >
              {roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-xl text-base text-zinc-400 sm:text-lg"
        >
          Final year Computer Science student crafting state-of-the-art, high-performance web products blended with Artificial Intelligence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 flex flex-col flex-wrap justify-center gap-4 sm:flex-row"
        >
          <ShimmerButton
            onClick={() => handleScroll("projects")}
            shimmerColor="#818cf8"
            background="linear-gradient(to right, #4f46e5, #6366f1)"
            className="font-semibold text-white px-8 py-3.5"
          >
            <span className="flex items-center gap-2">
              View Projects <ArrowRight className="h-4 w-4" />
            </span>
          </ShimmerButton>

          <a href="/resume.pdf" download>
            <ShimmerButton
              shimmerColor="#a78bfa"
              background="#18181b"
              className="font-semibold text-zinc-200 px-8 py-3.5 border border-zinc-800"
            >
              <span className="flex items-center gap-2">
                Download Resume <Download className="h-4 w-4" />
              </span>
            </ShimmerButton>
          </a>

          <ShimmerButton
            onClick={() => handleScroll("contact")}
            shimmerColor="#3b82f6"
            background="#000000"
            className="font-semibold text-zinc-300 px-8 py-3.5 border border-indigo-500/20"
          >
            <span className="flex items-center gap-2">
              Contact Me <Send className="h-4 w-4" />
            </span>
          </ShimmerButton>
        </motion.div>
      </div>
    </section>
  );
}

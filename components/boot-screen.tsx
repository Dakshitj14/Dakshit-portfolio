"use client";

import { Terminal, TypingAnimation, AnimatedSpan } from "@/components/magic/terminal";
import { motion } from "framer-motion";

interface BootScreenProps {
  onComplete: () => void;
}

export default function BootScreen({ onComplete }: BootScreenProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-lg md:max-w-2xl"
      >
        <Terminal 
          onComplete={onComplete}
          className="w-full shadow-[0_0_50px_rgba(99,102,241,0.15)] border-zinc-800/80 bg-zinc-950/90 font-mono text-zinc-300"
          sequence={true}
        >
          <TypingAnimation duration={25} className="text-zinc-400">Initializing Portfolio...</TypingAnimation>
          
          <AnimatedSpan className="text-zinc-500 mt-2">Loading Developer...</AnimatedSpan>
          
          <AnimatedSpan className="text-indigo-400 mt-2 font-bold">Name:</AnimatedSpan>
          <TypingAnimation duration={30} className="text-white font-bold text-base">Dakshit Jha</TypingAnimation>
          
          <AnimatedSpan className="text-indigo-400 mt-2 font-bold">Role:</AnimatedSpan>
          <TypingAnimation duration={20} className="text-zinc-200">Final Year Computer Science Engineering Student</TypingAnimation>
          
          <AnimatedSpan className="text-zinc-500 mt-2">Loading Skills...</AnimatedSpan>
          
          <AnimatedSpan className="text-emerald-400 font-semibold flex items-center gap-2">
            <span>✓</span> Full Stack Development
          </AnimatedSpan>
          
          <AnimatedSpan className="text-emerald-400 font-semibold flex items-center gap-2">
            <span>✓</span> Artificial Intelligence
          </AnimatedSpan>
          
          <AnimatedSpan className="text-emerald-400 font-semibold flex items-center gap-2">
            <span>✓</span> Machine Learning
          </AnimatedSpan>
          
          <AnimatedSpan className="text-emerald-400 font-semibold flex items-center gap-2">
            <span>✓</span> Problem Solving
          </AnimatedSpan>
          
          <AnimatedSpan className="text-emerald-400 font-semibold flex items-center gap-2">
            <span>✓</span> Hackathons
          </AnimatedSpan>
          
          <AnimatedSpan className="text-emerald-400 font-semibold flex items-center gap-2">
            <span>✓</span> Open Source
          </AnimatedSpan>
          
          <AnimatedSpan className="text-indigo-400 font-bold mt-2">Portfolio Ready.</AnimatedSpan>
          
          <TypingAnimation duration={30} className="text-white font-bold text-base mt-1">Welcome.</TypingAnimation>
        </Terminal>
      </motion.div>
    </div>
  );
}

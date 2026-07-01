"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface KineticTextProps {
  text: string;
  className?: string;
}

export function KineticText({ text, className }: KineticTextProps) {
  return (
    <span className={cn("inline-flex flex-wrap select-none", className)}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block transition-colors duration-300 ease-out origin-center"
          style={{
            display: "inline-block",
            whiteSpace: char === " " ? "pre" : "normal",
          }}
          initial={{ fontWeight: 400 }}
          whileHover={{
            fontWeight: 800,
            scale: 1.08,
            color: "#6366f1", // Indigo accent color
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 10,
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

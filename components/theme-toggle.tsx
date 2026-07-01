"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-400 shrink-0" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900/10 dark:bg-zinc-800/20 text-zinc-500 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-zinc-900/20 dark:hover:bg-zinc-800/40 border border-zinc-200/50 dark:border-zinc-800/60 transition-all duration-300 shadow-sm shrink-0 cursor-pointer focus:outline-none"
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ y: -10, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 10, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Sun className="h-5 w-5 text-amber-500 fill-amber-500/20" />
          ) : (
            <Moon className="h-5 w-5 text-indigo-500 fill-indigo-500/10" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}

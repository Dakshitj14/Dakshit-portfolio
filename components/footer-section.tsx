"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, Instagram } from "lucide-react";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-zinc-200/50 dark:border-zinc-900 bg-white/60 dark:bg-black/60 relative z-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left Side: Copyright */}
        <p className="text-zinc-500 text-sm font-sans order-2 sm:order-1">
          &copy; {currentYear} Dakshit Jha. All rights reserved.
        </p>

        {/* Center: Made with love */}
        <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 text-sm font-sans order-1 sm:order-2">
          <span>Made with</span>
          <Heart className="h-4.5 w-4.5 text-rose-500 fill-rose-500 animate-pulse" />
          <span>by Dakshit Jha</span>
        </div>

        {/* Right Side: Social links */}
        <div className="flex items-center gap-4 order-3">
          <a
            href="https://github.com/Dakshitj14"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950 border border-zinc-900 dark:border-zinc-800 text-zinc-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-300 shadow-sm"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/meetdakshit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950 border border-zinc-900 dark:border-zinc-800 text-zinc-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-300 shadow-sm"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/dakshit_j14/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950 border border-zinc-900 dark:border-zinc-800 text-zinc-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-300 shadow-sm"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="mailto:jhadakshit2004@gmail.com"
            aria-label="Send Email"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950 border border-zinc-900 dark:border-zinc-800 text-zinc-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-300 shadow-sm"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

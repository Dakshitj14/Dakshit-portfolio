"use client";

import { motion } from "framer-motion";
import { Briefcase, CalendarDays } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-24 px-6 max-w-4xl mx-auto border-t border-zinc-900"
    >
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-outfit text-3xl font-bold md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400"
        >
          Professional Experience
        </motion.h2>
      </div>

      <div className="relative border-l border-zinc-800 ml-4 md:ml-8 pl-8 md:pl-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Timeline Icon */}
          <span className="absolute -left-[53px] md:-left-[69px] top-0 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 border border-indigo-500/30 text-indigo-400 shadow-md">
            <Briefcase className="h-5 w-5" />
          </span>

          {/* Experience Card */}
          <div className="glass glass-hover p-8 rounded-2xl border border-zinc-850 shadow-xl transition-all duration-300 text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-900 pb-4 mb-6">
              <div>
                <h3 className="text-xl font-bold font-outfit text-white">
                  Software Development Intern
                </h3>

                <p className="text-indigo-400 font-medium text-base mt-1">
                  Ashna AI
                </p>
              </div>

              <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs px-3 py-1 rounded-full font-bold">
                <CalendarDays className="h-3.5 w-3.5" />
                Jul 2025 – Sep 2025
              </div>
            </div>

            <div className="space-y-5">
              <p className="leading-relaxed text-zinc-400 text-sm">
                Developed responsive UI components using React, TailwindCSS,
                and Framer Motion, enhancing interactivity and improving user
                experience.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Tailwind CSS",
                  "Framer Motion",
                  "API Integration",
                  "UI/UX",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
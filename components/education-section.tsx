"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, BookOpen } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 max-w-4xl mx-auto border-t border-zinc-900">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-outfit text-3xl font-bold md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400"
        >
          Education
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
          {/* Timeline Dot Icon */}
          <span className="absolute -left-[53px] md:-left-[69px] top-0 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 border border-indigo-500/30 text-indigo-400 shadow-md">
            <GraduationCap className="h-5 w-5" />
          </span>

          {/* Content Card */}
          <div className="glass glass-hover p-8 rounded-2xl border border-zinc-850 shadow-xl transition-all duration-300 text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-900 pb-4 mb-6">
              <div>
                <h3 className="text-xl font-bold font-outfit text-white">Bachelor of Technology</h3>
                <p className="text-indigo-400 font-medium text-base mt-1">Computer Science Engineering</p>
              </div>
              <div className="inline-flex items-center gap-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs px-3 py-1 rounded-full font-bold">
                Final Year
              </div>
            </div>

            <div className="space-y-4 text-zinc-400 text-base">
              <div className="flex items-center gap-2.5">
                <BookOpen className="h-4.5 w-4.5 text-zinc-500 shrink-0" />
                <span className="text-zinc-200 font-medium">Noida Institute of Engineering and Technology</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-500 text-sm">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Greater Noida, Uttar Pradesh, India</span>
              </div>
              <p className="leading-relaxed mt-2 text-zinc-400 text-sm">
                Focusing on core computing frameworks, data structures, analysis of algorithms, database systems, artificial intelligence, and machine learning.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

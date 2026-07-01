"use client";

import { HoverEffect } from "@/components/magic/card-hover-effect";

const experiences = [
  {
    title: "Software Development Intern",
    description: "Ashna AI • Jul 2025 - Sep 2025",
    children: (
      <div className="mt-4 flex flex-col gap-4 font-sans">
        <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
          Developed responsive UI components using React, TailwindCSS, and Framer Motion, enhancing interactivity and improving user experience.
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {["React", "Tailwind CSS", "Framer Motion", "API Integration", "UI/UX"].map((tag) => (
            <span key={tag} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/10">
              {tag}
            </span>
          ))}
        </div>
      </div>
    )
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto border-t border-zinc-200/50 dark:border-zinc-900">
      <div className="text-center mb-10">
        <h2 className="font-outfit text-3xl font-bold md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-500 dark:from-white dark:to-zinc-400">
          Professional Experience
        </h2>
      </div>

      <div className="max-w-md mx-auto">
        <HoverEffect items={experiences} />
      </div>
    </section>
  );
}

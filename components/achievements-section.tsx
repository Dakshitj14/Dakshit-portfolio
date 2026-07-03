"use client";

import { HoverEffect } from "@/components/magic/card-hover-effect";

const achievements = [
  {
    title: "HackIndia 2025 Finalist",
    description: "Qualified for the final round of HackIndia 2025 (national-level hackathon), competing with innovators from across India.",
    children: (
      <div className="mt-3 text-[11px] font-bold uppercase tracking-wider text-amber-500 bg-amber-500/5 border border-amber-500/10 px-2.5 py-1 rounded-full inline-block">
        🏆 National Finalist
      </div>
    )
  },
  {
    title: "RIFT 2026 Zonal Qualifier",
    description: "Qualified for the Zonal Round in a Pan-India hackathon (RIFT 2026 X PWIOI) among top developers from the region.",
    children: (
      <div className="mt-3 text-[11px] font-bold uppercase tracking-wider text-indigo-500 bg-indigo-500/5 border border-indigo-500/10 px-2.5 py-1 rounded-full inline-block">
        🏆 Zonal Qualifier
      </div>
    )
  },
  {
    title: "Web Weave 2024 Runner-Up",
    description: "Secured 2nd place in the college-wide hackathon (Web Weave 2024 X NIET) among all participating engineering teams.",
    children: (
      <div className="mt-3 text-[11px] font-bold uppercase tracking-wider text-rose-500 bg-rose-500/5 border border-rose-500/10 px-2.5 py-1 rounded-full inline-block">
        🏆 2nd Place
      </div>
    )
  },
  {
    title: "OSS.GG Leaderboard Winner",
    description: "Ranked as winner on the OSS.GG open-source gamification leaderboard by successfully resolving high-difficulty GitHub issues.",
    children: (
      <div className="mt-3 text-[11px] font-bold uppercase tracking-wider text-emerald-500 bg-emerald-500/5 border border-emerald-500/10 px-2.5 py-1 rounded-full inline-block">
        🏆 Leaderboard Winner
      </div>
    )
  }
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-16 md:py-24 px-6 max-w-6xl mx-auto border-t border-zinc-200/50 dark:border-zinc-900">
      <div className="text-center mb-10">
        <h2 className="font-outfit text-3xl font-bold md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-500 dark:from-white dark:to-zinc-400">
          Key Achievements
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 text-base mt-2 max-w-xl mx-auto font-sans">
          Recognition earned at national developer contests, open source challenges, and hackathons.
        </p>
      </div>

      <HoverEffect items={achievements} />
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "React", slug: "react", tint: "rgba(97, 218, 251, 0.15)" },
  { name: "Next.js", slug: "nextdotjs", tint: "rgba(255, 255, 255, 0.15)" },
  { name: "TypeScript", slug: "typescript", tint: "rgba(49, 120, 198, 0.15)" },
  { name: "JavaScript", slug: "javascript", tint: "rgba(247, 223, 30, 0.15)" },
  { name: "Node.js", slug: "nodedotjs", tint: "rgba(95, 160, 78, 0.15)" },
  { name: "Express", slug: "express", tint: "rgba(255, 255, 255, 0.1)" },
  { name: "MongoDB", slug: "mongodb", tint: "rgba(71, 162, 72, 0.15)" },
  { name: "Tailwind CSS", slug: "tailwindcss", tint: "rgba(6, 182, 212, 0.15)" },
  { name: "Docker", slug: "docker", tint: "rgba(36, 150, 237, 0.15)" },
  { name: "Git", slug: "git", tint: "rgba(240, 80, 50, 0.15)" },
  { name: "GitHub", slug: "github", tint: "rgba(255, 255, 255, 0.15)" },
  { name: "Python", slug: "python", tint: "rgba(55, 118, 171, 0.15)" },
  { name: "OpenAI", slug: "openai", tint: "rgba(65, 41, 145, 0.15)" },
  { name: "LangChain", slug: "langchain", tint: "rgba(28, 60, 58, 0.15)" },
  { name: "Framer Motion", slug: "framer", tint: "rgba(0, 85, 255, 0.15)" },
  { name: "Vercel", slug: "vercel", tint: "rgba(255, 255, 255, 0.15)" },
];

export default function TechStackSection() {
  return (
    <section id="skills" className="py-24 border-t border-zinc-200/50 dark:border-zinc-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-outfit text-3xl font-bold md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-500 dark:from-white dark:to-zinc-400"
        >
          Tech Stack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-zinc-500 dark:text-zinc-400 text-base mt-2 max-w-xl mx-auto font-sans"
        >
          A selection of tools, languages, and frameworks I use to bring ideas to life.
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6, scale: 1.05 }}
              className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-50/5 dark:bg-zinc-900/5 border border-zinc-200/50 dark:border-zinc-850 hover:border-indigo-500/30 dark:hover:border-indigo-500/20 backdrop-blur-md shadow-sm transition-all duration-300 h-28 cursor-pointer overflow-hidden"
            >
              {/* Radial background tint overlay on hover */}
              <div
                style={{
                  background: `radial-gradient(circle, ${tech.tint} 0%, transparent 70%)`,
                }}
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              />

              <div className="flex flex-col items-center justify-center gap-3">
                {/* Brand Logo from Simple Icons */}
                <img
                  src={`https://cdn.simpleicons.org/${tech.slug}/white`}
                  alt={`${tech.name} logo`}
                  className="h-8 w-8 object-contain dark:invert-0 invert opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to fallback text if loading fails
                    e.currentTarget.style.display = "none";
                  }}
                />

                {/* Text Label: subtle opacity shift */}
                <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 font-sans tracking-wide transition-all duration-300 text-center">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

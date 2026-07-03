"use client";

import { motion } from "framer-motion";
import { MagicCard } from "@/components/magic/magic-card";
import { ShimmerButton } from "@/components/magic/shimmer-button";
import { Marquee } from "@/components/magic/marquee";
import { StickyScroll } from "@/components/magic/sticky-scroll-reveal";
import { Github } from "lucide-react";

const projects = [
  {
    name: "Bag-It-Up",
    description: "A smart shopping cart and real-time inventory management platform designed to optimize retail checkouts.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Dakshitj14/bag-it-up",
    gradient: "from-indigo-600/30 to-purple-600/30",
  },
  {
    name: "Nodebase",
    description: "A cloud-based database visualizer and backend administration panel for high-frequency workflows.",
    tech: ["TypeScript", "React", "Next.js", "Supabase", "Tailwind CSS"],
    github: "https://github.com/Dakshitj14/nodebase",
    gradient: "from-blue-600/30 to-indigo-600/30",
  },
  {
    name: "WrapChat",
    description: "An encrypted, real-time messaging application featuring responsive chat channels and group rooms.",
    tech: ["Next.js", "Socket.io", "Node.js", "Express", "Tailwind CSS"],
    github: "https://github.com/Dakshitj14/wrapchat",
    gradient: "from-purple-600/30 to-rose-600/30",
  },
  {
    name: "JuriSRag",
    description: "AI legal intelligence platform employing RAG (Retrieval-Augmented Generation) to summarize legal briefs.",
    tech: ["Python", "LangChain", "OpenAI", "Ollama", "Vector DB"],
    github: "https://github.com/Dakshitj14/jurisrag",
    gradient: "from-emerald-600/30 to-blue-600/30",
  },
  {
    name: "Codestash",
    description: "A developer productivity application built to organize, search, and securely share code snippets.",
    tech: ["Next.js", "Clerk Auth", "Firebase Store", "Tailwind CSS"],
    github: "https://github.com/Dakshitj14/codestash",
    gradient: "from-rose-600/30 to-orange-600/30",
  },
  {
    name: "Weather App",
    description: "A sleek, location-aware weather forecasting dashboard presenting charts and interactive rain radar.",
    tech: ["React", "JavaScript", "OpenWeather API", "Tailwind CSS"],
    github: "https://github.com/Dakshitj14/weather-app",
    gradient: "from-sky-600/30 to-indigo-600/30",
  },
];

const getSlug = (t: string) => {
  switch (t.toLowerCase()) {
    case "react": return "react";
    case "node.js": return "nodedotjs";
    case "express": return "express";
    case "mongodb": return "mongodb";
    case "tailwind css": return "tailwindcss";
    case "typescript": return "typescript";
    case "next.js": return "nextdotjs";
    case "supabase": return "supabase";
    case "socket.io": return "socketdotio";
    case "python": return "python";
    case "langchain": return "langchain";
    case "openai": return "openai";
    case "ollama": return "ollama";
    case "vector db": return "pinecone";
    case "clerk auth": return "clerk";
    case "firebase store": return "firebase";
    case "javascript": return "javascript";
    default: return "github";
  }
};

export default function ProjectsSection() {
  const stickyContent = projects.map((proj) => ({
    title: proj.name,
    description: (
      <div className="flex flex-col text-left gap-4 font-sans">
        <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{proj.description}</p>
        
        {/* Tech Marquee */}
        <Marquee pauseOnHover className="[--duration:20s] [--gap:0.75rem] py-1.5 border-y border-zinc-200/50 dark:border-zinc-800/30 w-full overflow-hidden">
          {proj.tech.map((t, tIdx) => (
            <div
              key={tIdx}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800"
            >
              <img
                src={`https://cdn.simpleicons.org/${getSlug(t)}/white`}
                alt=""
                className="h-2.5 w-2.5 object-contain dark:invert-0 invert"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
              <span>{t}</span>
            </div>
          ))}
        </Marquee>
        
        {/* Source Code Button */}
        <a href={proj.github} target="_blank" rel="noopener noreferrer" className="w-full mt-2">
          <ShimmerButton
            shimmerColor="#ffffff"
            background="#18181b"
            className="w-full text-xs font-semibold py-2 px-3 border border-zinc-200 dark:border-zinc-800"
          >
            <span className="flex items-center justify-center gap-1.5 text-zinc-300">
              <Github className="h-3.5 w-3.5" /> Source Code
            </span>
          </ShimmerButton>
        </a>
      </div>
    ),
    content: (
      <div className={`relative h-full w-full bg-gradient-to-br ${proj.gradient} flex items-center justify-center`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black/90" />
        <span className="relative font-outfit text-2xl font-bold tracking-tight uppercase text-zinc-100 filter drop-shadow-md">
          {proj.name}
        </span>
      </div>
    )
  }));

  return (
    <section id="projects" className="py-16 md:py-24 px-6 max-w-6xl mx-auto border-t border-zinc-200/50 dark:border-zinc-900">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-outfit text-3xl font-bold md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-500 dark:from-white dark:to-zinc-400"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-zinc-500 dark:text-zinc-400 text-base mt-2 max-w-xl mx-auto font-sans"
        >
          Selected projects and applications built using modern frameworks.
        </motion.p>
      </div>

      {/* Desktop Grid Layout */}
      <div className="hidden lg:grid gap-8 lg:grid-cols-3">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex h-full"
          >
            <MagicCard
              className="flex flex-col h-full rounded-2xl border-zinc-200/50 dark:border-zinc-900/50 bg-zinc-50/5 dark:bg-zinc-950/40 cursor-pointer overflow-hidden shadow-2xl transition-all duration-300"
              gradientColor="rgba(99, 102, 241, 0.05)"
              gradientFrom="#4f46e5"
              gradientTo="#818cf8"
            >
              {/* Graphic Card Header */}
              <div className={`relative h-44 w-full bg-gradient-to-br ${proj.gradient} flex items-center justify-center border-b border-zinc-200/50 dark:border-zinc-900/50`}>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black/90" />
                <span className="relative font-outfit text-2xl font-bold tracking-tight uppercase text-zinc-100/90 filter drop-shadow-md">
                  {proj.name}
                </span>
                <div className="absolute bottom-2 right-3 font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                  Secure Build
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-6 text-left">
                <h3 className="font-outfit text-xl font-bold text-zinc-800 dark:text-white mb-2">{proj.name}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-4 flex-1 font-sans">{proj.description}</p>

                {/* Tech Marquee */}
                <Marquee pauseOnHover className="[--duration:20s] [--gap:0.75rem] py-1.5 mb-6 border-y border-zinc-200/50 dark:border-zinc-800/30 overflow-hidden">
                  {proj.tech.map((t, tIdx) => (
                    <div
                      key={tIdx}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800"
                    >
                      <img
                        src={`https://cdn.simpleicons.org/${getSlug(t)}/white`}
                        alt=""
                        className="h-3 w-3 object-contain dark:invert-0 invert"
                        onError={(e) => { e.currentTarget.style.display = "none"; }}
                      />
                      <span>{t}</span>
                    </div>
                  ))}
                </Marquee>

                {/* Source Code Button */}
                <div className="flex items-center">
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="w-full">
                    <ShimmerButton
                      shimmerColor="#ffffff"
                      background="#18181b"
                      className="w-full text-xs font-semibold py-2 px-3 border border-zinc-200 dark:border-zinc-800"
                    >
                      <span className="flex items-center justify-center gap-1.5 text-zinc-300">
                        <Github className="h-3.5 w-3.5" /> Source Code
                      </span>
                    </ShimmerButton>
                  </a>
                </div>
              </div>
            </MagicCard>
          </motion.div>
        ))}
      </div>

      {/* Mobile Sticky Scroll Layout */}
      <div className="block lg:hidden w-full">
        <StickyScroll content={stickyContent} />
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import { StickyScroll } from "./magic/sticky-scroll-reveal";

const technologies = [
  {
    title: "React",
    slug: "react",
    color: "#61dafb",
    link: "https://react.dev",
    thumbnail: "",
  },
  {
    title: "Next.js",
    slug: "nextdotjs",
    color: "#0070f3",
    link: "https://nextjs.org",
    thumbnail: "",
  },
  {
    title: "TypeScript",
    slug: "typescript",
    color: "#3178c6",
    link: "https://www.typescriptlang.org",
    thumbnail: "",
  },
  {
    title: "JavaScript",
    slug: "javascript",
    color: "#f7df1e",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    thumbnail: "",
  },
  {
    title: "Node.js",
    slug: "nodedotjs",
    color: "#339933",
    link: "https://nodejs.org",
    thumbnail: "",
  },
  {
    title: "Express",
    slug: "express",
    color: "#7e7e7e",
    link: "https://expressjs.com",
    thumbnail: "",
  },
  {
    title: "MongoDB",
    slug: "mongodb",
    color: "#47a248",
    link: "https://www.mongodb.com",
    thumbnail: "",
  },
  {
    title: "Tailwind CSS",
    slug: "tailwindcss",
    color: "#06b6d4",
    link: "https://tailwindcss.com",
    thumbnail: "",
  },
  {
    title: "Docker",
    slug: "docker",
    color: "#2496ed",
    link: "https://www.docker.com",
    thumbnail: "",
  },
  {
    title: "Git",
    slug: "git",
    color: "#f05032",
    link: "https://git-scm.com",
    thumbnail: "",
  },
  {
    title: "GitHub",
    slug: "github",
    color: "#6e5494",
    link: "https://github.com",
    thumbnail: "",
  },
  {
    title: "Python",
    slug: "python",
    color: "#3776ab",
    link: "https://www.python.org",
    thumbnail: "",
  },
  {
    title: "OpenAI",
    slug: "openai",
    color: "#10a37f",
    link: "https://openai.com",
    thumbnail: "",
  },
  {
    title: "LangChain",
    slug: "langchain",
    color: "#00a3a0",
    link: "https://www.langchain.com",
    thumbnail: "",
  },
  {
    title: "Framer Motion",
    slug: "framer",
    color: "#0055ff",
    link: "https://motion.dev",
    thumbnail: "",
  },
  {
    title: "Vercel",
    slug: "vercel",
    color: "#ffffff",
    link: "https://vercel.com",
    thumbnail: "",
  },
];

export default function TechStackSection() {
  const techCategories = [
    {
      title: "Frontend Development",
      description: (
        <div className="space-y-4 text-left">
          <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-sans">
            Crafting rich, interactive, and responsive user interfaces with type-safe modern frameworks.
          </p>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {[
              { name: "React", slug: "react" },
              { name: "Next.js", slug: "nextdotjs" },
              { name: "TypeScript", slug: "typescript" },
              { name: "JavaScript", slug: "javascript" },
              { name: "Tailwind CSS", slug: "tailwindcss" },
              { name: "Framer Motion", slug: "framer" }
            ].map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-2 rounded-xl bg-zinc-50/5 dark:bg-zinc-950/20 border border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-md"
              >
                <img
                  src={`https://cdn.simpleicons.org/${tech.slug}/white`}
                  className="w-4 h-4 object-contain dark:invert-0 invert opacity-70"
                  alt=""
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
                <span className="text-[10px] font-semibold text-zinc-700 dark:text-zinc-300 font-sans">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      ),
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 backdrop-blur-xl">
          <div className="relative w-16 h-16 rounded-2xl bg-indigo-500/15 flex items-center justify-center border border-indigo-500/20 shadow-inner">
            <img src="https://cdn.simpleicons.org/react/white" className="w-10 h-10 object-contain dark:invert-0 invert" alt="" />
          </div>
          <span className="font-outfit font-bold text-zinc-800 dark:text-zinc-100 text-lg mt-3">Frontend</span>
          <span className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-1 font-sans">React, Next.js, Framer Motion</span>
        </div>
      )
    },
    {
      title: "Backend & Database",
      description: (
        <div className="space-y-4 text-left">
          <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-sans">
            Architecting robust backend services, structured database schemas, and clean RESTful/WebSocket APIs.
          </p>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {[
              { name: "Node.js", slug: "nodedotjs" },
              { name: "Express", slug: "express" },
              { name: "MongoDB", slug: "mongodb" }
            ].map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-2 rounded-xl bg-zinc-50/5 dark:bg-zinc-950/20 border border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-md"
              >
                <img
                  src={`https://cdn.simpleicons.org/${tech.slug}/white`}
                  className="w-4 h-4 object-contain dark:invert-0 invert opacity-70"
                  alt=""
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
                <span className="text-[10px] font-semibold text-zinc-700 dark:text-zinc-300 font-sans">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      ),
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-emerald-500/10 to-green-500/10 backdrop-blur-xl">
          <div className="relative w-16 h-16 rounded-2xl bg-emerald-500/15 flex items-center justify-center border border-emerald-500/20 shadow-inner">
            <img src="https://cdn.simpleicons.org/mongodb/white" className="w-10 h-10 object-contain dark:invert-0 invert" alt="" />
          </div>
          <span className="font-outfit font-bold text-zinc-800 dark:text-zinc-100 text-lg mt-3">Backend</span>
          <span className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-1 font-sans">Node.js, Express, MongoDB</span>
        </div>
      )
    },
    {
      title: "AI & Machine Learning",
      description: (
        <div className="space-y-4 text-left">
          <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-sans">
            Integrating intelligence using Retrieval-Augmented Generation (RAG), LangChain orchestration, and large language models.
          </p>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {[
              { name: "Python", slug: "python" },
              { name: "OpenAI", slug: "openai" },
              { name: "LangChain", slug: "langchain" }
            ].map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-2 rounded-xl bg-zinc-50/5 dark:bg-zinc-950/20 border border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-md"
              >
                <img
                  src={`https://cdn.simpleicons.org/${tech.slug}/white`}
                  className="w-4 h-4 object-contain dark:invert-0 invert opacity-70"
                  alt=""
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
                <span className="text-[10px] font-semibold text-zinc-700 dark:text-zinc-300 font-sans">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      ),
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 backdrop-blur-xl">
          <div className="relative w-16 h-16 rounded-2xl bg-purple-500/15 flex items-center justify-center border border-purple-500/20 shadow-inner">
            <img src="https://cdn.simpleicons.org/openai/white" className="w-10 h-10 object-contain dark:invert-0 invert" alt="" />
          </div>
          <span className="font-outfit font-bold text-zinc-800 dark:text-zinc-100 text-lg mt-3">AI & ML</span>
          <span className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-1 font-sans">Python, OpenAI, LangChain</span>
        </div>
      )
    },
    {
      title: "DevOps & Infrastructure",
      description: (
        <div className="space-y-4 text-left">
          <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-sans">
            Managing continuous integration, containerization, cloud hosting, and continuous deployment environments.
          </p>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {[
              { name: "Docker", slug: "docker" },
              { name: "Git", slug: "git" },
              { name: "GitHub", slug: "github" },
              { name: "Vercel", slug: "vercel" }
            ].map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-2 rounded-xl bg-zinc-50/5 dark:bg-zinc-950/20 border border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-md"
              >
                <img
                  src={`https://cdn.simpleicons.org/${tech.slug}/white`}
                  className="w-4 h-4 object-contain dark:invert-0 invert opacity-70"
                  alt=""
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
                <span className="text-[10px] font-semibold text-zinc-700 dark:text-zinc-300 font-sans">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      ),
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-rose-500/10 to-orange-500/10 backdrop-blur-xl">
          <div className="relative w-16 h-16 rounded-2xl bg-rose-500/15 flex items-center justify-center border border-rose-500/20 shadow-inner">
            <img src="https://cdn.simpleicons.org/docker/white" className="w-10 h-10 object-contain dark:invert-0 invert" alt="" />
          </div>
          <span className="font-outfit font-bold text-zinc-800 dark:text-zinc-100 text-lg mt-3">DevOps</span>
          <span className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-1 font-sans">Docker, Git, Vercel</span>
        </div>
      )
    }
  ];

  return (
    <section
      id="skills"
      className="relative py-12 lg:py-16 border-t border-zinc-200/50 dark:border-zinc-900 overflow-hidden bg-transparent"
    >
      {/* Very subtle blurred gradient glow in the background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full bg-indigo-500/5 dark:bg-indigo-500/5 blur-[80px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] rounded-full bg-purple-500/5 dark:bg-purple-500/3 blur-[80px] sm:blur-[120px] pointer-events-none" />

      {/* Desktop Layout (HeroParallax) */}
      <div className="hidden lg:block">
        <HeroParallax products={technologies} />
      </div>

      {/* Mobile/Tablet Layout (StickyScroll) */}
      <div className="block lg:hidden max-w-xl mx-auto px-4">
        <div className="text-center mb-10 select-none">
          <h2 className="font-outfit text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-500 dark:from-white dark:to-zinc-400">
            Tech Stack
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm mt-2 font-sans">
            The technologies powering my journey as a full-stack developer, from concept to deployment.
          </p>
        </div>
        <StickyScroll content={techCategories} />
      </div>
    </section>
  );
}

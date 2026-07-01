"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BootScreen from "@/components/boot-screen";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import TechStackSection from "@/components/tech-stack-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import AchievementsSection from "@/components/achievements-section";
import EducationSection from "@/components/education-section";
import ContactSection from "@/components/contact-section";
import FooterSection from "@/components/footer-section";
import { FlickeringGrid } from "@/components/magic/flickering-grid";
import { SpotlightNew } from "@/components/magic/spotlight-new";
import { NoiseTexture } from "@/components/magic/noise-texture";
import { Dock, DockIcon } from "@/components/magic/dock";
import { Home, User, Cpu, Briefcase, Code, Trophy, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Page() {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {!bootComplete && (
          <BootScreen key="boot" onComplete={() => setBootComplete(true)} />
        )}
      </AnimatePresence>

      {bootComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative min-h-screen w-full"
        >
          {/* Immersive Blended Background Effects */}
          <div className="fixed inset-0 -z-50 pointer-events-none select-none overflow-hidden bg-white dark:bg-black transition-colors duration-300">
            <FlickeringGrid 
              className="absolute inset-0 size-full opacity-40" 
              squareSize={4} 
              gridGap={6} 
              color="#4f46e5" 
              maxOpacity={0.06} 
              flickerChance={0.05} 
            />
            <SpotlightNew />
            <NoiseTexture 
              noiseOpacity={0.03} 
              frequency={0.5} 
              slope={0.12} 
            />
            
            {/* Ambient gradients */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
          </div>

          {/* Floating Bottom Navigation Dock */}
          <div className="fixed bottom-6 left-0 right-0 z-40 flex justify-center px-4">
            <Dock className="border-zinc-200/50 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/70 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_-10px_30px_rgba(0,0,0,0.5)] backdrop-blur-lg rounded-2xl p-2 border">
              <DockIcon>
                <a
                  href="#home"
                  title="Home"
                  className="flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors h-full w-full"
                >
                  <Home className="h-5 w-5" />
                </a>
              </DockIcon>
              <DockIcon>
                <a
                  href="#about"
                  title="About Me"
                  className="flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors h-full w-full"
                >
                  <User className="h-5 w-5" />
                </a>
              </DockIcon>
              <DockIcon>
                <a
                  href="#skills"
                  title="Skills"
                  className="flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors h-full w-full"
                >
                  <Cpu className="h-5 w-5" />
                </a>
              </DockIcon>
              <DockIcon>
                <a
                  href="#experience"
                  title="Experience"
                  className="flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors h-full w-full"
                >
                  <Briefcase className="h-5 w-5" />
                </a>
              </DockIcon>
              <DockIcon>
                <a
                  href="#projects"
                  title="Projects"
                  className="flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors h-full w-full"
                >
                  <Code className="h-5 w-5" />
                </a>
              </DockIcon>
              <DockIcon>
                <a
                  href="#achievements"
                  title="Achievements"
                  className="flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors h-full w-full"
                >
                  <Trophy className="h-5 w-5" />
                </a>
              </DockIcon>
              <DockIcon>
                <a
                  href="#contact"
                  title="Contact"
                  className="flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors h-full w-full"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </DockIcon>
              <DockIcon>
                <ThemeToggle />
              </DockIcon>
            </Dock>
          </div>

          {/* Homepage Content Sections */}
          <main className="pb-32">
            <HeroSection />
            <AboutSection />
            <TechStackSection />
            <ExperienceSection />
            <ProjectsSection />
            <AchievementsSection />
            <EducationSection />
            <ContactSection />
            <FooterSection />
          </main>
        </motion.div>
      )}
    </>
  );
}

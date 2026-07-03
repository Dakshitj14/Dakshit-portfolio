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
import { LightRays } from "@/components/magic/light-rays";
import { SpotlightNew } from "@/components/magic/spotlight-new";
import { NoiseTexture } from "@/components/magic/noise-texture";
import { Dock, DockIcon } from "@/components/magic/dock";
import { Home, User, Cpu, Briefcase, Code, Trophy, Mail, ArrowUp, Menu, X, Sun, Moon } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function Page() {
  const [bootComplete, setBootComplete] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#home", icon: Home },
    { label: "About", href: "#about", icon: User },
    { label: "Skills", href: "#skills", icon: Cpu },
    { label: "Experience", href: "#experience", icon: Briefcase },
    { label: "Projects", href: "#projects", icon: Code },
    { label: "Achievements", href: "#achievements", icon: Trophy },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

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
            <LightRays 
              className="absolute inset-0 size-full opacity-[0.12] dark:opacity-[0.18]" 
              color="rgba(99, 102, 241, 0.25)" 
              count={8} 
              speed={12} 
              blur={40} 
            />
            <NoiseTexture 
              noiseOpacity={0.03} 
              frequency={0.5} 
              slope={0.12} 
            />
            
            {/* Ambient gradients */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
          </div>

          {/* Scroll to Top Button (Mobile Only) */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="fixed bottom-24 right-6 z-40 lg:hidden flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200/50 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/70 shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-lg text-zinc-600 dark:text-zinc-300 cursor-pointer pointer-events-auto"
                aria-label="Scroll to top"
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp className="h-5 w-5" />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Floating Bottom Navigation Dock (Desktop Only) */}
          <div className="fixed bottom-6 left-0 right-0 z-40 hidden lg:flex justify-center px-4">
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

          {/* Floating Bottom Hamburger Menu (Mobile Only) */}
          <div className="fixed bottom-6 left-0 right-0 z-40 flex flex-col items-center px-4 lg:hidden pointer-events-none">
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 30, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="mb-3 w-full max-w-[280px] border border-zinc-200/50 dark:border-zinc-850 bg-white/80 dark:bg-zinc-950/80 shadow-2xl backdrop-blur-xl rounded-2xl p-3 flex flex-col gap-3 pointer-events-auto"
                >
                  <div className="grid grid-cols-2 gap-2.5">
                    {menuItems.map((item, idx) => {
                      const IconComponent = item.icon;
                      return (
                        <a
                          key={idx}
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="flex items-center gap-3 p-2.5 rounded-xl border border-zinc-200/20 dark:border-zinc-800/40 bg-zinc-100/40 dark:bg-zinc-950/40 text-left font-sans text-xs font-semibold text-zinc-700 dark:text-zinc-300 backdrop-blur-md cursor-pointer transition-all duration-300 hover:bg-indigo-500/10 hover:border-indigo-500/30"
                        >
                          <IconComponent className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                          <span>{item.label}</span>
                        </a>
                      );
                    })}
                    {/* Theme Toggle Button */}
                    <button
                      onClick={() => {
                        setTheme(isDark ? "light" : "dark");
                        setMenuOpen(false);
                      }}
                      className="flex items-center gap-3 p-2.5 rounded-xl border border-zinc-200/20 dark:border-zinc-800/40 bg-zinc-100/40 dark:bg-zinc-950/40 text-left font-sans text-xs font-semibold text-zinc-700 dark:text-zinc-300 backdrop-blur-md cursor-pointer transition-all duration-300 hover:bg-indigo-500/10 hover:border-indigo-500/30"
                    >
                      {isDark ? (
                        <>
                          <Sun className="h-4 w-4 text-amber-500 fill-amber-500/10" />
                          <span>Light</span>
                        </>
                      ) : (
                        <>
                          <Moon className="h-4 w-4 text-indigo-500 fill-indigo-500/10" />
                          <span>Dark</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Hamburger Button */}
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-zinc-200/50 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/70 shadow-lg backdrop-blur-lg text-zinc-600 dark:text-zinc-300 z-50 cursor-pointer pointer-events-auto"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: menuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </motion.button>
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

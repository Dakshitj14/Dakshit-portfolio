// "use client";

// import { motion } from "framer-motion";
// import { PixelImage } from "@/components/magic/pixel-image";
// import { CheckCircle2 } from "lucide-react";

// const points = [
//   "Final Year Computer Science Engineering Student",
//   "Passionate Full Stack Developer",
//   "AI Enthusiast exploring LLMs, RAG, and Vector databases",
//   "Love building scalable, high-performance web products",
//   "Active Open Source Learner and contributor",
//   "Always exploring and adapting to new technologies",
//   "Interested in solving real-world problems through software",
// ];

// export default function AboutSection() {
//   return (
//     <section id="about" className="py-24 px-6 max-w-6xl mx-auto border-t border-zinc-900">
//       <div className="flex flex-col gap-12 lg:flex-row items-center justify-between">
//         {/* Left Side: Photo */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="flex justify-center items-center flex-1"
//         >
//           <div className="rounded-[2.5rem] overflow-hidden p-2 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-blue-500/20 border border-zinc-800/50 shadow-2xl">
//             <PixelImage
//               src="/avatar.jpg"
//               width={350}
//               height={350}
//             />
//           </div>
//         </motion.div>

//         {/* Right Side: Copy & List */}
//         <div className="flex-[1.2] flex flex-col gap-6 text-left">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="font-outfit text-3xl font-bold md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
//               About Me
//             </h2>
//             <p className="text-zinc-400 text-lg mt-4 leading-relaxed">
//               I am a designer-developer hybrid who loves building high-quality interfaces and backing them with powerful AI systems. My work focuses on clean code, delightful animations, and strict type safety.
//             </p>
//           </motion.div>

//           <div className="grid gap-4 mt-2">
//             {points.map((point, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: -10 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="flex items-start gap-3"
//               >
//                 <CheckCircle2 className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
//                 <span className="text-zinc-300 text-base font-sans">{point}</span>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { PixelImage } from "@/components/magic/pixel-image";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Final Year Computer Science Engineering Student",
  "Passionate Full Stack Developer",
  "AI Enthusiast exploring LLMs, RAG, and Vector databases",
  "Love building scalable, high-performance web products",
  "Active Open Source Learner and contributor",
  "Always exploring and adapting to new technologies",
  "Interested in solving real-world problems through software",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-6 max-w-6xl mx-auto border-t border-zinc-900"
    >
      <div className="flex flex-col gap-12 lg:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center flex-1"
        >
          <div className="rounded-[2.5rem] overflow-hidden p-2 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-blue-500/20 border border-zinc-800/50 shadow-2xl">
            <PixelImage
              src="/avatar.jpg"
              width={350}
              height={350}
              autoReveal
            />
          </div>
        </motion.div>

        <div className="flex-[1.2] flex flex-col gap-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-outfit text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              About Me
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-zinc-400">
              I am a designer-developer hybrid who loves building high-quality
              interfaces and backing them with powerful AI systems. My work
              focuses on clean code, delightful animations, and strict type
              safety.
            </p>
          </motion.div>

          <div className="grid gap-4 mt-2">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" />
                <span className="font-sans text-base text-zinc-300">
                  {point}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
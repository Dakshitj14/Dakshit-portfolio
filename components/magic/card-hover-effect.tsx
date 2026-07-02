// "use client";

// import { cn } from "@/lib/utils";
// import { AnimatePresence, motion } from "framer-motion";
// import { useState } from "react";

// export const HoverEffect = ({
//   items,
//   className,
// }: {
//   items: {
//     title: string;
//     description: string;
//     link?: string;
//     children?: React.ReactNode;
//   }[];
//   className?: string;
// }) => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//     <div
//       className={cn(
//         "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 gap-4",
//         className
//       )}
//     >
//       {items.map((item, idx) => (
//         <div
//           key={idx}
//           className="relative group block p-2 h-full w-full"
//           onMouseEnter={() => setHoveredIndex(idx)}
//           onMouseLeave={() => setHoveredIndex(null)}
//         >
//           <AnimatePresence>
//             {hoveredIndex === idx && (
//               <motion.span
//                 className="absolute inset-0 h-full w-full bg-indigo-500/[0.08] dark:bg-slate-800/[0.4] block rounded-2xl border border-indigo-500/10 dark:border-indigo-500/10 z-10"
//                 layoutId="hoverBackground"
//                 initial={{ opacity: 0 }}
//                 animate={{
//                   opacity: 1,
//                   transition: { duration: 0.15 },
//                 }}
//                 exit={{
//                   opacity: 0,
//                   transition: { duration: 0.15, delay: 0.1 },
//                 }}
//               />
//             )}
//           </AnimatePresence>
//           <Card>
//             <CardTitle>{item.title}</CardTitle>
//             <CardDescription>{item.description}</CardDescription>
//             {item.children}
//           </Card>
//         </div>
//       ))}
//     </div>
//   );
// };

// export const Card = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <div
//       className={cn(
//         "rounded-xl h-full w-full p-6 overflow-hidden bg-zinc-950/10 dark:bg-zinc-950/20 border border-zinc-200/50 dark:border-zinc-850 group-hover:border-indigo-500/30 relative z-20 transition-all duration-300 backdrop-blur-md",
//         className
//       )}
//     >
//       <div className="relative z-30 flex flex-col h-full justify-between">
//         <div>{children}</div>
//       </div>
//     </div>
//   );
// };

// export const CardTitle = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <h4 className={cn("text-zinc-800 dark:text-zinc-100 font-bold tracking-wide mt-2 font-outfit", className)}>
//       {children}
//     </h4>
//   );
// };

// export const CardDescription = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <p
//       className={cn(
//         "mt-4 text-zinc-500 dark:text-zinc-400 tracking-wide leading-relaxed text-sm font-sans",
//         className
//       )}
//     >
//       {children}
//     </p>
//   );
// };
"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface HoverItem {
  title: string;
  description: string;
  link?: string;
  children?: React.ReactNode;
}

export const HoverEffect = ({
  items,
  className,
}: {
  items: HoverItem[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        items.length === 1
          ? "flex justify-center py-8"
          : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 py-8",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className={cn(
            "relative group block h-full",
            items.length === 1 ? "w-full max-w-3xl" : "w-full"
          )}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/10 border border-indigo-500/20 z-10"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.2 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            {item.children}
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative z-20 h-full w-full min-h-[320px] rounded-2xl border border-zinc-200/50 dark:border-zinc-800 bg-zinc-950/10 dark:bg-zinc-950/20 backdrop-blur-md p-8 md:p-10 transition-all duration-300 group-hover:border-indigo-500/30 overflow-hidden",
        className
      )}
    >
      <div className="relative z-30 flex h-full flex-col justify-between">
        {children}
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "font-outfit text-2xl font-bold text-zinc-900 dark:text-zinc-100",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-3 text-sm md:text-base leading-7 text-zinc-500 dark:text-zinc-400",
        className
      )}
    >
      {children}
    </p>
  );
};
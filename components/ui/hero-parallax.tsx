"use client";
import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export interface Product {
  title: string;
  link: string;
  thumbnail: string;
  slug: string;
  color: string;
}

export const HeroParallax = ({
  products,
}: {
  products: Product[];
}) => {
  const firstRow = products.slice(0, 6);
  const secondRow = products.slice(6, 11);
  const thirdRow = products.slice(11, 16);
  
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 150, damping: 25, bounce: 0 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 500]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -500]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.4, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-260, 0]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[135vh] py-16 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-8 md:space-x-16 mb-8 md:mb-16">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-8 md:mb-16 space-x-8 md:space-x-16">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-8 md:space-x-16">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-6xl relative mx-auto px-6 mb-16 text-center select-none">
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
        The technologies powering my journey as a full-stack developer, from concept to deployment.
      </motion.p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: Product;
  translate: MotionValue<number>;
}) => {
  const [hasError, setHasError] = useState(false);

  // Microlink Screenshot API: dynamic preview URL
  const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(
    product.link
  )}&screenshot=true&embed=screenshot.url&viewport.width=800&viewport.height=600`;

  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -10,
      }}
      className="group/product h-48 w-[14rem] sm:h-56 sm:w-[18rem] md:h-72 md:w-[24rem] lg:h-80 lg:w-[28rem] relative flex-shrink-0 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 bg-zinc-100/5 dark:bg-zinc-900/5 backdrop-blur-md overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/5 cursor-pointer"
    >
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full"
      >
        <div className="flex flex-col h-full w-full">
          {/* Mock Browser Header Bar */}
          <div className="flex items-center justify-between px-3 py-1.5 md:px-4 md:py-2 border-b border-zinc-200/50 dark:border-zinc-800/50 bg-zinc-100/40 dark:bg-zinc-900/40">
            {/* Window control dots */}
            <div className="flex gap-1 md:gap-1.5">
              <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#FF5F56]" />
              <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#27C93F]" />
            </div>

            {/* URL Address Bar */}
            <div className="flex-1 max-w-[60%] mx-auto bg-zinc-200/30 dark:bg-zinc-800/30 rounded py-0.5 px-2 text-[8px] md:text-[10px] text-center text-zinc-500 dark:text-zinc-400 border border-zinc-200/20 dark:border-zinc-700/20 font-mono truncate">
              {product.link.replace("https://", "").replace("www.", "")}
            </div>

            {/* External URL Link Icon */}
            <div className="text-zinc-400 dark:text-zinc-500 group-hover/product:text-indigo-500 dark:group-hover/product:text-indigo-400 transition-colors duration-300">
              <ExternalLink size={10} className="md:w-3 md:h-3" />
            </div>
          </div>

          {/* Browser Content Workspace */}
          <div className="flex-1 relative w-full h-full overflow-hidden bg-zinc-900/20 dark:bg-zinc-950/20">
            {!hasError ? (
              <div className="w-full h-full relative overflow-hidden group-hover/product:scale-[1.03] transition-transform duration-500 ease-out">
                <Image
                  src={screenshotUrl}
                  alt={`${product.title} homepage preview`}
                  fill
                  sizes="(max-width: 640px) 224px, (max-width: 768px) 288px, 448px"
                  className="object-cover object-top"
                  onError={() => setHasError(true)}
                  loading="lazy"
                  unoptimized={true}
                />
              </div>
            ) : (
              /* Fallback Component - Glassmorphic brand preview cards */
              <div className="w-full h-full flex flex-col justify-between p-4 md:p-6 bg-gradient-to-br from-zinc-50/50 to-zinc-100/30 dark:from-zinc-900/50 dark:to-zinc-950/30 backdrop-blur-xl group-hover/product:scale-[1.03] transition-transform duration-500 ease-out">
                {/* Brand-color backdrop glow */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 md:w-36 md:h-36 rounded-full blur-2xl md:blur-3xl opacity-20 group-hover/product:opacity-40 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: product.color }}
                />

                {/* Logo and title */}
                <div className="flex items-center gap-2 md:gap-3 relative z-10">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-white/10 dark:bg-zinc-800/40 flex items-center justify-center border border-white/10 shadow-inner">
                    <img
                      src={`https://cdn.simpleicons.org/${product.slug}/white`}
                      className="w-5 h-5 md:w-6 md:h-6 object-contain dark:invert-0 invert opacity-70 group-hover/product:opacity-100 transition-opacity"
                      alt=""
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                  <span className="font-outfit font-semibold text-zinc-800 dark:text-zinc-100 text-xs md:text-base tracking-wide">
                    {product.title}
                  </span>
                </div>

                {/* Description */}
                <div className="relative z-10">
                  <h4 className="font-outfit text-zinc-700 dark:text-zinc-200 text-xs md:text-base font-bold leading-snug">
                    Explore {product.title}
                  </h4>
                  <p className="font-sans text-zinc-500 dark:text-zinc-400 text-[8px] md:text-xs mt-0.5 md:mt-1 max-w-[180px] leading-relaxed">
                    Click to view documentation and website.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </a>

      {/* Subtle brand colored hover glow border */}
      <div
        className="absolute inset-0 border border-transparent rounded-2xl group-hover/product:border-indigo-500/20 dark:group-hover/product:border-indigo-500/35 pointer-events-none transition-colors duration-300"
        style={{
          boxShadow: `inset 0 0 12px 2px ${product.color}10`,
        }}
      />
    </motion.div>
  );
};

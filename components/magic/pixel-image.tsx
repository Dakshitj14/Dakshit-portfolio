// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { cn } from "@/lib/utils";

// interface PixelImageProps {
//   src: string;
//   alt?: string;
//   className?: string;
//   width?: number;
//   height?: number;
// }

// export const PixelImage = ({
//   src,
//   alt = "Pixelated image",
//   className,
//   width = 384,
//   height = 384,
// }: PixelImageProps) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const imageRef = useRef<HTMLImageElement | null>(null);
//   const [isHovered, setIsHovered] = useState(false);
//   const pixelSizeRef = useRef(20); // start pixelated (large pixels)
//   const animationFrameIdRef = useRef<number | null>(null);

//   // Load and cache the image element
//   useEffect(() => {
//     const img = new Image();
//     img.src = src;
//     img.onload = () => {
//       imageRef.current = img;
//       drawCanvas();
//     };
//   }, [src]);

//   // Main Canvas render method
//   const drawCanvas = () => {
//     const canvas = canvasRef.current;
//     const img = imageRef.current;
//     if (!canvas || !img) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     // Handle high DPI Retina screens for crisp rendering
//     const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
//     canvas.width = width * dpr;
//     canvas.height = height * dpr;
//     ctx.scale(dpr, dpr);

//     const pSize = pixelSizeRef.current;

//     // Clear previous drawing
//     ctx.clearRect(0, 0, width, height);

//     if (pSize <= 1) {
//       // Draw fully clear image
//       ctx.drawImage(img, 0, 0, width, height);
//     } else {
//       // Render pixelated using pixelated image stretch trick
//       ctx.imageSmoothingEnabled = false;
//       const w = Math.ceil(width / pSize);
//       const h = Math.ceil(height / pSize);

//       // Create an offscreen temporary canvas to hold the downscaled image
//       const offscreen = document.createElement("canvas");
//       offscreen.width = w;
//       offscreen.height = h;
//       const offCtx = offscreen.getContext("2d");
//       if (offCtx) {
//         offCtx.drawImage(img, 0, 0, w, h);
//         // Draw the offscreen canvas onto the main canvas, scaling it back up
//         ctx.drawImage(offscreen, 0, 0, w, h, 0, 0, width, height);
//       }
//     }
//   };

//   // requestAnimationFrame animation loop to handle hover state changes
//   useEffect(() => {
//     const update = () => {
//       const target = isHovered ? 1 : 20;
//       const diff = target - pixelSizeRef.current;

//       if (Math.abs(diff) > 0.05) {
//         // Interpolate pixel size (lerp)
//         pixelSizeRef.current += diff * 0.12; // Adjust multiplier to speed up/slow down
//         drawCanvas();
//         animationFrameIdRef.current = requestAnimationFrame(update);
//       } else {
//         pixelSizeRef.current = target;
//         drawCanvas();
//       }
//     };

//     animationFrameIdRef.current = requestAnimationFrame(update);

//     return () => {
//       if (animationFrameIdRef.current) {
//         cancelAnimationFrame(animationFrameIdRef.current);
//       }
//     };
//   }, [isHovered]);

//   return (
//     <div
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       className={cn(
//         "relative overflow-hidden rounded-[2rem] border border-zinc-850 dark:border-zinc-850 shadow-2xl transition-all duration-300 hover:border-indigo-500/30 cursor-pointer select-none",
//         className
//       )}
//       style={{ width, height }}
//     >
//       <canvas
//         ref={canvasRef}
//         className="w-full h-full object-cover rounded-[2rem]"
//         style={{ width, height }}
//       />
//     </div>
//   );
// };
"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface PixelImageProps {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  autoReveal?: boolean;
}

export const PixelImage = ({
  src,
  alt = "Pixelated image",
  className,
  width = 384,
  height = 384,
  autoReveal = false,
}: PixelImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const [isHovered, setIsHovered] = useState(false);

  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.5,
  });

  const shouldReveal = autoReveal ? isInView : isHovered;

  const pixelSizeRef = useRef(20);
  const animationFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      imageRef.current = img;
      drawCanvas();
    };
  }, [src]);

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    const img = imageRef.current;

    if (!canvas || !img) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const dpr =
      typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    const pSize = pixelSizeRef.current;

    ctx.clearRect(0, 0, width, height);

    if (pSize <= 1) {
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(img, 0, 0, width, height);
      return;
    }

    ctx.imageSmoothingEnabled = false;

    const w = Math.ceil(width / pSize);
    const h = Math.ceil(height / pSize);

    const offscreen = document.createElement("canvas");
    offscreen.width = w;
    offscreen.height = h;

    const offCtx = offscreen.getContext("2d");

    if (!offCtx) return;

    offCtx.imageSmoothingEnabled = false;
    offCtx.drawImage(img, 0, 0, w, h);

    ctx.drawImage(offscreen, 0, 0, w, h, 0, 0, width, height);
  };

  useEffect(() => {
    const update = () => {
      const target = shouldReveal ? 1 : 20;
      const diff = target - pixelSizeRef.current;

      if (Math.abs(diff) > 0.05) {
        pixelSizeRef.current += diff * 0.12;
        drawCanvas();
        animationFrameIdRef.current = requestAnimationFrame(update);
      } else {
        pixelSizeRef.current = target;
        drawCanvas();
      }
    };

    animationFrameIdRef.current = requestAnimationFrame(update);

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [shouldReveal]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => !autoReveal && setIsHovered(true)}
      onMouseLeave={() => !autoReveal && setIsHovered(false)}
      className={cn(
        "relative overflow-hidden rounded-[2rem] border border-zinc-800 shadow-2xl transition-all duration-300 hover:border-indigo-500/30 select-none",
        !autoReveal && "cursor-pointer",
        className
      )}
      style={{ width, height }}
      aria-label={alt}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover rounded-[2rem]"
        style={{ width, height }}
      />
    </div>
  );
};

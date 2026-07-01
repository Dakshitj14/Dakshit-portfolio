import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { SmoothCursor } from "@/components/magic/smooth-cursor";

import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://dakshitjha.dev"; // Target production URL for SEO

export const metadata: Metadata = {
  title: "Dakshit Jha | Premium Personal Portfolio",
  description: "Final Year Computer Science Engineering Student & Passionate Full Stack Developer. Exploring AI, Machine Learning, and building high-performance scalable web products.",
  keywords: [
    "Dakshit Jha",
    "Portfolio",
    "Software Engineer",
    "Full Stack Developer",
    "Computer Science Student",
    "AI Enthusiast",
    "Next.js Portfolio",
    "React Developer",
    "Vercel",
    "Stripe Design"
  ],
  authors: [{ name: "Dakshit Jha" }],
  creator: "Dakshit Jha",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dakshit Jha | Premium Personal Portfolio",
    description: "Final Year Computer Science Engineering Student & Passionate Full Stack Developer. Exploring AI, Machine Learning, and building high-performance scalable web products.",
    url: siteUrl,
    siteName: "Dakshit Jha Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dakshit Jha Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dakshit Jha | Premium Personal Portfolio",
    description: "Final Year Computer Science Engineering Student & Passionate Full Stack Developer. Exploring AI, Machine Learning, and building high-performance scalable web products.",
    creator: "@dakshitjha",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dakshit Jha",
    url: siteUrl,
    jobTitle: "Software Engineer / AI Developer",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Noida Institute of Engineering and Technology",
    },
    sameAs: [
      "https://github.com/Dakshitj14",
      "https://www.linkedin.com/in/meetdakshit",
      "https://www.instagram.com/dakshit_j14/"
    ],
    knowsAbout: [
      "Full Stack Development",
      "Artificial Intelligence",
      "Machine Learning",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS"
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="min-h-full bg-white dark:bg-black text-black dark:text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden antialiased transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

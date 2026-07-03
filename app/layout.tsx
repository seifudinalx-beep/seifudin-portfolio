import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seifudin Isaack | Software Developer",
  description:
    "Professional portfolio of Seifudin Isaack showcasing web development, AI, and virtual assistant projects built with Next.js, React and TypeScript.",

  keywords: [
    "Seifudin Isaack",
    "Software Developer",
    "Frontend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "AI",
    "Portfolio",
    "Virtual Assistant",
  ],

  authors: [
    {
      name: "Seifudin Isaack",
    },
  ],

  creator: "Seifudin Isaack",

  openGraph: {
    title: "Seifudin Isaack | Software Developer",
    description:
      "Modern portfolio showcasing web development, AI and virtual assistant projects.",
    url: "https://seifudin-portfolio.vercel.app",
    siteName: "Seifudin Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
import "./globals.css";
import { Poppins, Space_Grotesk } from "next/font/google";
import type { Metadata, Viewport } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aiswarya Kotharambath | Senior Frontend Developer",
  description:
    "Senior Frontend Developer specializing in React, Next.js, TypeScript and AI-powered web applications. Building fast, accessible, and beautifully animated user experiences — Dubai ready.",
  keywords: [
    "Aiswarya Kotharambath",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "AI Engineer",
    "Dubai",
  ],
  authors: [{ name: "Aiswarya Kotharambath" }],
  openGraph: {
    title: "Aiswarya Kotharambath | Senior Frontend Developer",
    description:
      "Senior Frontend Developer specializing in React, Next.js, TypeScript and AI-powered web applications.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

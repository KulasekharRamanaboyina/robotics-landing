import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "all4Ps | B2B Robotics & Deep Tech Growth Agency",
  description: "Build market leadership that drives enterprise pipeline. Help enterprise buyers discover, trust, and choose your robotics brand with strategic positioning, GTM, ABM, and thought leadership.",
  keywords: [
    "robotics marketing",
    "deep tech GTM",
    "industrial automation ABM",
    "B2B tech demand generation",
    "robotics positioning agency",
  ],
  authors: [{ name: "all4Ps" }],
  openGraph: {
    title: "all4Ps | B2B Robotics & Deep Tech Growth Agency",
    description: "Build market leadership that drives enterprise pipeline. Strategy-led B2B marketing for robotics and industrial automation brands.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "all4Ps | B2B Robotics & Deep Tech Growth Agency",
    description: "Build market leadership that drives enterprise pipeline. Strategy-led B2B marketing for robotics and industrial automation brands.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased bg-[#05030A] text-[#F8F7FA] min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}

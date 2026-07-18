import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import IndustryReality from "@/components/IndustryReality";
import GrowthChallenges from "@/components/GrowthChallenges";
import GrowthFramework from "@/components/GrowthFramework";
import WhyChooseUs from "@/components/WhyChooseUs";
import TrustMetrics from "@/components/TrustMetrics";
import FeaturedCaseStudy from "@/components/FeaturedCaseStudy";
import Outcomes from "@/components/Outcomes";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ScrollObserver from "@/components/ScrollObserver";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#05030A] text-[#F8F7FA] overflow-x-hidden selection:bg-violet-600 selection:text-white">
      {/* Background glow spots at the top layout level */}
      <div className="glow-spot absolute left-[-10%] top-[-5%] h-[600px] w-[600px] bg-violet-900/10 animate-pulse-slow pointer-events-none" />
      <div className="glow-spot absolute right-[-5%] top-[10%] h-[500px] w-[500px] bg-purple-900/10 pointer-events-none" />

      {/* Scroll reveal observer component */}
      <ScrollObserver />

      {/* Global Navigation Header */}
      <Navbar />

      {/* Page Sections */}
      <main className="relative z-10">
        <div className="reveal"><Hero /></div>
        <div className="reveal"><TrustedBy /></div>
        <div className="reveal"><IndustryReality /></div>
        <div className="reveal"><GrowthChallenges /></div>
        <div className="reveal"><GrowthFramework /></div>
        <div className="reveal"><WhyChooseUs /></div>
        <div className="reveal"><TrustMetrics /></div>
        <div className="reveal"><FeaturedCaseStudy /></div>
        <div className="reveal"><Outcomes /></div>
        <div className="reveal"><FinalCTA /></div>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Sticky Floating WhatsApp Contact Icon */}
      <a
        href="https://wa.me/919871749916?text=Hi%20all4Ps,%20I'd%20love%20to%20know%20more%20about%20your%20B2B%20growth%20services%20for%20robotics."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(37,211,102,0.65)] hover:-translate-y-1 active:scale-95 group"
        aria-label="Contact on WhatsApp"
      >
        {/* Chat Tooltip Bubble - slides out from the left on hover */}
        <span className="absolute right-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-black/85 backdrop-blur-md border border-white/10 text-white whitespace-nowrap opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider font-bold">
            <span className="h-1.5 w-1.5 rounded-full bg-[#25D366] animate-pulse" />
            Chat with all4Ps
          </span>
        </span>

        {/* Bouncing Notification Badge */}
        <span className="absolute -top-0.5 -right-0.5 z-20 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[8px] font-extrabold text-white shadow-md border border-[#05030A] animate-bounce font-mono">
          1
        </span>

        {/* Pulsing outer halo ring */}
        <span className="absolute -inset-1 rounded-full border border-[#25D366]/40 animate-pulse pointer-events-none group-hover:scale-105 transition-transform" />
        
        {/* Original WhatsApp Multi-colored SVG Brand Icon */}
        <svg className="h-full w-full relative z-10" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="12" fill="#25D366" />
          <path
            d="M12 4a8 8 0 0 0-6.9 12.1L4 20l4.1-.9A8 8 0 1 0 12 4z"
            fill="white"
          />
          <path
            d="M14.9 13.5c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.4.1-.1.2-.5.7-.6.8-.1.1-.2.1-.4 0A5 5 0 0 1 9.8 11c-.2-.3-.2-.5 0-.6l.3-.4c.1-.1.1-.2.2-.3.1-.1.1-.2 0-.4L9.3 7c-.2-.5-.4-.5-.5-.5H8.3c-.2 0-.5.1-.7.3A3 3 0 0 0 6.6 9c0 1.2.5 2.4 1.3 3.5a10.8 10.8 0 0 0 4.5 4c.6.2 1.2.3 1.8.2.7-.1 1.4-.5 1.8-1.2l.3-.7c.1-.2 0-.3-.1-.4z"
            fill="#25D366"
          />
        </svg>
      </a>
    </div>
  );
}

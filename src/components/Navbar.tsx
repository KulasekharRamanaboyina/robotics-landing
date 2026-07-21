"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#05030A] transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 opacity-0 animate-fade-in-up">
            <a href="#" className="flex items-center">
              <Image
                src="/all4ps-logo.png"
                alt="all4Ps logo"
                width={100}
                height={32}
                className="h-8 w-auto object-contain"
                priority
              />
            </a>
          </div>

          {/* Ad-focused CTA Button (Always visible on all screen sizes) */}
          <div className="opacity-0 animate-fade-in-up animation-delay-200">
            <a
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-xl bg-violet-600 px-5 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-violet-500 hover:scale-102 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]"
            >
              Book a Growth Strategy Call
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

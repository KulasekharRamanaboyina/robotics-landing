import { Mail, Globe } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#05030A] py-10 md:py-12">
      {/* Background glow spot */}
      <div className="glow-spot absolute -top-20 left-1/2 h-[150px] w-[350px] -translate-x-1/2 bg-violet-950/20 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-6">

        {/* Logo & Social Links */}
        <div className="flex flex-col items-center gap-4">
          <a href="#" className="flex items-center">
            <Image
              src="/all4ps-logo.png"
              alt="all4Ps logo"
              width={32}
              height={32}
              className="h-8 w-auto object-contain"
              style={{ width: "auto" }}
            />
          </a>

          {/* Social Icons */}
          <div className="flex items-center space-x-3.5 mt-1">
            <a
              href="https://www.linkedin.com/company/all4ps"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/5 p-2 text-gray-400 hover:bg-violet-600 hover:text-white transition-all duration-300 flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://x.com/all4ps"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/5 p-2 text-gray-400 hover:bg-violet-600 hover:text-white transition-all duration-300 flex items-center justify-center"
              aria-label="Twitter/X"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.all4ps.co"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/5 p-1.5 text-gray-400 hover:bg-violet-600 hover:text-white transition-all duration-300 flex items-center justify-center"
              aria-label="Website"
            >
              <Globe className="h-4.5 w-4.5" />
            </a>
            <a
              href="mailto:pavani@all4ps.co"
              className="rounded-full bg-white/5 p-1.5 text-gray-400 hover:bg-violet-600 hover:text-white transition-all duration-300 flex items-center justify-center"
              aria-label="Mail"
            >
              <Mail className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        {/* Copyright & Tagline */}
        <div className="flex flex-col items-center gap-1.5 text-xs text-gray-500 mt-2">
          <p>&copy; 2026 all4Ps. All rights reserved.</p>
          <p className="text-gray-600 font-medium">Built for Robotics & Deep Tech Companies.</p>
        </div>
      </div>
    </footer>
  );
}

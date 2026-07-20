"use client";

import { Suspense, useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowLeft, HelpCircle } from "lucide-react";

function ThankYouContent() {
  const [submission, setSubmission] = useState<{
    name: string;
    email: string;
    phone?: string;
    challenge: string;
    message: string;
  } | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = sessionStorage.getItem("contactFormSubmission");
      if (stored) {
        try {
          setSubmission(JSON.parse(stored));
        } catch (e) {
          console.error("Failed to parse form submission storage:", e);
        }
      }
    }
  }, []);

  const name = submission?.name || "there";
  const email = submission?.email || "your email";
  const challenge = submission?.challenge || "Pipeline Predictability";
  const message = submission?.message || "";

  return (
    <div className="relative min-h-[60vh] flex items-center justify-center px-4 py-16 sm:py-24">
      {/* Background glow spot */}
      <div className="glow-spot absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[400px] w-[600px] bg-violet-600/10 pointer-events-none rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-2xl mx-auto text-center">
        {/* Main success card with HUD styling */}
        <div className="group/card relative rounded-2xl bg-white/[0.01] hover:bg-gradient-to-br hover:from-purple-950/15 hover:to-[#0F0A1C] border border-white/5 hover:border-violet-500/40 p-8 md:p-12 transition-all duration-300 shadow-2xl overflow-hidden">
          
          {/* Engineering grid backdrop */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 group-hover/card:opacity-50 transition-opacity duration-500 pointer-events-none" />
          
          {/* Glowing Backlight blur effect */}
          <div className="absolute inset-0 bg-violet-600/5 rounded-2xl filter blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none" />

          {/* HUD corner brackets */}
          <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-violet-500/30 group-hover/card:border-violet-500/80 transition-all duration-300 pointer-events-none" />
          <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-violet-500/30 group-hover/card:border-violet-500/80 transition-all duration-300 pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-violet-500/30 group-hover/card:border-violet-500/80 transition-all duration-300 pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-violet-500/30 group-hover/card:border-violet-500/80 transition-all duration-300 pointer-events-none" />

          {/* Animated Checkmark Circle */}
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/25 mb-6 animate-bounce">
            <CheckCircle2 className="h-8 w-8" />
          </div>

          <div className="mb-4">
            <span className="inline-block text-[9px] font-bold font-mono tracking-widest text-violet-400 bg-violet-500/10 px-3 py-1 rounded-md border border-violet-500/20 uppercase">
              GROWTH SESSION REQUESTED // STATUS: VERIFIED
            </span>
          </div>

          <h1 className="text-3xl font-extrabold sm:text-4xl text-white tracking-tight leading-tight">
            Thank You, <span className="text-gradient">{name}</span>!
          </h1>

          <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            Your request for a B2B robotics growth consultation has been received. We have sent a confirmation email to <span className="font-semibold text-white">{email}</span>.
          </p>

          {/* Dynamic details section */}
          <div className="mt-8 p-5 rounded-xl bg-white/[0.02] border border-white/5 max-w-md mx-auto text-left relative z-10 space-y-4">
            <div className="flex gap-3.5">
              <div className="h-9 w-9 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 flex-shrink-0">
                <HelpCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold font-mono uppercase tracking-wider text-violet-400">Target Focus Area</p>
                <p className="text-sm font-semibold text-white mt-0.5">{challenge}</p>
                <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                  Our B2B marketing strategists will audit your brand presence and prepare specific positioning solutions for this challenge.
                </p>
              </div>
            </div>

            {submission?.phone && (
              <div className="pt-4 border-t border-white/5 flex gap-3.5">
                <div className="h-9 w-9 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 flex-shrink-0">
                  <span className="font-mono text-xs font-bold">TEL</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold font-mono uppercase tracking-wider text-violet-400">Phone Number</p>
                  <p className="text-sm font-semibold text-white mt-0.5">{submission.phone}</p>
                </div>
              </div>
            )}

            {message && (
              <div className="pt-4 border-t border-white/5 flex gap-3.5">
                <div className="h-9 w-9 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 flex-shrink-0">
                  <span className="font-mono text-xs font-bold">MSG</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold font-mono uppercase tracking-wider text-violet-400">Your Message</p>
                  <p className="text-xs text-gray-300 mt-1 leading-relaxed italic bg-white/[0.02] p-3 rounded-lg border border-white/5 max-h-24 overflow-y-auto whitespace-pre-wrap">
                    "{message}"
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* What happens next */}
          <div className="mt-8 border-t border-white/5 pt-6 text-xs text-gray-400 max-w-md mx-auto">
            <h4 className="font-bold text-gray-300 uppercase tracking-widest font-mono text-[9px] mb-3 text-center">
              NEXT STEPS & TIMELINE
            </h4>
            <ul className="space-y-2.5 text-left pl-2">
              <li className="flex items-start gap-2">
                <span className="text-violet-400 font-bold font-mono">01 //</span>
                <span>We will analyze your current GTM and search/social presence.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400 font-bold font-mono">02 //</span>
                <span>You will receive an email invitation to choose a 30-min strategy window.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-violet-400 font-bold font-mono">03 //</span>
                <span>We connect, review findings, and deliver your action blueprint.</span>
              </li>
            </ul>
          </div>

          {/* Action buttons */}
          <div className="mt-8 flex justify-center">
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 text-sm font-bold text-white transition-all hover:bg-violet-500 hover:scale-102 cursor-pointer shadow-[0_0_20px_rgba(139,92,246,0.25)] hover:shadow-[0_0_25px_rgba(139,92,246,0.45)]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <div className="relative min-h-screen bg-[#05030A] text-[#F8F7FA] overflow-x-clip selection:bg-violet-600 selection:text-white flex flex-col justify-between">
      {/* Background glow spots */}
      <div className="glow-spot absolute left-[-10%] top-[-5%] h-[600px] w-[600px] bg-violet-900/10 animate-pulse-slow pointer-events-none" />
      <div className="glow-spot absolute right-[-5%] top-[10%] h-[500px] w-[500px] bg-purple-900/10 pointer-events-none" />

      <Navbar />

      <main className="flex-grow">
        <Suspense fallback={
          <div className="min-h-[60vh] flex items-center justify-center text-gray-400 font-mono text-xs">
            <span className="h-2 w-2 rounded-full bg-violet-500 animate-ping mr-2.5" />
            INITIALIZING SECURE SESSION...
          </div>
        }>
          <ThankYouContent />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

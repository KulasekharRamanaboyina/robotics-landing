import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="group/hero relative overflow-hidden w-full flex items-center pt-24 pb-16 lg:py-0 lg:h-[calc(100vh-80px)] lg:min-h-[500px] lg:max-h-[850px] bg-[#05030A]">
      {/* Engineering grid backdrop */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] lg:opacity-[0.05] pointer-events-none" />

      {/* Background glow spots */}
      <div className="glow-spot absolute -top-40 left-1/4 h-[300px] w-[500px] bg-violet-950/20 animate-pulse-slow pointer-events-none" />
      <div className="glow-spot absolute right-10 top-20 h-[400px] w-[400px] bg-purple-950/15 pointer-events-none" />
      <div className="glow-spot absolute left-10 bottom-20 h-[250px] w-[250px] bg-violet-600/5 filter blur-3xl pointer-events-none" />

      {/* Vertical tech-seam glow divider on desktop (brightens on hero hover) */}
      <div className="hidden lg:block absolute left-[50%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-violet-500/20 to-transparent z-10 pointer-events-none group-hover/hero:via-violet-500/40 transition-all duration-700" />

      {/* Bottom horizontal timeline glowing separator */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/25 to-transparent z-10 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Copy & Call to Action (Centered on mobile, left-aligned on desktop) */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:col-span-6 relative z-10 w-full">
            
            {/* Badge - Unified styled block */}
            <div className="inline-flex items-center gap-2 rounded-md border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-[9px] font-bold font-mono uppercase tracking-widest text-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.05)] self-center lg:self-start opacity-0 animate-fade-in-up">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
              For Robotics & Industrial Automation Companies
            </div>

            {/* Main Heading */}
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white leading-tight max-w-2xl opacity-0 animate-fade-in-up animation-delay-100">
              Build Market Leadership That Drives{" "}
              <span className="text-gradient drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">Enterprise Pipeline.</span>
            </h1>

            {/* Description */}
            <p className="mt-4 text-sm md:text-base text-gray-300 max-w-xl leading-relaxed mx-auto lg:mx-0 opacity-0 animate-fade-in-up animation-delay-200">
              Help enterprise buyers discover, trust, and choose your robotics brand with strategic positioning, GTM, ABM, and thought leadership.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start opacity-0 animate-fade-in-up animation-delay-300">
              <a
                href="#contact"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-violet-500 to-violet-600 px-5 text-xs font-bold text-white transition-all hover:scale-102 shadow-[0_0_25px_rgba(139,92,246,0.25)] hover:shadow-[0_0_30px_rgba(139,92,246,0.45)] group/btn w-full sm:w-auto"
              >
                <Calendar className="h-3.5 w-3.5 text-violet-200" />
                Book a Growth Strategy Call
                <ArrowRight className="h-3.5 w-3.5 text-violet-200 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

          {/* Right Column Spacer for Desktop to show the background graphic */}
          <div className="hidden lg:block lg:col-span-6" />

        </div>
      </div>

      {/* Full-height background image on the right with horizontal fade-out gradient */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[50%] h-full z-0 pointer-events-none overflow-hidden">
        <Image
          src="/hero-robotics.png"
          alt="Smart factory robotics automation"
          fill
          priority
          className="object-cover object-center lg:object-right opacity-60 lg:opacity-95 transition-all duration-[1500ms] ease-out scale-100 group-hover/hero:scale-[1.02] group-hover/hero:opacity-100"
          sizes="(max-w-1024px) 100vw, 50vw"
        />
        {/* Gradient overlay masking effect: Opacity increases to the right side (fades to dark background on the left) */}
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#05030A]/80 via-[#05030A]/35 to-[#05030A]/90 lg:from-[#05030A] lg:via-[#05030A]/35 lg:to-transparent" />
      </div>
    </section>
  );
}

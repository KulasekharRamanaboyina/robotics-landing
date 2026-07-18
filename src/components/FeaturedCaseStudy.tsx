import Image from "next/image";
import { ArrowRight, TrendingUp, BarChart3, Coins, Zap, Award } from "lucide-react";

export default function FeaturedCaseStudy() {
  const impacts = [
    {
      value: "+312%",
      label: "Organic Growth",
      desc: "Massive search visibility increase.",
      icon: TrendingUp,
    },
    {
      value: "+280%",
      label: "Qualified Leads",
      desc: "More demo requests & direct RFPs.",
      icon: BarChart3,
    },
    {
      value: "₹32Cr+",
      label: "Pipeline Influenced",
      desc: "Direct enterprise account impact.",
      icon: Coins,
    },
    {
      value: "4.6x",
      label: "Marketing ROI",
      desc: "High return on marketing spend.",
      icon: Zap,
    },
  ];

  // Separate the fifth one to display as a full-width focus stat at the bottom
  const focusImpact = {
    value: "Page 1 Rank",
    label: "Industry Authority Keyword Dominance",
    desc: "Top rankings for competitive B2B industrial automation search phrases.",
    icon: Award,
  };

  return (
    <section id="case-study" className="relative py-12 md:py-14 bg-[#05030A] overflow-hidden border-t border-white/5">
      {/* Background ambient glow */}
      <div className="glow-spot absolute right-10 top-1/4 h-[250px] w-[400px] bg-violet-950/15 pointer-events-none" />
      <div className="glow-spot absolute left-10 bottom-10 h-[200px] w-[350px] bg-purple-950/10 animate-pulse-slow pointer-events-none" />

      {/* Radar vertical scanning sweep line */}
      <div className="radar-scan pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-[9px] font-bold font-mono tracking-widest text-violet-400 bg-violet-500/10 px-3.5 py-1 rounded-md border border-violet-500/20 uppercase">
            CASE STUDY // ENTERPRISE DEEP TECH GTM
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl text-white">
            Helping Motherson ROBIS <span className="text-gradient">Strengthen Its Brand Presence.</span>
          </h2>
        </div>

        {/* Two-Column Grid: Vertically centered for balanced desktop layouts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Image, Logo & Overview (No background box) */}
          <div className="lg:col-span-6 flex flex-col gap-5 group/left">
            
            {/* Logo at the top - HTML flex layout to prevent overlap */}
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-7 w-7 items-center justify-center rounded-full border-[2px] border-white/20 text-white flex-shrink-0">
                <div className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
              </div>
              <div className="flex items-baseline font-sans">
                <span className="text-sm font-extrabold tracking-wider text-white uppercase">motherson</span>
                <span className="text-sm font-bold tracking-wider text-violet-400 uppercase ml-2.5">ROBIS</span>
              </div>
            </div>

            {/* Narrative description */}
            <p className="text-xs text-gray-300 leading-relaxed">
              Motherson ROBIS partnered with all4Ps to strengthen its digital presence, simplify complex robotics messaging, and improve visibility among enterprise buyers through branding, website, content marketing, SEO, and sales enablement.
            </p>

            {/* Uncropped widescreen image screenshot */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/5 bg-[#07050E] group/img hover:scale-[1.01] transition-transform duration-300">
              {/* Glowing Backlight blur effect */}
              <div className="absolute inset-0 bg-violet-600/10 rounded-2xl filter blur-xl opacity-0 group-hover/left:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* HUD-style corners (brackets) on hover */}
              <div className="absolute top-2.5 left-2.5 w-1.5 h-1.5 border-t border-l border-violet-500/0 group-hover/left:border-violet-500/80 transition-all duration-300 pointer-events-none z-20" />
              <div className="absolute bottom-2.5 right-2.5 w-1.5 h-1.5 border-b border-r border-violet-500/0 group-hover/left:border-violet-500/80 transition-all duration-300 pointer-events-none z-20" />

              {/* HUD Telemetry overlay readout (fades in on hover) */}
              <div className="absolute bottom-3 left-3 right-3 bg-black/75 backdrop-blur-md border border-white/5 rounded-lg px-3 py-1.5 flex justify-between items-center z-20 text-[9px] font-mono text-gray-400 opacity-0 group-hover/left:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span>PROJECT // MOTHERSON ROBIS</span>
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
                  AMR FLEET GTM
                </span>
              </div>

              <img
                src="/motherson-hero.webp"
                alt="Motherson ROBIS dashboard project with all4Ps"
                className="w-full h-auto block opacity-90 transition-transform duration-500 group-hover/left:scale-[1.01]"
              />
            </div>

            {/* CTA Button placed at the bottom */}
            <div>
              <a
                href="#contact"
                className="inline-flex h-9 items-center justify-center gap-2 rounded-xl border border-white/10 hover:border-violet-500 bg-white/5 hover:bg-violet-950/20 px-4 text-xs font-bold text-white transition-all hover:scale-102 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] group/btn"
              >
                Book a Strategy Call
                <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

          {/* Right Column: Business Impact Metrics (Grid structured to fit in one frame) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Business Impact
              </h3>
              <span className="text-[8px] font-bold font-mono tracking-wider uppercase text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/20">
                verified outcomes
              </span>
            </div>
            
            {/* 2x2 Grid + 1 Full Width Grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {impacts.map((impact) => {
                const Icon = impact.icon;
                return (
                  <div
                    key={impact.label}
                    className="group relative rounded-xl bg-white/[0.01] hover:bg-gradient-to-br hover:from-purple-950/15 hover:to-[#0F0A1C] border border-white/5 hover:border-violet-500/40 p-3.5 transition-all duration-300 flex items-start gap-3 overflow-hidden min-h-[75px] hover:scale-[1.01]"
                  >
                    {/* Engineering grid backdrop */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Glowing Backlight blur effect */}
                    <div className="absolute inset-0 bg-violet-600/5 rounded-2xl filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none" />

                    {/* Accent top glowing border line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-violet-500/20 group-hover:bg-violet-500 transition-colors pointer-events-none rounded-t-xl" />

                    {/* HUD-style corners (brackets) on hover */}
                    <div className="absolute top-2.5 left-2.5 w-1.5 h-1.5 border-t border-l border-violet-500/0 group-hover:border-violet-500/80 transition-all duration-300 pointer-events-none" />
                    <div className="absolute bottom-2.5 right-2.5 w-1.5 h-1.5 border-b border-r border-violet-500/0 group-hover:border-violet-500/80 transition-all duration-300 pointer-events-none" />

                    {/* Metric Icon */}
                    <div className="flex-shrink-0 rounded-lg bg-violet-500/10 p-2 text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 group-hover:scale-105">
                      <Icon className="h-4.5 w-4.5" />
                    </div>

                    {/* Stat Text */}
                    <div className="flex-grow min-w-0 relative z-10">
                      <div className="flex flex-col mb-0.5">
                        <span className="text-lg font-extrabold text-white group-hover:text-violet-300 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.4)] transition-all duration-300 font-mono leading-none">
                          {impact.value}
                        </span>
                        <span className="text-[10px] font-bold text-gray-200 mt-1 truncate">
                          {impact.label}
                        </span>
                      </div>
                      <p className="text-[10px] text-gray-400 leading-snug">
                        {impact.desc}
                      </p>
                    </div>

                  </div>
                );
              })}

              {/* Fifth stat: Spans full width (2 columns) to anchor the grid */}
              <div className="sm:col-span-2 group relative rounded-xl bg-white/[0.01] hover:bg-gradient-to-br hover:from-purple-950/15 hover:to-[#0F0A1C] border border-white/5 hover:border-violet-500/40 p-3.5 transition-all duration-300 flex items-center gap-4 overflow-hidden min-h-[55px] hover:scale-[1.01]">
                <div className="absolute inset-0 bg-grid-pattern opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute inset-0 bg-violet-600/5 rounded-2xl filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-violet-500/20 group-hover:bg-violet-500 transition-colors pointer-events-none rounded-t-xl" />
                <div className="absolute top-2.5 left-2.5 w-1.5 h-1.5 border-t border-l border-violet-500/0 group-hover:border-violet-500/80 transition-all duration-300 pointer-events-none" />
                <div className="absolute bottom-2.5 right-2.5 w-1.5 h-1.5 border-b border-r border-violet-500/0 group-hover:border-violet-500/80 transition-all duration-300 pointer-events-none" />

                <div className="flex-shrink-0 rounded-lg bg-violet-500/10 p-2 text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 group-hover:scale-105">
                  <focusImpact.icon className="h-4.5 w-4.5" />
                </div>

                <div className="flex-grow min-w-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-extrabold text-white group-hover:text-violet-300 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.4)] transition-all duration-300 font-mono">
                      {focusImpact.value}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[8px] font-bold font-mono tracking-wider uppercase border border-violet-500/25 bg-violet-950/40 text-violet-300 px-2 py-0.5 rounded flex-shrink-0">
                      <span className="h-1 w-1 rounded-full bg-violet-400 animate-pulse" />
                      Rank Index // 1st Page
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-400 leading-snug sm:text-right max-w-xs truncate">
                    {focusImpact.desc}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

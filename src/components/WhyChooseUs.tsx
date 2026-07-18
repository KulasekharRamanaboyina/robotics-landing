import { Shield, Target, Award, Rocket, ArrowUpRight } from "lucide-react";

export default function WhyChooseUs() {
  const differentiators = [
    {
      title: "Robotics Marketing Expertise",
      desc: "We speak the language of engineers and enterprise buyers. From kinematics to ROS and PLCs, we understand the technical complexity of your product.",
      tag: "ROS & ROS2",
      icon: Shield,
    },
    {
      title: "Enterprise GTM Strategy",
      desc: "Validate market fit, build precise buyer personas, and design pricing models optimized for complex B2B buying groups.",
      tag: "ICP Mapping",
      icon: Rocket,
    },
    {
      title: "ABM & Demand Generation",
      desc: "Connect directly with decision-makers in manufacturing, logistics, automotive, and warehousing via targeted campaigns.",
      tag: "Auto & Logi Focus",
      icon: Target,
    },
    {
      title: "Strategy-First Execution",
      desc: "No vanity metrics. We focus on pipeline generation, qualified sales leads, and measurable enterprise business outcomes.",
      tag: "Pipeline Proof",
      icon: Award,
    },
  ];

  return (
    <section id="why-choose-us" className="relative py-20 md:py-28 bg-[#05030A] overflow-hidden border-t border-white/5">
      {/* Background glow spots */}
      <div className="glow-spot absolute left-0 bottom-0 h-[400px] w-[400px] bg-violet-950/10 pointer-events-none" />
      <div className="glow-spot absolute right-0 top-1/4 h-[350px] w-[500px] bg-purple-950/15 animate-pulse-slow pointer-events-none" />

      {/* Radar vertical scanning sweep line */}
      <div className="radar-scan pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Heading and intro (Centered on mobile, left-aligned on desktop) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left relative z-10">
            <span className="text-[9px] font-bold font-mono tracking-widest text-violet-400 bg-violet-500/10 px-3.5 py-1 rounded-md border border-violet-500/20 uppercase self-center lg:self-start">
              AGENCY FOCUS // COMPETITIVE ADVANTAGE
            </span>
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl text-white leading-tight">
              Built for B2B. <br />
              <span className="text-gradient">Focused on Deep Tech.</span>
            </h2>
            <p className="mt-6 text-sm md:text-base text-gray-300 leading-relaxed max-w-xl">
              We help robotics and industrial automation companies transform technical innovation into market leadership through strategy-led B2B marketing.
            </p>
            
            {/* High-fidelity Technical Stats Panel */}
            <div className="mt-8 grid grid-cols-2 gap-4 w-full">
              <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-5 hover:bg-[#0F0A1C]/30 transition-all duration-300 relative group/stat overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-violet-500/0 group-hover/stat:border-violet-500/80 transition-all duration-300 pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-violet-500/0 group-hover/stat:border-violet-500/80 transition-all duration-300 pointer-events-none" />
                <div className="text-3xl font-extrabold text-white group-hover/stat:text-violet-300 transition-colors font-mono">100%</div>
                <div className="text-xs font-semibold text-gray-400 mt-2 leading-snug">Robotics & Deep Tech Focus</div>
              </div>
              
              <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-5 hover:bg-[#0F0A1C]/30 transition-all duration-300 relative group/stat overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-violet-500/0 group-hover/stat:border-violet-500/80 transition-all duration-300 pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-violet-500/0 group-hover/stat:border-violet-500/80 transition-all duration-300 pointer-events-none" />
                <div className="text-3xl font-extrabold text-white group-hover/stat:text-violet-300 transition-colors font-mono">Zero</div>
                <div className="text-xs font-semibold text-gray-400 mt-2 leading-snug">Generic Agency Fluff</div>
              </div>
            </div>

            {/* High-fidelity Comparison Chart Widget */}
            <div className="mt-5 rounded-2xl border border-white/5 bg-white/[0.01] p-5 w-full relative group/chart overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-0 group-hover/chart:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-violet-500/0 group-hover/chart:border-violet-500/80 transition-all duration-300 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-violet-500/0 group-hover/chart:border-violet-500/80 transition-all duration-300 pointer-events-none" />
              
              <div className="text-[9px] font-bold font-mono uppercase tracking-widest text-gray-500 mb-4 text-left">
                Domain Competency Index
              </div>
              
              <div className="space-y-4 text-left">
                {/* Row 1 */}
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-mono font-bold text-gray-300">
                    <span>Robotics Domain Knowledge</span>
                    <span className="text-violet-400">all4Ps: 100% | Generalist: 15%</span>
                  </div>
                  <div className="space-y-1">
                    <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full w-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full bg-white/15 rounded-full w-[15%]" />
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-mono font-bold text-gray-300">
                    <span>Enterprise GTM Alignment</span>
                    <span className="text-violet-400">all4Ps: 100% | Generalist: 20%</span>
                  </div>
                  <div className="space-y-1">
                    <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full w-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full bg-white/15 rounded-full w-[20%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 2x2 Grid of details */}
          <div className="lg:col-span-7 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {differentiators.map((diff) => {
                const Icon = diff.icon;
                return (
                  <div
                    key={diff.title}
                    className="group relative rounded-2xl bg-white/[0.01] hover:bg-gradient-to-br hover:from-purple-950/20 hover:to-[#0F0A1C] border border-white/5 hover:border-violet-500/40 p-6 transition-all duration-300 flex flex-col justify-between min-h-[175px] overflow-hidden hover:scale-[1.01]"
                  >
                    {/* Engineering grid backdrop */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Glowing Backlight blur effect */}
                    <div className="absolute inset-0 bg-violet-600/5 rounded-2xl filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none" />

                    {/* HUD-style corners (brackets) on hover */}
                    <div className="absolute top-2.5 left-2.5 w-1.5 h-1.5 border-t border-l border-violet-500/0 group-hover:border-violet-500/80 transition-all duration-300 pointer-events-none" />
                    <div className="absolute bottom-2.5 right-2.5 w-1.5 h-1.5 border-b border-r border-violet-500/0 group-hover:border-violet-500/80 transition-all duration-300 pointer-events-none" />

                    <div>
                      {/* Header: Icon & Technical Badge */}
                      <div className="flex justify-between items-start mb-4">
                        <div className="inline-flex items-center justify-center rounded-xl bg-violet-500/10 p-3 text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="inline-flex items-center gap-1 text-[8px] font-bold font-mono tracking-wider uppercase border border-violet-500/25 bg-violet-950/40 text-violet-300 px-2 py-0.5 rounded flex-shrink-0">
                          <span className="h-1 w-1 rounded-full bg-violet-400 animate-pulse" />
                          {diff.tag}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-base font-bold text-white group-hover:text-violet-300 transition-colors duration-300 flex items-center gap-1">
                        {diff.title}
                        <ArrowUpRight className="h-4 w-4 text-gray-600 group-hover:text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                      </h3>
                      
                      {/* Description */}
                      <p className="mt-2 text-xs text-gray-400 leading-relaxed text-left">
                        {diff.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import { Cpu, ShieldCheck, TrendingUp } from "lucide-react";

export default function IndustryReality() {
  const pillars = [
    {
      title: "Deep Technical Expertise",
      desc: "Enterprise buyers want partners who understand the complex realities of robotics deployment, edge computing, sensor fusion, and hardware integration.",
      icon: Cpu,
    },
    {
      title: "Proven Credibility",
      desc: "Security, compliance, industrial safety ratings, and case studies with major names. Buyers need reassurance that your systems will not cause downtime.",
      icon: ShieldCheck,
    },
    {
      title: "Measurable Business Value",
      desc: "Technical features must map directly to business ROI: throughput improvements, error reduction, labor reallocation, and rapid payback periods.",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="industry-reality" className="relative py-20 md:py-28 overflow-hidden bg-[#05030A] border-t border-white/5">
      {/* Background glow spots */}
      <div className="glow-spot absolute left-1/2 -translate-x-1/2 top-10 h-[300px] w-[600px] bg-violet-950/10 pointer-events-none" />
      <div className="glow-spot absolute right-10 bottom-10 h-[200px] w-[400px] bg-purple-950/5 pointer-events-none" />

      {/* Radar vertical scanning sweep line */}
      <div className="radar-scan pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-[9px] font-bold font-mono tracking-widest text-violet-400 bg-violet-500/10 px-3.5 py-1 rounded-md border border-violet-500/20 uppercase">
            B2B BUYER INDEX // ANALYSIS
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            What Enterprise Buyers <span className="text-gradient">Really Look For.</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-400 leading-relaxed max-w-xl mx-auto">
            Enterprise buyers choose partners who demonstrate deep expertise, proven credibility, and clear business value.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative rounded-2xl bg-white/[0.01] hover:bg-gradient-to-br hover:from-purple-950/15 hover:to-[#0F0A1C] border border-white/5 hover:border-violet-500/40 p-6 md:p-8 transition-all duration-300 flex flex-col justify-between min-h-[220px] overflow-hidden hover:scale-[1.01]"
              >
                {/* Engineering grid backdrop */}
                <div className="absolute inset-0 bg-grid-pattern opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Glowing Backlight blur effect */}
                <div className="absolute inset-0 bg-violet-600/5 rounded-2xl filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none" />

                {/* HUD-style corners (brackets) on hover */}
                <div className="absolute top-2.5 left-2.5 w-1.5 h-1.5 border-t border-l border-violet-500/0 group-hover:border-violet-500/80 transition-all duration-300 pointer-events-none" />
                <div className="absolute bottom-2.5 right-2.5 w-1.5 h-1.5 border-b border-r border-violet-500/0 group-hover:border-violet-500/80 transition-all duration-300 pointer-events-none" />

                <div>
                  {/* Card Header: Icon & Monospace Tag */}
                  <div className="flex justify-between items-center mb-6 relative z-10">
                    <div className="inline-flex items-center justify-center rounded-xl bg-violet-500/10 p-3 text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    
                    <span className="inline-flex items-center gap-1.5 text-[8px] font-bold font-mono tracking-wider uppercase border border-violet-500/25 bg-violet-950/40 text-violet-300 px-2 py-0.5 rounded">
                      <span className="h-1 w-1 rounded-full bg-violet-400 animate-pulse" />
                      PILLAR 0{index + 1}
                    </span>
                  </div>

                  {/* Card Content */}
                  <h3 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors duration-300 relative z-10">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-xs md:text-sm text-gray-400 leading-relaxed relative z-10">
                    {pillar.desc}
                  </p>
                </div>
                
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

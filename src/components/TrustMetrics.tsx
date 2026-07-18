import { Rocket, ShieldCheck, DollarSign, Award } from "lucide-react";

export default function TrustMetrics() {
  const metrics = [
    {
      id: "01",
      stat: "250+",
      label: "Growth Campaigns Executed",
      sub: "Across global B2B channels",
      icon: Rocket,
    },
    {
      id: "02",
      stat: "12+",
      label: "Tech & Industrial Brands",
      sub: "Robotics & deep tech domain focus",
      icon: ShieldCheck,
    },
    {
      id: "03",
      stat: "$1M+",
      label: "Pipeline Influenced",
      sub: "Attributed B2B enterprise pipeline",
      icon: DollarSign,
    },
    {
      id: "04",
      stat: "Strategy-Led",
      label: "Execution with Real Impact",
      sub: "No fluff, only growth outcome focus",
      icon: Award,
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-[#05030A] overflow-hidden border-t border-white/5">
      {/* Background glow spots */}
      <div className="glow-spot absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[250px] w-[600px] bg-violet-950/15 pointer-events-none" />
      <div className="glow-spot absolute left-1/4 bottom-0 h-[300px] w-[300px] bg-purple-950/10 animate-pulse-slow pointer-events-none" />

      {/* Radar vertical scanning sweep line */}
      <div className="radar-scan pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-[9px] font-bold font-mono tracking-widest text-violet-400 bg-violet-500/10 px-3.5 py-1 rounded-md border border-violet-500/20 uppercase">
            PERFORMANCE METRICS // VALIDATED DEEP TECH IMPACT
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            Growth Backed by <span className="text-gradient">Results.</span>
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-white/[0.01] hover:bg-gradient-to-br hover:from-purple-950/20 hover:to-[#0F0A1C] border border-white/5 hover:border-violet-500/40 p-6 transition-all duration-300 flex flex-col justify-between min-h-[210px] overflow-hidden hover:scale-[1.01]"
              >
                {/* Engineering grid backdrop (fades in on hover) */}
                <div className="absolute inset-0 bg-grid-pattern opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Glowing Backlight blur effect */}
                <div className="absolute inset-0 bg-violet-600/5 rounded-2xl filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none" />

                {/* HUD-style corners (brackets) on hover */}
                <div className="absolute top-2.5 left-2.5 w-1.5 h-1.5 border-t border-l border-violet-500/0 group-hover:border-violet-500/80 transition-all duration-300 pointer-events-none" />
                <div className="absolute bottom-2.5 right-2.5 w-1.5 h-1.5 border-b border-r border-violet-500/0 group-hover:border-violet-500/80 transition-all duration-300 pointer-events-none" />

                <div>
                  {/* Header: Technical Subtitle & Pulsing Status */}
                  <div className="flex justify-between items-center mb-4 relative z-10">
                    <span className="text-[9px] font-bold font-mono uppercase tracking-widest text-violet-400">
                      METRIC {metric.id}
                    </span>
                    <span className="inline-flex h-2 w-2 rounded-full bg-violet-400/30 group-hover:bg-violet-400 group-hover:animate-pulse transition-all duration-300" />
                  </div>

                  {/* Icon & Big Metric Stat */}
                  <div className="flex items-center gap-4.5 mb-3 relative z-10">
                    <div className="inline-flex items-center justify-center rounded-xl bg-violet-500/10 p-2.5 text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </div>
                    
                    <div className="text-3xl font-extrabold tracking-tight text-white group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.45)] transition-all duration-300 font-mono">
                      {metric.stat === "Strategy-Led" ? (
                        <span className="text-gradient text-xl sm:text-2xl font-sans font-extrabold tracking-tight">{metric.stat}</span>
                      ) : (
                        metric.stat
                      )}
                    </div>
                  </div>
                  
                  {/* Label */}
                  <p className="text-sm font-semibold text-gray-200 leading-normal relative z-10">
                    {metric.label}
                  </p>

                  {/* Diagnostic Sub-detail */}
                  <p className="mt-1 text-xs text-gray-400 leading-normal relative z-10">
                    {metric.sub}
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

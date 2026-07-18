import { Target, Eye, Sparkles, Users, TrendingUp, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function Outcomes() {
  const outcomes = [
    {
      title: "Stronger Positioning",
      desc: "Stand out and clearly explain complex technology to enterprise buyers.",
      icon: Target,
    },
    {
      title: "Higher Visibility",
      desc: "Get discovered by the key Fortune 500 decision-makers who matter most.",
      icon: Eye,
    },
    {
      title: "Better Recognition",
      desc: "Establish brand authority as an industry industrial automation leader.",
      icon: Sparkles,
    },
    {
      title: "More Conversations",
      desc: "Generate warmer inbound opportunities and pre-qualified sales calls.",
      icon: Users,
    },
    {
      title: "Predictable Pipeline",
      desc: "Build demand velocity to stabilize revenue forecasts and predictability.",
      icon: TrendingUp,
    },
    {
      title: "Sustainable Growth",
      desc: "Accelerate enterprise sales cycles and scale up market footprint.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="relative py-12 md:py-14 bg-[#05030A] overflow-hidden border-t border-white/5">
      {/* Background glow spots */}
      <div className="glow-spot absolute left-1/4 bottom-10 h-[250px] w-[550px] bg-violet-950/10 animate-pulse-slow" />
      <div className="glow-spot absolute right-1/4 top-10 h-[200px] w-[400px] bg-purple-950/10" />
      
      {/* Radar vertical scanning sweep line */}
      <div className="radar-scan pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with technical B2B diagnostic layout */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="text-[9px] font-bold font-mono tracking-widest text-violet-400 bg-violet-500/10 px-3 py-1 rounded-md border border-violet-500/20 uppercase">
            EXPECTED BUSINESS OUTCOMES // ENGAGEMENT PIPELINE
          </span>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl text-white">
            Marketing That Moves <span className="text-gradient">Business Forward.</span>
          </h2>
        </div>

        {/* Outcomes Grid: Compact 3-column, 2-row layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {outcomes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative rounded-2xl bg-white/[0.01] hover:bg-gradient-to-br hover:from-purple-950/15 hover:to-[#0F0A1C] border border-white/5 hover:border-violet-500/40 p-5 transition-all duration-300 flex items-start gap-4 overflow-hidden min-h-[95px] hover:scale-[1.01]"
              >
                {/* Engineering grid backdrop */}
                <div className="absolute inset-0 bg-grid-pattern opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Glowing Backlight blur effect */}
                <div className="absolute inset-0 bg-violet-600/5 rounded-2xl filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none" />

                {/* HUD-style corners (brackets) on hover */}
                <div className="absolute top-2.5 left-2.5 w-1.5 h-1.5 border-t border-l border-violet-500/0 group-hover:border-violet-500/80 transition-all duration-300 pointer-events-none" />
                <div className="absolute bottom-2.5 right-2.5 w-1.5 h-1.5 border-b border-r border-violet-500/0 group-hover:border-violet-500/80 transition-all duration-300 pointer-events-none" />

                {/* Left side: Icon Container */}
                <div className="flex-shrink-0">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                </div>

                {/* Right side: Title, Tag & Desc */}
                <div className="flex-grow min-w-0 relative z-10">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-sm font-bold text-white group-hover:text-violet-300 transition-colors duration-300 flex items-center gap-1">
                      {item.title}
                      <ArrowUpRight className="h-3.5 w-3.5 text-gray-600 group-hover:text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </h3>
                    
                    <span className="inline-flex items-center gap-1 text-[8px] font-bold font-mono tracking-wider uppercase border border-violet-500/25 bg-violet-950/40 text-violet-300 px-1.5 py-0.5 rounded flex-shrink-0">
                      <span className="h-1 w-1 rounded-full bg-violet-400 animate-pulse" />
                      Outcome {idx + 1}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.desc}
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

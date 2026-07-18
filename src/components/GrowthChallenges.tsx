import { BarChart3, EyeOff, Target, Clock, MessageSquare, Award } from "lucide-react";

export default function GrowthChallenges() {
  const challenges = [
    {
      title: "Unpredictable Pipeline",
      desc: "Inconsistent demand makes forecasting and sustainable growth difficult.",
      tag: "Revenue Spikes",
      icon: BarChart3,
    },
    {
      title: "Low Market Visibility",
      desc: "Your innovation remains unnoticed by the enterprise buyers who matter most.",
      tag: "Hidden Tech",
      icon: EyeOff,
    },
    {
      title: "Weak Brand Positioning",
      desc: "Struggling to clearly differentiate your brand in a competitive robotics market.",
      tag: "Commodity Risk",
      icon: Target,
    },
    {
      title: "Long Enterprise Sales Cycles",
      desc: "Complex buying journeys delay decisions and slow business growth.",
      tag: "PILOT Trap",
      icon: Clock,
    },
    {
      title: "Product-First Messaging",
      desc: "Features dominate your messaging while business value gets overlooked.",
      tag: "Specs vs ROI",
      icon: MessageSquare,
    },
    {
      title: "Limited Thought Leadership",
      desc: "Lack of industry authority reduces buyer confidence and trust.",
      tag: "Trust Gap",
      icon: Award,
    },
  ];

  return (
    <section id="challenges" className="relative py-12 md:py-16 bg-[#05030A] overflow-hidden border-t border-white/5">
      {/* Background glow spots */}
      <div className="glow-spot absolute right-0 bottom-10 h-[250px] w-[400px] bg-violet-950/15 pointer-events-none" />
      <div className="glow-spot absolute left-0 top-1/4 h-[200px] w-[300px] bg-purple-950/10 pointer-events-none" />

      {/* Radar vertical scanning sweep line */}
      <div className="radar-scan pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="text-[9px] font-bold font-mono tracking-widest text-violet-400 bg-violet-500/10 px-3.5 py-1 rounded-md border border-violet-500/20 uppercase">
            GROWTH BOTTLENECKS // DIAGNOSTIC MATRIX
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl text-white">
            Is Your Growth <span className="text-gradient">Being Limited By?</span>
          </h2>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {challenges.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative flex items-start gap-4 p-5 rounded-2xl bg-white/[0.01] hover:bg-gradient-to-br hover:from-purple-950/15 hover:to-[#0F0A1C] border border-white/5 hover:border-violet-500/40 transition-all duration-300 overflow-hidden min-h-[105px] hover:scale-[1.01]"
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
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Right side: Title, Tag & Desc */}
                <div className="flex-grow min-w-0 relative z-10">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-sm font-bold text-white group-hover:text-violet-300 transition-colors duration-300 truncate">
                      {item.title}
                    </h3>
                    
                    {/* Unified #800080 Purple Capsule with pulsing status indicator */}
                    <span className="inline-flex items-center gap-1.5 text-[8px] font-bold font-mono tracking-wider uppercase border border-violet-500/25 bg-violet-950/40 text-violet-300 px-2 py-0.5 rounded flex-shrink-0">
                      <span className="h-1 w-1 rounded-full bg-violet-400 animate-pulse" />
                      {item.tag}
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

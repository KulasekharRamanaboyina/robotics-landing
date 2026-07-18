import { Compass, Rocket, Users, Target, Award, ChevronRight, Check, ArrowUpRight } from "lucide-react";

export default function GrowthFramework() {
  const steps = [
    {
      title: "Positioning",
      desc: "Stand out in a competitive market.",
      num: "01",
      icon: Compass,
      schedule: "Weeks 1 - 2",
      bullets: [
        "Competitor gap audit",
        "Value proposition mapping",
      ],
    },
    {
      title: "GTM Engine",
      desc: "Launch with clarity and confidence.",
      num: "02",
      icon: Rocket,
      schedule: "Weeks 3 - 4",
      bullets: [
        "Pricing & package optimization",
        "Launch playbooks & strategy",
      ],
    },
    {
      title: "Account-Based Marketing",
      desc: "Reach the right enterprise buyers.",
      num: "03",
      icon: Users,
      schedule: "Weeks 5 - 8",
      bullets: [
        "Target account list curation",
        "Multi-stakeholder targeting",
      ],
    },
    {
      title: "Pipeline Generation",
      desc: "Turn awareness into opportunities.",
      num: "04",
      icon: Target,
      schedule: "Weeks 9 - 12",
      bullets: [
        "SEO content campaigns",
        "High-intent digital advertising",
      ],
    },
    {
      title: "Thought Leadership",
      desc: "Build trust through expertise.",
      num: "05",
      icon: Award,
      schedule: "Ongoing Sprint",
      bullets: [
        "Industry whitepaper guides",
        "Regulatory compliance articles",
      ],
    },
  ];

  return (
    <section id="growth-framework" className="relative py-20 md:py-28 bg-[#05030A] overflow-hidden border-t border-white/5">
      {/* Background glow spots */}
      <div className="glow-spot absolute left-1/3 top-10 h-[300px] w-[500px] bg-violet-950/15 pointer-events-none" />
      <div className="glow-spot absolute right-1/4 bottom-10 h-[250px] w-[400px] bg-purple-950/10 animate-pulse-slow pointer-events-none" />

      {/* Radar vertical scanning sweep line */}
      <div className="radar-scan pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-[9px] font-bold font-mono tracking-widest text-violet-400 bg-violet-500/10 px-3.5 py-1 rounded-md border border-violet-500/20 uppercase">
            ENGINEERING GTM // FIVE PHASE TIMELINE
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            Build a Growth <span className="text-gradient">Engine for Robotics.</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-400 leading-relaxed max-w-xl mx-auto">
            A strategic framework to strengthen positioning, accelerate demand, and build a predictable enterprise pipeline.
          </p>
        </div>

        {/* Timeline / Flow Container */}
        <div className="relative">
          
          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative flex flex-col items-center group h-full z-10 w-full">
                  
                  {/* Step Node Circle (Upgraded to precision diagnostic dial - z-20 to sit on top of connection line) */}
                  <div className="relative z-20 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-[#0B0813] text-violet-400 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:border-violet-500 group-hover:text-white group-hover:shadow-[0_0_25px_rgba(139,92,246,0.35)]">
                    
                    {/* Pulsing outer halo ring on hover */}
                    <div className="absolute -inset-1.5 rounded-full border border-violet-500/0 group-hover:border-violet-500/20 group-hover:animate-ping pointer-events-none" />
                    
                    {/* Inner glowing pulse */}
                    <div className="absolute inset-0.5 rounded-full bg-gradient-to-tr from-violet-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <Icon className="h-6 w-6 relative z-10 transition-transform duration-300 group-hover:scale-105" />
                    
                    {/* Step Number Tag */}
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-violet-600 text-[9px] font-bold text-white shadow-md font-mono">
                      {step.num}
                    </span>
                  </div>

                  {/* Midpoint flow chevrons for desktop (glowing fast-forward signal on hover) */}
                  {idx < steps.length - 1 && (
                    <div className="absolute top-[22px] right-[-15px] hidden lg:flex items-center justify-center text-violet-500/20 group-hover:text-violet-400 transition-all duration-300 pointer-events-none">
                      <ChevronRight className="h-4 w-4 stroke-[3] translate-x-[-2px] group-hover:translate-x-[2px] transition-transform duration-300" />
                      <ChevronRight className="h-4 w-4 stroke-[3] -ml-2.5 translate-x-[-1px] group-hover:translate-x-[4px] transition-transform duration-300" />
                    </div>
                  )}

                  {/* Vertical Connector Bridge (connects the node dial to the card below it) */}
                  <div className="w-[1.5px] h-6 bg-gradient-to-b from-white/10 to-white/10 group-hover:from-violet-500 group-hover:to-violet-500 transition-all duration-500 pointer-events-none" />

                  {/* Step Card with Ambient Backlight on Hover */}
                  <div className="relative w-full rounded-2xl bg-white/[0.01] hover:bg-gradient-to-br hover:from-purple-950/15 hover:to-[#0F0A1C] border border-white/5 hover:border-violet-500/40 p-5 mt-0 transition-all duration-300 flex flex-col group/card justify-between z-20 flex-grow hover:scale-[1.01] hover:shadow-[0_0_25px_rgba(139,92,246,0.12)]">
                    
                    {/* Engineering grid backdrop */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Glowing Backlight blur effect */}
                    <div className="absolute inset-0 bg-violet-600/5 rounded-2xl filter blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none" />

                    {/* HUD-style corners (brackets) on hover */}
                    <div className="absolute top-2.5 left-2.5 w-1.5 h-1.5 border-t border-l border-violet-500/0 group-hover/card:border-violet-500/80 transition-all duration-300 pointer-events-none" />
                    <div className="absolute bottom-2.5 right-2.5 w-1.5 h-1.5 border-b border-r border-violet-500/0 group-hover/card:border-violet-500/80 transition-all duration-300 pointer-events-none" />

                    <div>
                      {/* Phase tagline - Monospace status badge */}
                      <span className="inline-flex items-center gap-1 text-[8px] font-bold font-mono tracking-wider uppercase border border-violet-500/25 bg-violet-950/40 text-violet-300 px-1.5 py-0.5 rounded mb-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
                        Phase {step.num}
                      </span>
                      
                      <h3 className="text-sm font-bold text-white group-hover/card:text-violet-300 transition-colors duration-300 flex items-center gap-1">
                        {step.title}
                        <ArrowUpRight className="h-3.5 w-3.5 text-gray-600 group-hover/card:text-violet-400 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-all duration-300" />
                      </h3>
                      <p className="mt-1.5 text-xs text-gray-400 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    {/* Step Bullets details with checkmarks */}
                    <div className="mt-4 pt-4 border-t border-white/5 relative z-10 flex-grow flex flex-col justify-between">
                      <ul className="space-y-2 mb-4">
                        {step.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-1.5 text-[10px] text-gray-400 group-hover/card:text-gray-300 transition-colors">
                            <Check className="h-3.5 w-3.5 text-violet-400 mt-0.5 flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Monospace Schedule tag */}
                      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[8px] font-mono text-gray-500">
                        <span>TIMELINE</span>
                        <span className="text-violet-400 font-bold bg-violet-500/10 px-1.5 py-0.5 rounded border border-violet-500/20">{step.schedule}</span>
                      </div>
                    </div>

                  </div>

                  {/* Downward mobile connector bridge line (only visible below lg) */}
                  {idx < steps.length - 1 && (
                    <div className="lg:hidden flex flex-col items-center justify-center h-8 my-1.5 text-violet-500/40 pointer-events-none">
                      <div className="w-[1.5px] h-full bg-gradient-to-b from-violet-500/30 to-violet-500/10" />
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

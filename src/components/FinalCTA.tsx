"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar, ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";

export default function FinalCTA() {
  const router = useRouter();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    challenge: "Pipeline Predictability",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
      const params = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        challenge: formData.challenge,
        message: formData.message,
      });
      router.push(`/thank-you?${params.toString()}`);
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-[#05030A] overflow-hidden border-t border-white/5">
      {/* Radial glow background layers */}
      <div className="glow-spot absolute left-1/2 -translate-x-1/2 bottom-0 h-[450px] w-[800px] bg-violet-600/10 pointer-events-none" />
      <div className="glow-spot absolute left-10 top-1/4 h-[300px] w-[300px] bg-purple-950/15 animate-pulse-slow pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center relative z-10">
            
            {/* Left Column: Heading and Copy (Centered on mobile, left-aligned on desktop) */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left relative z-10">
              <span className="text-[9px] font-bold font-mono tracking-widest text-violet-400 bg-violet-500/10 px-3.5 py-1 rounded-md border border-violet-500/20 uppercase mb-6 self-center lg:self-start">
                GROWTH CONSULTATION // STATUS: ACTIVE
              </span>
              <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl text-white leading-tight max-w-2xl">
                Ready to Build Your <br />
                <span className="text-gradient">Robotics Growth Engine?</span>
              </h2>
              <p className="mt-6 text-base text-gray-300 max-w-xl leading-relaxed mx-auto lg:mx-0">
                Build a strategy that strengthens your market position, engages enterprise buyers, and creates a predictable growth pipeline.
              </p>

              {/* Direct Booking button */}
              <div className="mt-6 flex flex-wrap justify-center lg:justify-start w-full sm:w-auto">
                <a
                  href="#contact"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 text-sm font-bold text-white transition-all hover:bg-violet-500 hover:scale-102 shadow-[0_0_20px_rgba(139,92,246,0.25)] hover:shadow-[0_0_25px_rgba(139,92,246,0.45)] group/btn w-full sm:w-auto"
                >
                  <Calendar className="h-4 w-4 text-violet-200" />
                  Book a Growth Strategy Call
                  <ArrowRight className="h-4 w-4 text-violet-200 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Monospace Trust notes list below CTA: Symmetric 3-column grid on mobile, inline-flex with dividers on desktop */}
              <div className="mt-6 w-full max-w-md grid grid-cols-3 gap-2 text-[8px] sm:text-[9px] font-bold font-mono tracking-widest text-gray-400 uppercase lg:flex lg:flex-wrap lg:items-center lg:justify-start lg:gap-x-4 lg:gap-y-2">
                <span className="flex items-center gap-1.5 justify-center lg:justify-start"><CheckCircle2 className="h-3 w-3 text-violet-400 flex-shrink-0" /> <span className="truncate">30-Min Audit</span></span>
                <span className="text-gray-700 hidden lg:inline">//</span>
                <span className="flex items-center gap-1.5 justify-center lg:justify-start"><CheckCircle2 className="h-3 w-3 text-violet-400 flex-shrink-0" /> <span className="truncate">Expert Call</span></span>
                <span className="text-gray-700 hidden lg:inline">//</span>
                <span className="flex items-center gap-1.5 justify-center lg:justify-start"><CheckCircle2 className="h-3 w-3 text-violet-400 flex-shrink-0" /> <span className="truncate">Zero Pressure</span></span>
              </div>
            </div>

            {/* Right Column: Mini Lead Capture Form */}
            <div className="lg:col-span-5 relative z-10 w-full max-w-md mx-auto lg:max-w-none">
              <div className="group/form relative rounded-2xl bg-white/[0.01] hover:bg-gradient-to-br hover:from-purple-950/15 hover:to-[#0F0A1C] border border-white/5 hover:border-violet-500/40 p-6 md:p-8 transition-all duration-300 shadow-2xl">
                
                {/* Engineering grid backdrop */}
                <div className="absolute inset-0 bg-grid-pattern opacity-0 group-hover/form:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Glowing Backlight blur effect */}
                <div className="absolute inset-0 bg-violet-600/5 rounded-2xl filter blur-xl opacity-0 group-hover/form:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none" />

                {/* HUD-style corners (brackets) on hover */}
                <div className="absolute top-2.5 left-2.5 w-2 h-2 border-t border-l border-violet-500/0 group-hover/form:border-violet-500/80 transition-all duration-300 pointer-events-none" />
                <div className="absolute bottom-2.5 right-2.5 w-2 h-2 border-b border-r border-violet-500/0 group-hover/form:border-violet-500/80 transition-all duration-300 pointer-events-none" />

                {formSubmitted ? (
                  <div className="text-center py-8 relative z-10">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/25 mb-4 animate-bounce">
                      <CheckCircle2 className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Strategy Call Requested!</h3>
                    <p className="mt-3 text-xs text-gray-400 leading-relaxed">
                      Thank you, <span className="font-semibold text-white">{formData.name}</span>. A robotics marketing strategist will email you at <span className="font-semibold text-white">{formData.email}</span> within 24 hours to schedule your session.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 relative z-10 text-left">
                    <div className="flex justify-between items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-white">Request a Consultation</h3>
                      <span className="text-[7px] font-bold font-mono tracking-wider uppercase text-violet-400 bg-violet-500/10 px-1.5 py-0.5 rounded border border-violet-500/20 flex-shrink-0">
                        SECURE // SSL 256
                      </span>
                    </div>
                    <p className="text-xs text-gray-400">Get a tailored GTM and pipeline growth blueprint for your brand.</p>
                    
                    <div>
                      <label htmlFor="name" className="block text-[10px] font-bold text-gray-300 uppercase tracking-wider mb-1.5 font-mono">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="ENTER YOUR FULL NAME..."
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-violet-500 focus:bg-white/10 focus:outline-none focus:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[10px] font-bold text-gray-300 uppercase tracking-wider mb-1.5 font-mono">
                        Work Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ENTER WORK EMAIL..."
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-violet-500 focus:bg-white/10 focus:outline-none focus:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="challenge" className="block text-[10px] font-bold text-gray-300 uppercase tracking-wider mb-1.5 font-mono">
                        Primary Growth Challenge
                      </label>
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                          className="w-full flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white text-left focus:border-violet-500 focus:outline-none transition-all cursor-pointer font-sans"
                        >
                          <span>
                            {formData.challenge === "Enterprise Sales Cycles" ? "Long Sales Cycles" : formData.challenge}
                          </span>
                          <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
                        </button>

                        {/* Custom Options list overlay (Opens downwards, floating outside the card border) */}
                        {dropdownOpen && (
                          <div className="absolute left-0 right-0 top-full mt-1.5 z-30 rounded-xl border border-white/10 bg-[#0F0A24] p-1.5 shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-200">
                            {["Pipeline Predictability", "Brand Positioning", "Enterprise Sales Cycles", "Thought Leadership"].map((option) => (
                              <button
                                key={option}
                                type="button"
                                onClick={() => {
                                  setFormData({ ...formData, challenge: option });
                                  setDropdownOpen(false);
                                }}
                                className={`w-full text-left px-3 py-2 text-xs rounded-lg transition-colors cursor-pointer block ${
                                  formData.challenge === option
                                    ? "bg-violet-600 text-white font-semibold"
                                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                                }`}
                              >
                                {option === "Enterprise Sales Cycles" ? "Long Sales Cycles" : option}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-[10px] font-bold text-gray-300 uppercase tracking-wider mb-1.5 font-mono">
                        Brief Project Details or Message
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="TELL US A BIT ABOUT YOUR SYSTEM OR GOALS..."
                        rows={3}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-violet-500 focus:bg-white/10 focus:outline-none focus:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all resize-none font-sans"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex h-11 items-center justify-center gap-2 rounded-xl bg-violet-600 text-sm font-bold text-white hover:bg-violet-500 transition-all cursor-pointer shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] group/submit"
                    >
                      <span>Submit Request</span>
                      <ArrowRight className="h-4 w-4 text-violet-200 group-hover/submit:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>

      </div>
    </section>
  );
}

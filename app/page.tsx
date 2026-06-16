import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050f07] text-green-50 overflow-x-hidden">

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-5 pt-16 sm:pt-24">
        {/* Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[200px] sm:h-[400px] bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />

        {/* Drone SVG */}
        <div className="animate-float mb-8 sm:mb-12 opacity-90">
          <svg width="90" height="90" className="sm:w-[120px] sm:h-[120px]" viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="60" r="16" fill="#10b981" fillOpacity="0.15" stroke="#10b981" strokeWidth="1.5" />
            <circle cx="60" cy="60" r="6" fill="#10b981" />
            <rect x="20" y="57" width="24" height="6" rx="3" fill="#0a2615" stroke="#10b981" strokeWidth="0.75" strokeOpacity="0.5" />
            <rect x="76" y="57" width="24" height="6" rx="3" fill="#0a2615" stroke="#10b981" strokeWidth="0.75" strokeOpacity="0.5" />
            <rect x="57" y="20" width="6" height="24" rx="3" fill="#0a2615" stroke="#10b981" strokeWidth="0.75" strokeOpacity="0.5" />
            <rect x="57" y="76" width="6" height="24" rx="3" fill="#0a2615" stroke="#10b981" strokeWidth="0.75" strokeOpacity="0.5" />
            <ellipse cx="20" cy="60" rx="14" ry="4" fill="#10b981" fillOpacity="0.12" stroke="#10b981" strokeWidth="1" />
            <ellipse cx="100" cy="60" rx="14" ry="4" fill="#10b981" fillOpacity="0.12" stroke="#10b981" strokeWidth="1" />
            <ellipse cx="60" cy="20" rx="4" ry="14" fill="#10b981" fillOpacity="0.12" stroke="#10b981" strokeWidth="1" />
            <ellipse cx="60" cy="100" rx="4" ry="14" fill="#10b981" fillOpacity="0.12" stroke="#10b981" strokeWidth="1" />
            <circle cx="20" cy="60" r="2.5" fill="#10b981" />
            <circle cx="100" cy="60" r="2.5" fill="#10b981" />
            <circle cx="60" cy="20" r="2.5" fill="#10b981" />
            <circle cx="60" cy="100" r="2.5" fill="#10b981" />
            <circle cx="60" cy="60" r="30" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="4 4" />
            <circle cx="60" cy="60" r="44" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.1" strokeDasharray="4 4" />
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl space-y-5 sm:space-y-6">
          <div className="inline-block px-3 sm:px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[10px] sm:text-xs font-medium tracking-widest uppercase">
            Surveillance for Wildlife &amp; Agriculture Risk Management
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Defending Livestock
            <br />
            <span className="gradient-text">From Above</span>
          </h1>

          <p className="text-base sm:text-lg text-emerald-200/50 max-w-xl mx-auto leading-relaxed">
            Autonomous drone networks that detect screwworm infestations before they spread,
            protecting your herds and wildlife 24/7.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-[#050f07] font-semibold transition-all hover:scale-105 shadow-lg shadow-emerald-500/25 text-center"
            >
              Schedule a Demo
            </Link>
            <Link
              href="/how-it-works"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-emerald-500/30 text-emerald-300 hover:border-emerald-400/60 hover:text-emerald-200 font-semibold transition-all text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

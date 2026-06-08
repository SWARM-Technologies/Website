export default function Home() {
  return (
    <div className="min-h-screen bg-[#050f07] text-green-50 overflow-x-hidden">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-16 bg-[#050f07]/80 backdrop-blur-md border-b border-emerald-900/30">
        <span className="text-lg font-bold tracking-widest text-emerald-400">SWARM</span>
        <div className="hidden sm:flex items-center gap-8 text-sm text-emerald-200/60">
          <a href="#features" className="hover:text-emerald-300 transition-colors">Technology</a>
          <a href="#contact" className="hover:text-emerald-300 transition-colors">Contact</a>
        </div>
        <a
          href="#contact"
          className="px-5 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-[#050f07] text-sm font-semibold transition-colors"
        >
          Get Protected
        </a>
      </nav>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 pt-16">
        {/* Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />

        {/* Drone SVG */}
        <div className="animate-float mb-12 opacity-90">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="60" r="16" fill="#10b981" fillOpacity="0.15" stroke="#10b981" strokeWidth="1.5" />
            <circle cx="60" cy="60" r="6" fill="#10b981" />
            {/* Arms */}
            <rect x="20" y="57" width="24" height="6" rx="3" fill="#0a2615" stroke="#10b981" strokeWidth="0.75" strokeOpacity="0.5" />
            <rect x="76" y="57" width="24" height="6" rx="3" fill="#0a2615" stroke="#10b981" strokeWidth="0.75" strokeOpacity="0.5" />
            <rect x="57" y="20" width="6" height="24" rx="3" fill="#0a2615" stroke="#10b981" strokeWidth="0.75" strokeOpacity="0.5" />
            <rect x="57" y="76" width="6" height="24" rx="3" fill="#0a2615" stroke="#10b981" strokeWidth="0.75" strokeOpacity="0.5" />
            {/* Rotors */}
            <ellipse cx="20" cy="60" rx="14" ry="4" fill="#10b981" fillOpacity="0.12" stroke="#10b981" strokeWidth="1" />
            <ellipse cx="100" cy="60" rx="14" ry="4" fill="#10b981" fillOpacity="0.12" stroke="#10b981" strokeWidth="1" />
            <ellipse cx="60" cy="20" rx="4" ry="14" fill="#10b981" fillOpacity="0.12" stroke="#10b981" strokeWidth="1" />
            <ellipse cx="60" cy="100" rx="4" ry="14" fill="#10b981" fillOpacity="0.12" stroke="#10b981" strokeWidth="1" />
            {/* Rotor hubs */}
            <circle cx="20" cy="60" r="2.5" fill="#10b981" />
            <circle cx="100" cy="60" r="2.5" fill="#10b981" />
            <circle cx="60" cy="20" r="2.5" fill="#10b981" />
            <circle cx="60" cy="100" r="2.5" fill="#10b981" />
            {/* Scan rings */}
            <circle cx="60" cy="60" r="30" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="4 4" />
            <circle cx="60" cy="60" r="44" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.1" strokeDasharray="4 4" />
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium tracking-widest uppercase">
            Surveillance for Wildlife &amp; Agriculture Risk Management
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Defending Livestock
            <br />
            <span className="gradient-text">From Above</span>
          </h1>

          <p className="text-lg text-emerald-200/50 max-w-xl mx-auto leading-relaxed">
            Autonomous drone networks that detect screwworm infestations before they spread —
            protecting your herds and wildlife 24/7.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-[#050f07] font-semibold transition-all hover:scale-105 shadow-lg shadow-emerald-500/25"
            >
              Schedule a Demo
            </a>
            <a
              href="#features"
              className="px-7 py-3.5 rounded-full border border-emerald-500/30 text-emerald-300 hover:border-emerald-400/60 hover:text-emerald-200 font-semibold transition-all"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="relative z-10 mt-20 flex flex-wrap justify-center gap-12 text-center border-t border-emerald-900/40 pt-10 w-full max-w-2xl">
          {[
            { value: "2M+", label: "Acres Monitored" },
            { value: "99.7%", label: "Detection Accuracy" },
            { value: "<48hr", label: "Response Time" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-emerald-400">{s.value}</div>
              <div className="text-xs text-emerald-200/40 uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          How <span className="gradient-text">SWARM</span> Works
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none">
                  <path d="M14 3v4M14 21v4M3 14h4M21 14h4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="14" cy="14" r="5" stroke="#10b981" strokeWidth="1.5" />
                  <circle cx="14" cy="14" r="2" fill="#10b981" />
                </svg>
              ),
              title: "Deploy",
              desc: "Drone fleets are deployed across your land with autonomous patrol routes.",
            },
            {
              icon: (
                <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none">
                  <rect x="4" y="8" width="20" height="15" rx="3" stroke="#10b981" strokeWidth="1.5" />
                  <circle cx="14" cy="15.5" r="4" stroke="#10b981" strokeWidth="1.5" />
                  <circle cx="14" cy="15.5" r="1.5" fill="#10b981" />
                  <path d="M10 8V6a4 4 0 018 0v2" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ),
              title: "Detect",
              desc: "AI-powered thermal cameras identify screwworm signatures in real time.",
            },
            {
              icon: (
                <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none">
                  <path d="M14 3a7 7 0 00-7 7v4l-2 3v1h18v-1l-2-3v-4a7 7 0 00-7-7z" stroke="#10b981" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M12 23h4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="21" cy="7" r="3" fill="#ef4444" />
                </svg>
              ),
              title: "Alert",
              desc: "Your team receives instant GPS-tagged alerts with severity and footage.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-7 flex flex-col gap-4 hover:border-emerald-700/50 transition-colors"
            >
              <div className="p-3 rounded-xl bg-emerald-500/10 w-fit">{f.icon}</div>
              <div>
                <h3 className="font-semibold text-green-50 mb-1">{f.title}</h3>
                <p className="text-sm text-emerald-200/50 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-md mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">
            Ready to <span className="gradient-text">Get Protected?</span>
          </h2>
          <p className="text-emerald-200/50">
            Our team will assess your operation and have drones deployed within 72 hours.
          </p>
          <div className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-7 space-y-4 text-left">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl bg-[#050f07] border border-emerald-900/60 text-green-50 placeholder-emerald-900 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 rounded-xl bg-[#050f07] border border-emerald-900/60 text-green-50 placeholder-emerald-900 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
            <input
              type="text"
              placeholder="Operation size (acres)"
              className="w-full px-4 py-3 rounded-xl bg-[#050f07] border border-emerald-900/60 text-green-50 placeholder-emerald-900 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
            <button className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#050f07] font-semibold transition-all hover:scale-[1.02] shadow-lg shadow-emerald-500/25">
              Request Demo
            </button>
          </div>
          <p className="text-xs text-emerald-200/30">Emergency line: 1-800-SWARM-AG (24/7)</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-emerald-900/30 py-8 px-6 text-center text-xs text-emerald-200/30">
        <span className="font-bold tracking-widest text-emerald-500">SWARM</span> Technologies —
        Surveillance for Wildlife and Agriculture Risk Management
        <br className="sm:hidden" />
        <span className="hidden sm:inline"> · </span>
        © {new Date().getFullYear()} All rights reserved.
      </footer>

    </div>
  );
}

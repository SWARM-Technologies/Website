import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050f07] text-green-50 overflow-x-hidden flex flex-col">

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center flex-1 px-5 pt-16 sm:pt-40 pb-4 sm:pb-6">
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
          <div className="inline-block px-3 sm:px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400/50 text-[10px] sm:text-xs font-medium tracking-widest uppercase">
            <span className="text-emerald-300 font-bold">S</span>urveillance for{' '}
            <span className="text-emerald-300 font-bold">W</span>ildlife &amp;{' '}
            <span className="text-emerald-300 font-bold">A</span>griculture{' '}
            <span className="text-emerald-300 font-bold">R</span>isk{' '}
            <span className="text-emerald-300 font-bold">M</span>anagement
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

      {/* Value Banner */}
      <section className="pb-10 sm:pb-14 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto rounded-2xl border border-emerald-900/40 bg-emerald-950/20 overflow-hidden">

        {/* Three pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-emerald-900/40">
          {[
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="13" stroke="#10b981" strokeWidth="1.2" strokeOpacity="0.4" />
                  <circle cx="14" cy="14" r="5" stroke="#10b981" strokeWidth="1.5" />
                  <circle cx="14" cy="14" r="1.5" fill="#10b981" />
                  <line x1="14" y1="1" x2="14" y2="7" stroke="#10b981" strokeWidth="1.2" />
                  <line x1="14" y1="21" x2="14" y2="27" stroke="#10b981" strokeWidth="1.2" />
                  <line x1="1" y1="14" x2="7" y2="14" stroke="#10b981" strokeWidth="1.2" />
                  <line x1="21" y1="14" x2="27" y2="14" stroke="#10b981" strokeWidth="1.2" />
                </svg>
              ),
              title: 'INSPECT',
              sub: 'SEE MORE.',
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 2L4 6v8c0 5.5 4.3 10.6 10 12 5.7-1.4 10-6.5 10-12V6L14 2z" stroke="#10b981" strokeWidth="1.4" strokeOpacity="0.5" />
                  <path d="M14 2L4 6v8c0 5.5 4.3 10.6 10 12 5.7-1.4 10-6.5 10-12V6L14 2z" stroke="#10b981" strokeWidth="1.4" fill="none" />
                  <circle cx="14" cy="13" r="3.5" stroke="#10b981" strokeWidth="1.3" />
                  <circle cx="14" cy="13" r="1.2" fill="#10b981" />
                  <line x1="14" y1="4" x2="14" y2="9" stroke="#10b981" strokeWidth="1.2" />
                  <line x1="14" y1="17" x2="14" y2="22" stroke="#10b981" strokeWidth="1.2" />
                  <line x1="8" y1="13" x2="10.5" y2="13" stroke="#10b981" strokeWidth="1.2" />
                  <line x1="17.5" y1="13" x2="20" y2="13" stroke="#10b981" strokeWidth="1.2" />
                </svg>
              ),
              title: 'DETECT',
              sub: 'KNOW FASTER.',
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 2L4 6v8c0 5.5 4.3 10.6 10 12 5.7-1.4 10-6.5 10-12V6L14 2z" stroke="#10b981" strokeWidth="1.4" strokeOpacity="0.5" />
                  <polyline points="9,13.5 12.5,17 19,10" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
              title: 'PROTECT',
              sub: 'MANAGE RISK.',
            },
          ].map(({ icon, title, sub }) => (
            <div key={title} className="flex items-center justify-center gap-4 py-6 px-6 sm:py-7">
              <div className="w-11 h-11 shrink-0 rounded-full border border-emerald-500/20 bg-emerald-500/5 flex items-center justify-center">
                {icon}
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-widest text-green-50">{title}</span>
                <span className="text-xs tracking-widest text-emerald-400/60">{sub}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Contact info row */}
        <div className="border-t border-emerald-900/40 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-emerald-900/30">
          {[
            {
              icon: (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              ),
              text: '@swarmtechnologies',
              href: 'https://instagram.com/swarmtechnologies',
            },
            {
              icon: (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              ),
              text: 'swarmtechnologies.biz',
              href: 'https://swarmtechnologies.biz',
            },
            {
              icon: (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              ),
              text: 'Texas, USA',
              href: null,
            },
          ].map(({ icon, text, href }) => (
            <div key={text} className="flex items-center justify-center gap-2.5 py-3.5 px-6">
              <span className="text-emerald-500/50">{icon}</span>
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-200/40 hover:text-emerald-300 transition-colors tracking-wide"
                >
                  {text}
                </a>
              ) : (
                <span className="text-xs text-emerald-200/40 tracking-wide">{text}</span>
              )}
            </div>
          ))}
        </div>

        </div>
      </section>

    </div>
  );
}

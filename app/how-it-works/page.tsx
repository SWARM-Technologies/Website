export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-[#050f07] text-green-50 overflow-x-hidden pt-16 sm:pt-40">
      <section className="py-12 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4">
          How <span className="gradient-text">SWARM</span> Works
        </h2>
        <p className="text-center text-emerald-200/50 text-sm mb-10 sm:mb-16">
          Three steps from deployment to protection.
        </p>
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
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
              className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-6 sm:p-7 flex flex-col gap-4 hover:border-emerald-700/50 transition-colors"
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
    </div>
  )
}

export default function Team() {
  return (
    <div className="min-h-screen bg-[#050f07] text-green-50 overflow-x-hidden pt-16 sm:pt-40">
      <section className="py-12 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4">
          Meet the <span className="gradient-text">Team</span>
        </h2>
        <p className="text-center text-emerald-200/50 text-sm mb-10 sm:mb-16">The people building SWARM from the ground up.</p>

        {/* Engineering */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-3 mb-6 sm:mb-7">
            <div className="h-px flex-1 bg-emerald-900/50" />
            <span className="text-xs font-semibold tracking-widest uppercase text-emerald-500/70">Engineering</span>
            <div className="h-px flex-1 bg-emerald-900/50" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {[
              { name: "Hukam", role: "AI Model Development" },
              { name: "Samved", role: "Drone Engineering" },
              { name: "Neel", role: "Engineering & Website Development" },
            ].map((m) => (
              <div
                key={m.name}
                className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-5 sm:p-6 flex flex-row sm:flex-col gap-4 sm:gap-3 items-center sm:items-start hover:border-emerald-700/50 transition-colors"
              >
                <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-lg">
                  {m.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-green-50">{m.name}</div>
                  <div className="text-xs text-emerald-400/70 mt-0.5">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Storytelling / Business */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-3 mb-6 sm:mb-7">
            <div className="h-px flex-1 bg-emerald-900/50" />
            <span className="text-xs font-semibold tracking-widest uppercase text-emerald-500/70">Storytelling &amp; Business</span>
            <div className="h-px flex-1 bg-emerald-900/50" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 sm:max-w-2xl sm:mx-auto">
            {[
              { name: "Sahasra", role: "Storytelling & Business Strategy" },
              { name: "Sayee", role: "Storytelling & Business Strategy" },
            ].map((m) => (
              <div
                key={m.name}
                className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-5 sm:p-6 flex flex-row sm:flex-col gap-4 sm:gap-3 items-center sm:items-start hover:border-emerald-700/50 transition-colors"
              >
                <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-lg">
                  {m.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-green-50">{m.name}</div>
                  <div className="text-xs text-emerald-400/70 mt-0.5">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  )
}

export default function Collaborators() {
  return (
    <div className="min-h-screen bg-[#050f07] text-green-50 overflow-x-hidden pt-16 sm:pt-40">
      <section className="py-12 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4">
          <span className="gradient-text">Collaborators</span>
        </h2>
        <p className="text-center text-emerald-200/50 text-sm mb-10 sm:mb-16">
          The organizations and experts backing SWARM.
        </p>

        {/* Tech Advisor */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-3 mb-6 sm:mb-7">
            <div className="h-px flex-1 bg-emerald-900/50" />
            <span className="text-xs font-semibold tracking-widest uppercase text-emerald-500/70">Tech Advisor</span>
            <div className="h-px flex-1 bg-emerald-900/50" />
          </div>
          <div className="max-w-xs mx-auto">
            <div className="rounded-2xl border border-emerald-700/40 bg-emerald-950/40 p-5 sm:p-6 flex flex-row sm:flex-col gap-4 sm:gap-3 items-center sm:items-start hover:border-emerald-600/50 transition-colors">
              <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-300 font-bold text-lg">
                H
              </div>
              <div>
                <div className="font-semibold text-green-50">Harmandar Singh</div>
                <div className="text-xs text-emerald-400/70 mt-0.5">Tech Advisor</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional collaborators placeholder */}
        <div>
          <div className="flex items-center gap-3 mb-6 sm:mb-7">
            <div className="h-px flex-1 bg-emerald-900/50" />
            <span className="text-xs font-semibold tracking-widest uppercase text-emerald-500/70">Partners &amp; Advisors</span>
            <div className="h-px flex-1 bg-emerald-900/50" />
          </div>
          <div className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-8 sm:p-12 text-center">
            <p className="text-emerald-200/40 text-sm">Content coming soon.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function Team() {
  return (
    <div className="min-h-screen bg-[#050f07] text-green-50 overflow-x-hidden pt-16 sm:pt-40">

      {/* Page Header */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          Meet the <span className="gradient-text">Team</span>
        </h1>
        <p className="text-emerald-200/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Five students united by a shared mission: protect livestock and wildlife from screwworm infestations using autonomous drone technology.
        </p>
      </section>

      {/* Engineering */}
      <section className="py-10 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-emerald-900/50" />
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-500/70">Engineering</span>
          <div className="h-px flex-1 bg-emerald-900/50" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            {
              name: 'Hukam',
              position: 'AI Lead',
              bio: 'Add a short biography for Hukam here — background, interests, and what drew you to this project.',
              responsibilities: [
                'AI model development',
                'Computer vision pipeline',
                'Training data curation',
                'Model accuracy optimization',
              ],
            },
            {
              name: 'Samved',
              position: 'Drone Engineering Lead',
              bio: 'Add a short biography for Samved here — background, interests, and what drew you to this project.',
              responsibilities: [
                'Drone hardware selection',
                'Flight system integration',
                'Field testing operations',
                'Mechanical design',
              ],
            },
            {
              name: 'Neel',
              position: 'Engineering & Web Lead',
              bio: 'Add a short biography for Neel here — background, interests, and what drew you to this project.',
              responsibilities: [
                'Software architecture',
                'Website development',
                'System integration',
                'Dashboard design',
              ],
            },
          ].map(m => (
            <div
              key={m.name}
              className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-5 sm:p-6 flex flex-col gap-4 hover:border-emerald-700/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 shrink-0 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xl">
                  {m.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-lg text-green-50">{m.name}</div>
                  <div className="text-xs text-emerald-400/70 mt-0.5">{m.position}</div>
                </div>
              </div>
              <p className="text-xs text-emerald-200/40 leading-relaxed">{m.bio}</p>
              <div>
                <div className="text-[10px] font-semibold text-emerald-500/50 uppercase tracking-widest mb-2">Responsibilities</div>
                <ul className="space-y-1">
                  {m.responsibilities.map(r => (
                    <li key={r} className="text-xs text-emerald-200/50 flex gap-1.5">
                      <span className="text-emerald-500 shrink-0">—</span> {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Business & Storytelling */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-emerald-900/50" />
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-500/70">Storytelling &amp; Business</span>
          <div className="h-px flex-1 bg-emerald-900/50" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:max-w-2xl sm:mx-auto">
          {[
            {
              name: 'Sahasra',
              position: 'Marketing & Business Strategy Lead',
              bio: 'Add a short biography for Sahasra here — background, interests, and what drew you to this project.',
              responsibilities: [
                'Market research',
                'Business model development',
                'Pitch presentation',
                'Stakeholder outreach',
              ],
            },
            {
              name: 'Sayee',
              position: 'Communications & Business Strategy Lead',
              bio: 'Add a short biography for Sayee here — background, interests, and what drew you to this project.',
              responsibilities: [
                'Brand storytelling',
                'Impact documentation',
                'Media outreach',
                'Partnership development',
              ],
            },
          ].map(m => (
            <div
              key={m.name}
              className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-5 sm:p-6 flex flex-col gap-4 hover:border-emerald-700/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 shrink-0 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xl">
                  {m.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-lg text-green-50">{m.name}</div>
                  <div className="text-xs text-emerald-400/70 mt-0.5">{m.position}</div>
                </div>
              </div>
              <p className="text-xs text-emerald-200/40 leading-relaxed">{m.bio}</p>
              <div>
                <div className="text-[10px] font-semibold text-emerald-500/50 uppercase tracking-widest mb-2">Responsibilities</div>
                <ul className="space-y-1">
                  {m.responsibilities.map(r => (
                    <li key={r} className="text-xs text-emerald-200/50 flex gap-1.5">
                      <span className="text-emerald-500 shrink-0">—</span> {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

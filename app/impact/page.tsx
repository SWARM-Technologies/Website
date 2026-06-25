export default function Impact() {
  return (
    <div className="min-h-screen bg-[#050f07] text-green-50 overflow-x-hidden pt-16 sm:pt-40">

      {/* Page Header */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          Impact <span className="gradient-text">&amp; Outreach</span>
        </h1>
        <p className="text-emerald-200/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          How SWARM is making a measurable difference in communities, ranches, and wildlife habitats across the region.
        </p>
      </section>

      {/* Impact Stats */}
      <section className="py-4 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { metric: 'Demonstrations', value: '—' },
            { metric: 'Workshops Conducted', value: '—' },
            { metric: 'People Reached', value: '—' },
            { metric: 'Pilot Partners', value: '—' },
          ].map(s => (
            <div key={s.metric} className="rounded-xl border border-emerald-900/40 bg-emerald-950/20 p-4 text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-1">{s.value}</div>
              <div className="text-xs text-emerald-200/40">{s.metric}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 1. Community Impact */}
      <section className="py-10 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-bold text-emerald-500 tracking-widest">01</span>
          <h2 className="text-xl sm:text-2xl font-bold">Community Impact</h2>
          <div className="h-px flex-1 bg-emerald-900/50" />
        </div>
        <div className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-6 sm:p-8">
          <p className="text-emerald-200/50 leading-relaxed text-sm sm:text-base mb-4">
            Describe how the SWARM project has impacted your local community, ranching operations, and wildlife conservation efforts here.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Ranching Community', desc: 'Add details about how SWARM has engaged with or benefited local ranchers and agricultural operations.' },
              { title: 'Wildlife Conservation', desc: 'Add details about how SWARM contributes to protecting local wildlife populations from screwworm infestation.' },
              { title: 'Youth STEM Engagement', desc: 'Add details about how the team has inspired interest in STEM, drones, and agricultural technology among peers.' },
              { title: 'Awareness & Education', desc: 'Add details about how the team has raised awareness of the screwworm threat and the role technology can play.' },
            ].map(item => (
              <div key={item.title} className="rounded-xl border border-emerald-900/40 bg-emerald-950/20 p-4">
                <div className="font-semibold text-sm text-emerald-300 mb-1">{item.title}</div>
                <p className="text-xs text-emerald-200/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Outreach Activities */}
      <section className="py-10 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-bold text-emerald-500 tracking-widest">02</span>
          <h2 className="text-xl sm:text-2xl font-bold">Outreach Activities</h2>
          <div className="h-px flex-1 bg-emerald-900/50" />
        </div>
        <div className="space-y-3">
          {[
            { date: 'Month 2026', activity: 'Outreach Activity', desc: 'Add description of outreach activity, who was reached, and the outcome.', audience: 'Audience' },
            { date: 'Month 2026', activity: 'Outreach Activity', desc: 'Add description of outreach activity, who was reached, and the outcome.', audience: 'Audience' },
            { date: 'Month 2026', activity: 'Outreach Activity', desc: 'Add description of outreach activity, who was reached, and the outcome.', audience: 'Audience' },
          ].map((a, i) => (
            <div key={i} className="rounded-xl border border-emerald-900/40 bg-emerald-950/20 p-4 flex gap-4">
              <div className="shrink-0 text-xs text-emerald-500/50 w-20 pt-0.5">{a.date}</div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-sm">{a.activity}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full border border-emerald-700/30 text-emerald-500/50">{a.audience}</span>
                </div>
                <p className="text-xs text-emerald-200/40 leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Demonstrations */}
      <section className="py-10 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-bold text-emerald-500 tracking-widest">03</span>
          <h2 className="text-xl sm:text-2xl font-bold">Demonstrations</h2>
          <div className="h-px flex-1 bg-emerald-900/50" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            {
              title: 'Demo — Name / Location',
              date: 'Month 2026',
              desc: 'Add details about this demonstration — where it was held, who attended, what was shown, and the response from the audience.',
              media: true,
            },
            {
              title: 'Demo — Name / Location',
              date: 'Month 2026',
              desc: 'Add details about this demonstration — where it was held, who attended, what was shown, and the response from the audience.',
              media: true,
            },
          ].map((d, i) => (
            <div key={i} className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 overflow-hidden">
              <div className="aspect-video bg-emerald-950/50 border-b border-emerald-900/40 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-10 h-10 rounded-lg border border-emerald-900/40 bg-emerald-950/50 flex items-center justify-center mx-auto mb-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald-700">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                  <p className="text-[10px] text-emerald-200/20">Photo / video coming soon</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-sm">{d.title}</span>
                  <span className="text-xs text-emerald-500/50">{d.date}</span>
                </div>
                <p className="text-xs text-emerald-200/40 leading-relaxed">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Workshops */}
      <section className="py-10 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-bold text-emerald-500 tracking-widest">04</span>
          <h2 className="text-xl sm:text-2xl font-bold">Workshops</h2>
          <div className="h-px flex-1 bg-emerald-900/50" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { name: 'Workshop Name', location: 'Location', date: 'Month 2026', attendees: '— attendees', desc: 'Add workshop description here.' },
            { name: 'Workshop Name', location: 'Location', date: 'Month 2026', attendees: '— attendees', desc: 'Add workshop description here.' },
            { name: 'Workshop Name', location: 'Location', date: 'Month 2026', attendees: '— attendees', desc: 'Add workshop description here.' },
          ].map((w, i) => (
            <div key={i} className="rounded-xl border border-emerald-900/40 bg-emerald-950/20 p-4">
              <div className="font-semibold text-sm mb-1">{w.name}</div>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="text-[10px] text-emerald-500/50">{w.date}</span>
                <span className="text-[10px] text-emerald-200/30">·</span>
                <span className="text-[10px] text-emerald-200/30">{w.location}</span>
                <span className="text-[10px] text-emerald-200/30">·</span>
                <span className="text-[10px] text-emerald-200/30">{w.attendees}</span>
              </div>
              <p className="text-xs text-emerald-200/40 leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Media Coverage */}
      <section className="py-10 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-bold text-emerald-500 tracking-widest">05</span>
          <h2 className="text-xl sm:text-2xl font-bold">Media Coverage</h2>
          <div className="h-px flex-1 bg-emerald-900/50" />
        </div>
        <div className="space-y-3">
          {[
            { outlet: 'Publication / Outlet', title: 'Article or Feature Title', date: 'Month 2026', type: 'Press' },
            { outlet: 'Publication / Outlet', title: 'Article or Feature Title', date: 'Month 2026', type: 'Interview' },
            { outlet: 'Publication / Outlet', title: 'Article or Feature Title', date: 'Month 2026', type: 'Social Media' },
          ].map((m, i) => (
            <div key={i} className="rounded-xl border border-emerald-900/40 bg-emerald-950/20 p-4 flex items-center gap-4">
              <div className="w-10 h-10 shrink-0 rounded-lg border border-emerald-900/40 bg-emerald-950/40 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald-700">
                  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2" />
                  <path d="M2 15h10M2 19h10M2 11h4" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm truncate">{m.title}</div>
                <div className="text-xs text-emerald-200/40">{m.outlet} · {m.date}</div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full border border-emerald-700/30 text-emerald-500/50 shrink-0">{m.type}</span>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-emerald-200/20 mt-4 text-center">Add real press articles, news features, and social media mentions here.</p>
      </section>

      {/* 6. Pilot Programs */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-bold text-emerald-500 tracking-widest">06</span>
          <h2 className="text-xl sm:text-2xl font-bold">Pilot Programs</h2>
          <div className="h-px flex-1 bg-emerald-900/50" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            {
              name: 'Pilot Partner — Ranch / Location',
              status: 'Planned',
              period: '2026',
              desc: 'Add details about this pilot program — the partner operation, scope, goals, and early outcomes.',
              stats: [{ label: 'Acreage', val: '—' }, { label: 'Animals', val: '—' }, { label: 'Duration', val: '—' }],
            },
            {
              name: 'Pilot Partner — Ranch / Location',
              status: 'Planned',
              period: '2026',
              desc: 'Add details about this pilot program — the partner operation, scope, goals, and early outcomes.',
              stats: [{ label: 'Acreage', val: '—' }, { label: 'Animals', val: '—' }, { label: 'Duration', val: '—' }],
            },
          ].map((p, i) => (
            <div key={i} className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-5 sm:p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-emerald-300 text-sm">{p.name}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full border border-emerald-700/30 text-emerald-500/50">{p.status}</span>
              </div>
              <p className="text-xs text-emerald-200/40 leading-relaxed mb-4">{p.desc}</p>
              <div className="flex gap-6">
                {p.stats.map(s => (
                  <div key={s.label}>
                    <div className="text-lg font-bold text-emerald-400">{s.val}</div>
                    <div className="text-[10px] text-emerald-200/30">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

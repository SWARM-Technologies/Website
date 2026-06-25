export default function Collaborators() {
  return (
    <div className="min-h-screen bg-[#050f07] text-green-50 overflow-x-hidden pt-16 sm:pt-40">

      {/* Page Header */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          Partners <span className="gradient-text">&amp; Advisors</span>
        </h1>
        <p className="text-emerald-200/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          The mentors, industry experts, and organizations who have supported SWARM&apos;s mission from the ground up.
        </p>
      </section>

      {/* Mentors */}
      <section className="py-10 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-emerald-900/50" />
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-500/70">Mentors</span>
          <div className="h-px flex-1 bg-emerald-900/50" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:max-w-2xl sm:mx-auto">
          {[
            {
              name: 'Harmandar Singh',
              org: 'Organization — TBD',
              role: 'Tech Advisor',
              desc: 'Provided technical guidance on drone systems, AI integration, and system architecture throughout the SWARM development process.',
            },
            {
              name: 'Mentor Name',
              org: 'Organization',
              role: 'Conrad Challenge Mentor',
              desc: 'Add mentor name, organization, and a description of their guidance and involvement here.',
            },
          ].map(m => (
            <div
              key={m.name}
              className="rounded-2xl border border-emerald-700/40 bg-emerald-950/40 p-5 sm:p-6 flex gap-4 hover:border-emerald-600/50 transition-colors"
            >
              <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-300 font-bold text-lg">
                {m.name[0]}
              </div>
              <div>
                <div className="font-semibold text-green-50">{m.name}</div>
                <div className="text-xs text-emerald-400/60 mt-0.5">{m.role}</div>
                <div className="text-xs text-emerald-200/30 mt-0.5">{m.org}</div>
                <p className="text-xs text-emerald-200/40 mt-2 leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advisors */}
      <section className="py-10 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-emerald-900/50" />
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-500/70">Advisors</span>
          <div className="h-px flex-1 bg-emerald-900/50" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { name: 'Advisor Name', cred: 'Ph.D., Agricultural Sciences', org: 'University / Organization' },
            { name: 'Advisor Name', cred: 'Drone Engineering Specialist', org: 'University / Organization' },
            { name: 'Advisor Name', cred: 'Veterinarian, DVM', org: 'Clinic / Organization' },
          ].map((a, i) => (
            <div key={i} className="rounded-xl border border-emerald-900/40 bg-emerald-950/20 p-4 flex gap-3">
              <div className="w-10 h-10 shrink-0 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">
                {a.name[0]}
              </div>
              <div>
                <div className="font-semibold text-sm text-green-50">{a.name}</div>
                <div className="text-xs text-emerald-400/60 mt-0.5">{a.cred}</div>
                <div className="text-xs text-emerald-200/30 mt-0.5">{a.org}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industry Experts */}
      <section className="py-10 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-emerald-900/50" />
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-500/70">Industry Experts</span>
          <div className="h-px flex-1 bg-emerald-900/50" />
        </div>
        <div className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-emerald-200/50">
            {[
              'USDA APHIS Screwworm Program Officers',
              'South Texas Cattle Ranchers Association',
              'UAV Engineering Consultants',
              'Livestock Veterinary Professionals',
              'Precision Agriculture Technology Experts',
              'Wildlife Conservation Specialists',
            ].map(e => (
              <div key={e} className="flex gap-2">
                <span className="text-emerald-500 shrink-0">—</span>
                <span>{e}</span>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-emerald-200/20 mt-5">Add individual expert names, credentials, and organizations here.</p>
        </div>
      </section>

      {/* Community Partners */}
      <section className="py-10 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-emerald-900/50" />
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-500/70">Community Partners</span>
          <div className="h-px flex-1 bg-emerald-900/50" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              name: 'Community Partner',
              desc: 'Add community organization name and a description of how they have been involved in or supported the SWARM project.',
            },
            {
              name: 'Community Partner',
              desc: 'Add community organization name and a description of how they have been involved in or supported the SWARM project.',
            },
          ].map((p, i) => (
            <div key={i} className="rounded-xl border border-emerald-900/40 bg-emerald-950/20 p-4">
              <div className="font-semibold text-sm text-green-50 mb-1">{p.name}</div>
              <p className="text-xs text-emerald-200/40">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Supporting Organizations */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-emerald-900/50" />
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-500/70">Supporting Organizations</span>
          <div className="h-px flex-1 bg-emerald-900/50" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              name: 'Conrad Challenge',
              desc: 'Innovation competition host and primary program supporter for the SWARM team.',
            },
            {
              name: 'School / District',
              desc: 'Institutional sponsor providing resources, lab access, and support for student research.',
            },
            {
              name: 'Organization Name',
              desc: 'Add supporting organization name and description of their involvement here.',
            },
          ].map((org, i) => (
            <div key={i} className="rounded-xl border border-emerald-900/40 bg-emerald-950/20 p-5 text-center">
              <div className="w-14 h-14 rounded-xl border border-emerald-900/40 bg-emerald-950/40 flex items-center justify-center mx-auto mb-3">
                <span className="text-xs font-bold text-emerald-700">{org.name.slice(0, 2).toUpperCase()}</span>
              </div>
              <div className="font-semibold text-sm text-green-50 mb-1">{org.name}</div>
              <p className="text-xs text-emerald-200/40 leading-relaxed">{org.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

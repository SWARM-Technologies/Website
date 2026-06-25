export default function Solution() {
  return (
    <div className="min-h-screen bg-[#050f07] text-green-50 overflow-x-hidden pt-16 sm:pt-40">

      {/* Page Header */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          Our <span className="gradient-text">Solution</span>
        </h1>
        <p className="text-emerald-200/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          SWARM deploys autonomous drone networks to detect and monitor screwworm infestations across livestock operations and wildlife reserves — before they become outbreaks.
        </p>
      </section>

      {/* 1. Product Overview */}
      <section className="py-10 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-bold text-emerald-500 tracking-widest">01</span>
          <h2 className="text-xl sm:text-2xl font-bold">Product Overview</h2>
          <div className="h-px flex-1 bg-emerald-900/50" />
        </div>

        <div className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-6 sm:p-8 mb-6">
          <h3 className="text-xs font-semibold text-emerald-400/70 tracking-widest uppercase mb-3">Product Description</h3>
          <p className="text-emerald-200/60 leading-relaxed text-sm sm:text-base">
            SWARM (Surveillance for Wildlife &amp; Agriculture Risk Management) is an autonomous drone-based monitoring platform designed to combat New World Screwworm (Cochliomyia hominivorax) infestations. Our system uses AI-powered computer vision to continuously scan livestock herds and wildlife populations, identify vulnerable or infested animals, and deliver real-time alerts to ranchers and wildlife managers — enabling early intervention before infestations spread.
          </p>
        </div>

        <h3 className="text-xs font-semibold text-emerald-500/70 tracking-widest uppercase mb-4">Key Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { num: '01', title: 'Autonomous Patrol Flights', desc: 'Drones execute pre-programmed survey routes over your property 24/7 without continuous operator input.' },
            { num: '02', title: 'AI-Powered Detection', desc: 'Computer vision model trained to identify screwworm wounds and flag at-risk animals in real time.' },
            { num: '03', title: 'Instant Alerts', desc: 'Push notifications sent to ranchers the moment a potential infestation is detected in the field.' },
            { num: '04', title: 'Precision GPS Tagging', desc: 'Every flagged animal is geo-tagged with GPS coordinates for fast, targeted treatment.' },
            { num: '05', title: 'Extended Coverage', desc: 'Long-endurance flight with automated docking stations for continuous area surveillance.' },
            { num: '06', title: 'Herd Health Analytics', desc: 'Historical trend data and health dashboards accessible from any web or mobile device.' },
          ].map(f => (
            <div key={f.num} className="rounded-xl border border-emerald-900/40 bg-emerald-950/20 p-5">
              <div className="text-xs font-bold text-emerald-500/50 mb-2">{f.num}</div>
              <div className="font-semibold text-sm mb-1">{f.title}</div>
              <p className="text-xs text-emerald-200/50 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xs font-semibold text-emerald-500/70 tracking-widest uppercase mb-4">Benefits</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: 'Early Detection', value: 'Catch infestations days before visible symptoms spread, dramatically reducing animal loss.' },
            { label: 'Cost Reduction', value: 'Lower treatment costs through early, targeted intervention instead of reactive herd-wide treatment.' },
            { label: 'Labor Savings', value: 'Eliminate time-consuming daily manual inspections across large ranching operations.' },
            { label: 'Wildlife Protection', value: 'Extend monitoring to national parks and wildlife reserves where manual inspection is impractical.' },
          ].map(b => (
            <div key={b.label} className="flex gap-3 rounded-xl border border-emerald-900/40 bg-emerald-950/20 p-4">
              <div className="w-1 rounded-full bg-emerald-500 shrink-0 my-1" />
              <div>
                <div className="text-sm font-semibold text-emerald-300">{b.label}</div>
                <div className="text-xs text-emerald-200/50 mt-0.5 leading-relaxed">{b.value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Design Description */}
      <section className="py-10 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-bold text-emerald-500 tracking-widest">02</span>
          <h2 className="text-xl sm:text-2xl font-bold">Design Description</h2>
          <div className="h-px flex-1 bg-emerald-900/50" />
        </div>

        <h3 className="text-xs font-semibold text-emerald-500/70 tracking-widest uppercase mb-4">System Architecture</h3>
        <div className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-6 sm:p-8 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { layer: 'Edge Layer', items: ['Drone hardware', 'Onboard cameras', 'GPS modules', 'Edge compute (inference)'] },
              { layer: 'Communication Layer', items: ['4G / LTE telemetry', 'Mesh drone networking', 'Encrypted data uplink', 'Real-time video stream'] },
              { layer: 'Cloud & App Layer', items: ['AI model inference', 'Alert engine', 'Herd database', 'Rancher dashboard'] },
            ].map(l => (
              <div key={l.layer} className="rounded-xl border border-emerald-700/20 bg-emerald-900/10 p-4">
                <div className="text-xs font-semibold text-emerald-400 mb-3">{l.layer}</div>
                <ul className="space-y-1.5">
                  {l.items.map(item => (
                    <li key={item} className="text-xs text-emerald-200/50 flex gap-2">
                      <span className="text-emerald-500">—</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <h3 className="text-xs font-semibold text-emerald-500/70 tracking-widest uppercase mb-4">Design Diagrams</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {['System Architecture Diagram', 'AI Model Pipeline Diagram'].map(d => (
            <div key={d} className="rounded-xl border border-emerald-900/40 bg-emerald-950/20 aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl border border-emerald-900/50 bg-emerald-950/50 flex items-center justify-center mx-auto mb-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald-700">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                </div>
                <p className="text-xs text-emerald-200/30">{d}</p>
                <p className="text-[10px] text-emerald-200/20 mt-1">Diagram coming soon</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xs font-semibold text-emerald-500/70 tracking-widest uppercase mb-4">Product Workflow</h3>
        <div className="relative">
          <div className="absolute top-6 left-[22px] bottom-6 w-px bg-emerald-900/50" />
          <div className="space-y-4">
            {[
              { step: '1', title: 'Drone Launch', desc: 'Drones autonomously launch from the charging station and begin their scheduled survey route.' },
              { step: '2', title: 'Aerial Scanning', desc: 'High-resolution cameras capture footage of livestock and wildlife from optimized flight altitude.' },
              { step: '3', title: 'AI Analysis', desc: 'Onboard AI model processes footage in real time, flagging animals with visible wounds or infestation risk.' },
              { step: '4', title: 'Alert & Reporting', desc: 'Rancher receives GPS-tagged alert with photo evidence for rapid field response.' },
              { step: '5', title: 'Treatment & Follow-Up', desc: 'Treatment is applied; SWARM logs the outcome and adjusts future patrol priorities accordingly.' },
              { step: '6', title: 'Data Sync', desc: 'All flight data, detections, and outcomes sync to the cloud dashboard for trend analysis.' },
            ].map(w => (
              <div key={w.step} className="flex gap-4">
                <div className="relative w-10 h-10 shrink-0 rounded-full bg-emerald-950 border border-emerald-700/50 flex items-center justify-center text-xs font-bold text-emerald-400 z-10">
                  {w.step}
                </div>
                <div className="rounded-xl border border-emerald-900/40 bg-emerald-950/20 p-4 flex-1 mb-1">
                  <div className="font-semibold text-sm mb-1">{w.title}</div>
                  <p className="text-xs text-emerald-200/50 leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Prototype Gallery */}
      <section className="py-10 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-bold text-emerald-500 tracking-widest">03</span>
          <h2 className="text-xl sm:text-2xl font-bold">Prototype Gallery</h2>
          <div className="h-px flex-1 bg-emerald-900/50" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {[
            'Prototype v1 — Front View',
            'Prototype v1 — Side View',
            'Prototype v2 — Top View',
            'Field Test — Drone in Flight',
            'AI Detection Screenshot',
            'Dashboard Interface',
          ].map(label => (
            <div key={label} className="rounded-xl border border-emerald-900/40 bg-emerald-950/20 aspect-square flex items-center justify-center">
              <div className="text-center p-4">
                <div className="w-10 h-10 rounded-lg border border-emerald-900/50 bg-emerald-950/50 flex items-center justify-center mx-auto mb-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald-700">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
                <p className="text-[10px] text-emerald-200/30 leading-tight">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Test Results */}
      <section className="py-10 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-bold text-emerald-500 tracking-widest">04</span>
          <h2 className="text-xl sm:text-2xl font-bold">Test Results</h2>
          <div className="h-px flex-1 bg-emerald-900/50" />
        </div>

        <h3 className="text-xs font-semibold text-emerald-500/70 tracking-widest uppercase mb-4">Performance Data</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { metric: 'Detection Accuracy', value: '—', unit: '' },
            { metric: 'False Positive Rate', value: '—', unit: '' },
            { metric: 'Flight Range', value: '—', unit: '' },
            { metric: 'Animals Scanned / Hr', value: '—', unit: '' },
          ].map(m => (
            <div key={m.metric} className="rounded-xl border border-emerald-900/40 bg-emerald-950/20 p-4 text-center">
              <div className="text-2xl font-bold text-emerald-400 mb-1">{m.value}<span className="text-sm">{m.unit}</span></div>
              <div className="text-xs text-emerald-200/40 leading-tight">{m.metric}</div>
            </div>
          ))}
        </div>

        <h3 className="text-xs font-semibold text-emerald-500/70 tracking-widest uppercase mb-4">Charts &amp; Validation Results</h3>
        <div className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-6 sm:p-8 mb-6 text-center">
          <p className="text-emerald-200/40 text-sm">Performance charts and validation data will be added following field trials.</p>
        </div>

        <h3 className="text-xs font-semibold text-emerald-500/70 tracking-widest uppercase mb-4">Pilot Testing</h3>
        <div className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-6 sm:p-8 text-center">
          <p className="text-emerald-200/40 text-sm">Pilot testing details and outcomes coming soon.</p>
        </div>
      </section>

      {/* 5. Technical Specifications */}
      <section className="py-10 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-bold text-emerald-500 tracking-widest">05</span>
          <h2 className="text-xl sm:text-2xl font-bold">Technical Specifications</h2>
          <div className="h-px flex-1 bg-emerald-900/50" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-5 sm:p-6">
            <h3 className="text-sm font-semibold text-emerald-400 mb-4">Components</h3>
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-emerald-900/40">
                  <th className="text-left text-emerald-500/60 font-medium pb-2">Component</th>
                  <th className="text-left text-emerald-500/60 font-medium pb-2">Specification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-900/20">
                {[
                  ['Drone Platform', 'Quadrotor / custom frame'],
                  ['Camera', 'RGB + optional thermal'],
                  ['Compute', 'Edge AI accelerator'],
                  ['GPS', 'RTK GPS module'],
                  ['Battery', 'LiPo — capacity TBD'],
                  ['Communications', '4G LTE + local mesh'],
                ].map(([comp, spec]) => (
                  <tr key={comp}>
                    <td className="py-2 pr-4 font-medium text-green-50/70">{comp}</td>
                    <td className="py-2 text-emerald-200/50">{spec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-5 sm:p-6">
            <h3 className="text-sm font-semibold text-emerald-400 mb-4">Software Stack</h3>
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-emerald-900/40">
                  <th className="text-left text-emerald-500/60 font-medium pb-2">Layer</th>
                  <th className="text-left text-emerald-500/60 font-medium pb-2">Technology</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-900/20">
                {[
                  ['AI Framework', 'PyTorch / TensorFlow Lite'],
                  ['Vision Model', 'Custom CNN / YOLOv8'],
                  ['Flight Control', 'ArduPilot / PX4'],
                  ['Backend', 'Node.js / Python'],
                  ['Database', 'PostgreSQL'],
                  ['Frontend', 'Next.js / React'],
                ].map(([layer, tech]) => (
                  <tr key={layer}>
                    <td className="py-2 pr-4 font-medium text-green-50/70">{layer}</td>
                    <td className="py-2 text-emerald-200/50">{tech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-5 sm:p-6">
            <h3 className="text-sm font-semibold text-emerald-400 mb-4">Materials</h3>
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-emerald-900/40">
                  <th className="text-left text-emerald-500/60 font-medium pb-2">Part</th>
                  <th className="text-left text-emerald-500/60 font-medium pb-2">Material</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-900/20">
                {[
                  ['Frame', 'Carbon fiber composite'],
                  ['Propellers', 'Carbon fiber / nylon'],
                  ['Enclosure', 'ABS / PETG'],
                  ['Landing gear', 'Aluminum alloy'],
                ].map(([part, mat]) => (
                  <tr key={part}>
                    <td className="py-2 pr-4 font-medium text-green-50/70">{part}</td>
                    <td className="py-2 text-emerald-200/50">{mat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-5 sm:p-6">
            <h3 className="text-sm font-semibold text-emerald-400 mb-4">Manufacturing Considerations</h3>
            <ul className="space-y-2 text-xs text-emerald-200/50">
              {[
                '3D printing used for rapid prototyping of custom parts',
                'Frame designed for field repairability with standard tools',
                'Modular sensor payload for easy hardware upgrades',
                'Weatherproofing rated for outdoor agricultural conditions',
                'Supply chain sourced for cost-effective scaling to production',
              ].map(item => (
                <li key={item} className="flex gap-2">
                  <span className="text-emerald-500 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Future Improvements */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-bold text-emerald-500 tracking-widest">06</span>
          <h2 className="text-xl sm:text-2xl font-bold">Future Improvements</h2>
          <div className="h-px flex-1 bg-emerald-900/50" />
        </div>

        <h3 className="text-xs font-semibold text-emerald-500/70 tracking-widest uppercase mb-4">Roadmap</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            {
              phase: 'Near Term', timeframe: '2026',
              items: ['Improve AI detection accuracy', 'Extend battery / flight time', 'Beta program with 3–5 ranches'],
            },
            {
              phase: 'Mid Term', timeframe: '2027',
              items: ['Multi-drone swarm coordination', 'Thermal imaging integration', 'Wildlife reserve partnerships'],
            },
            {
              phase: 'Long Term', timeframe: '2028+',
              items: ['Automated treatment attachment', 'Expand to other livestock pests', 'International market entry'],
            },
          ].map(r => (
            <div key={r.phase} className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-5 sm:p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-emerald-300">{r.phase}</span>
                <span className="text-xs text-emerald-500/50">{r.timeframe}</span>
              </div>
              <ul className="space-y-1.5">
                {r.items.map(item => (
                  <li key={item} className="text-xs text-emerald-200/50 flex gap-2">
                    <span className="text-emerald-500 shrink-0">—</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="text-xs font-semibold text-emerald-500/70 tracking-widest uppercase mb-4">Future Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: 'Multi-Pest Detection', desc: 'Extend the AI model to detect other livestock threats beyond screwworm, protecting against a wider range of agricultural pests.' },
            { title: 'Swarm Intelligence', desc: 'Enable multiple drones to coordinate in real time for full-coverage sweeps of very large ranching operations.' },
            { title: 'Predictive Risk Scoring', desc: 'Use historical data and environmental factors to predict infestation risk before it occurs and adjust patrol intensity.' },
            { title: 'Automated Intervention', desc: 'Drone-mounted treatment dispensers for immediate, hands-free response at the moment of detection.' },
          ].map(f => (
            <div key={f.title} className="rounded-xl border border-emerald-900/40 bg-emerald-950/20 p-4">
              <div className="font-semibold text-sm mb-1 text-emerald-300">{f.title}</div>
              <p className="text-xs text-emerald-200/50 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default function MarketAnalysis() {
  return (
    <div className="min-h-screen bg-[#050f07] text-green-50 overflow-x-hidden pt-16 sm:pt-40">

      {/* Page Header */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          Market <span className="gradient-text">Analysis</span>
        </h1>
        <p className="text-emerald-200/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          The screwworm re-emergence threatens a multi-billion dollar agricultural industry. SWARM is positioned to protect it.
        </p>
      </section>

      {/* 1. Target Market */}
      <section className="py-10 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-bold text-emerald-500 tracking-widest">01</span>
          <h2 className="text-xl sm:text-2xl font-bold">Target Market</h2>
          <div className="h-px flex-1 bg-emerald-900/50" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            {
              label: 'Primary Market',
              tag: 'Ideal Customer',
              title: 'U.S. Cattle Ranchers',
              desc: 'Large and mid-sized cattle operations in screwworm-risk states (Texas, Florida, New Mexico, Arizona). These ranchers manage hundreds to thousands of head of livestock and face the highest financial exposure from an outbreak. They need fast, scalable detection they can deploy without adding labor.',
            },
            {
              label: 'Secondary Market',
              tag: 'Future Customers',
              title: 'Wildlife Managers & Parks',
              desc: 'Government wildlife agencies, national parks, and wildlife conservancies managing deer, elk, and other susceptible species. Manual monitoring of wildlife populations at scale is near-impossible, making autonomous drone surveillance a natural fit. Key partners: USFWS, USDA APHIS, state game departments.',
            },
            {
              label: 'Tertiary Market',
              tag: 'Expansion Opportunity',
              title: 'International Producers',
              desc: 'Central and South American livestock operations where screwworm is endemic and economically devastating. Expansion into Mexico, Brazil, and Colombia represents a long-term opportunity following proven commercialization in the U.S. market.',
            },
          ].map(m => (
            <div key={m.label} className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-5 sm:p-6">
              <div className="text-xs font-semibold text-emerald-500/60 tracking-widest uppercase mb-1">{m.label}</div>
              <div className="text-[10px] text-emerald-200/30 mb-3">{m.tag}</div>
              <div className="font-semibold text-emerald-300 mb-2">{m.title}</div>
              <p className="text-xs text-emerald-200/50 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Market Segmentation */}
      <section className="py-10 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-bold text-emerald-500 tracking-widest">02</span>
          <h2 className="text-xl sm:text-2xl font-bold">Market Segmentation</h2>
          <div className="h-px flex-1 bg-emerald-900/50" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            {
              type: 'Geographic',
              segments: [
                'Texas — highest screwworm risk, largest cattle herd in the U.S.',
                'Florida — Key deer population; site of 2016 screwworm re-emergence',
                'Border states: New Mexico, Arizona, California',
                'Long-term: Mexico, Central America, South America',
              ],
            },
            {
              type: 'Demographic',
              segments: [
                'Ranch operations with 200+ head of cattle',
                'Operators aged 35–65 (highest ranch ownership rates)',
                'Annual operation revenue >$500K (can support tech investment)',
                'Multi-generational family ranches and corporate agriculture operations',
              ],
            },
            {
              type: 'Behavioral',
              segments: [
                'Ranchers who have previously experienced livestock loss from infestation',
                'Early adopters of precision agriculture and farm technology',
                'Operations enrolled in USDA agricultural assistance programs',
                'Ranchers actively following APHIS screwworm surveillance updates',
              ],
            },
            {
              type: 'Industry-Specific',
              segments: [
                'Beef cattle production',
                'Sheep and goat ranching',
                'Wildlife conservancies and high-fence deer ranches',
                'National parks and federal land management agencies',
              ],
            },
          ].map(seg => (
            <div key={seg.type} className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-5 sm:p-6">
              <h3 className="text-sm font-semibold text-emerald-400 mb-3">{seg.type}</h3>
              <ul className="space-y-2">
                {seg.segments.map(s => (
                  <li key={s} className="text-xs text-emerald-200/50 flex gap-2">
                    <span className="text-emerald-500 shrink-0 mt-0.5">—</span>
                    <span className="leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Market Size */}
      <section className="py-10 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-bold text-emerald-500 tracking-widest">03</span>
          <h2 className="text-xl sm:text-2xl font-bold">Market Size</h2>
          <div className="h-px flex-1 bg-emerald-900/50" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          {[
            {
              label: 'TAM',
              full: 'Total Addressable Market',
              value: '$4.2B',
              desc: 'Global livestock pest management and precision agriculture drone monitoring market.',
            },
            {
              label: 'SAM',
              full: 'Serviceable Addressable Market',
              value: '$840M',
              desc: 'U.S. cattle ranchers and wildlife managers in screwworm-risk states ready for autonomous monitoring.',
            },
            {
              label: 'SOM',
              full: 'Serviceable Obtainable Market',
              value: '$42M',
              desc: 'Year 1–3 target: early-adopter ranches and wildlife agencies in Texas and Florida.',
            },
          ].map(m => (
            <div key={m.label} className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-5 sm:p-6 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-1">{m.value}</div>
              <div className="text-sm font-semibold text-emerald-300 mb-1">{m.label}</div>
              <div className="text-[10px] text-emerald-200/30 mb-3">{m.full}</div>
              <p className="text-xs text-emerald-200/40 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-6 sm:p-8">
          <h3 className="text-xs font-semibold text-emerald-500/60 tracking-widest uppercase mb-6">Market Funnel</h3>
          <div className="space-y-5">
            {[
              { label: 'TAM — $4.2B', pct: 100 },
              { label: 'SAM — $840M', pct: 20 },
              { label: 'SOM — $42M', pct: 1 },
            ].map(b => (
              <div key={b.label} className="space-y-1.5">
                <div className="text-xs text-emerald-200/50">{b.label}</div>
                <div className="h-6 bg-emerald-950/60 rounded-full overflow-hidden border border-emerald-900/30">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-700 to-emerald-500"
                    style={{ width: `${Math.max(b.pct, 3)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-emerald-200/20 mt-4">
            Market estimates based on public agricultural and drone industry data. Used for planning and illustrative purposes only.
          </p>
        </div>
      </section>

      {/* 4. Customer Pain Points */}
      <section className="py-10 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-bold text-emerald-500 tracking-widest">04</span>
          <h2 className="text-xl sm:text-2xl font-bold">Customer Pain Points</h2>
          <div className="h-px flex-1 bg-emerald-900/50" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            {
              title: 'Existing Challenges',
              items: [
                'Manual inspection of large herds is time-consuming and labor-intensive',
                'Screwworm wounds are often hidden under fur and missed until advanced infestation',
                'Wildlife populations are nearly impossible to monitor manually at scale',
                'Late detection leads to severe animal suffering and high mortality rates',
              ],
            },
            {
              title: 'Cost of Current Solutions',
              items: [
                'Labor: Full-time hands for daily herd checks ($30–50K/year per worker)',
                'Treatment: Advanced infestations require costly veterinary intervention',
                'Livestock loss: One outbreak can cost $1,500–2,500 per animal lost',
                'Wildlife: USDA emergency response programs cost millions per incident',
              ],
            },
            {
              title: 'User Frustrations',
              items: [
                '"I can\'t physically inspect every animal every day across 10,000 acres."',
                '"By the time I find an infestation, it\'s already spread to three more animals."',
                '"There\'s no early warning system — you only find out when it\'s too late."',
                '"I need something my ranch hand can operate without a drone pilot license."',
              ],
            },
          ].map(p => (
            <div key={p.title} className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-5 sm:p-6">
              <h3 className="text-sm font-semibold text-emerald-400 mb-4">{p.title}</h3>
              <ul className="space-y-2.5">
                {p.items.map(item => (
                  <li key={item} className="text-xs text-emerald-200/50 flex gap-2 leading-relaxed">
                    <span className="text-emerald-500 shrink-0 mt-0.5">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Competitive Analysis */}
      <section className="py-10 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-bold text-emerald-500 tracking-widest">05</span>
          <h2 className="text-xl sm:text-2xl font-bold">Competitive Analysis</h2>
          <div className="h-px flex-1 bg-emerald-900/50" />
        </div>
        <div className="overflow-x-auto rounded-2xl border border-emerald-900/50">
          <table className="w-full text-xs min-w-[600px]">
            <thead>
              <tr className="border-b border-emerald-900/50 bg-emerald-950/50">
                <th className="text-left p-4 text-emerald-500/60 font-semibold uppercase tracking-widest">Feature</th>
                <th className="p-4 text-emerald-400 font-semibold">SWARM</th>
                <th className="p-4 text-emerald-200/40 font-medium">Manual Inspection</th>
                <th className="p-4 text-emerald-200/40 font-medium">Trap Networks</th>
                <th className="p-4 text-emerald-200/40 font-medium">Manned Aerial Survey</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-emerald-900/20">
              {[
                { feature: 'Cost', swarm: 'Low subscription', a: 'High labor cost', b: 'Medium setup', c: 'Very high per-flight' },
                { feature: 'Detection Accuracy', swarm: 'High (AI-powered)', a: 'Medium (human error)', b: 'Low (passive)', c: 'Medium (visual only)' },
                { feature: 'Ease of Use', swarm: 'Easy (autonomous)', a: 'Labor-intensive', b: 'Easy to set', c: 'Requires pilot' },
                { feature: 'Accessibility', swarm: 'Any ranch size', a: 'Small herds only', b: 'Limited range', c: 'Large budgets only' },
                { feature: 'Speed of Detection', swarm: 'Real-time', a: 'Daily at best', b: 'Days to weeks', c: 'Scheduled only' },
                { feature: 'Wildlife Coverage', swarm: 'Yes', a: 'Very limited', b: 'No', c: 'Partial' },
                { feature: 'Innovation Level', swarm: 'Very high', a: 'None', b: 'Low', c: 'Low' },
              ].map(row => (
                <tr key={row.feature} className="bg-emerald-950/20 hover:bg-emerald-950/40 transition-colors">
                  <td className="p-4 font-medium text-emerald-200/60">{row.feature}</td>
                  <td className="p-4 text-center text-emerald-400 font-semibold">{row.swarm}</td>
                  <td className="p-4 text-center text-emerald-200/30">{row.a}</td>
                  <td className="p-4 text-center text-emerald-200/30">{row.b}</td>
                  <td className="p-4 text-center text-emerald-200/30">{row.c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. Why Early Adopters Will Care */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-bold text-emerald-500 tracking-widest">06</span>
          <h2 className="text-xl sm:text-2xl font-bold">Why Early Adopters Will Care</h2>
          <div className="h-px flex-1 bg-emerald-900/50" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            {
              title: 'Unique Value Proposition',
              desc: 'SWARM is the only autonomous drone system specifically designed for screwworm detection — combining AI vision, drone hardware, and real-time alerting in a single, easy-to-deploy platform purpose-built for the threat ranchers face today.',
            },
            {
              title: 'Competitive Advantages',
              desc: 'No other solution offers continuous autonomous monitoring with AI-powered early detection at an accessible price point. We are first-to-market with a product built for screwworm surveillance specifically — not adapted from a general agriculture tool.',
            },
            {
              title: 'Cost Savings',
              desc: 'A single prevented infestation outbreak can save tens of thousands of dollars in livestock loss and treatment costs. SWARM\'s subscription cost can be recovered within the first prevented incident, delivering positive ROI immediately.',
            },
            {
              title: 'Impact Potential',
              desc: 'Beyond economics, SWARM protects wildlife, supports USDA eradication zone maintenance, and reduces suffering for animals and the ranching families who face an existential threat to their livelihoods and way of life.',
            },
          ].map(w => (
            <div key={w.title} className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-5 sm:p-6">
              <div className="font-semibold text-emerald-300 mb-2">{w.title}</div>
              <p className="text-xs text-emerald-200/50 leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

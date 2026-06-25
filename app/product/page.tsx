export default function ProductDevelopment() {
  return (
    <div className="min-h-screen bg-[#050f07] text-green-50 overflow-x-hidden pt-16 sm:pt-40">

      {/* Page Header */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          Product <span className="gradient-text">Development</span>
        </h1>
        <p className="text-emerald-200/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          From initial concept to functional prototype — the full story of how SWARM was designed, built, tested, and refined.
        </p>
      </section>

      {/* 1. Development Timeline */}
      <section className="py-10 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-bold text-emerald-500 tracking-widest">01</span>
          <h2 className="text-xl sm:text-2xl font-bold">Development Timeline</h2>
          <div className="h-px flex-1 bg-emerald-900/50" />
        </div>

        <div className="relative">
          <div className="absolute top-5 left-5 bottom-5 w-px bg-emerald-900/50" />
          <div className="space-y-5">
            {[
              {
                phase: 'Concept',
                date: 'Oct 2025',
                desc: 'Identified the screwworm re-emergence crisis threatening U.S. livestock. Brainstormed drone-based surveillance as a scalable early-detection solution and validated problem–solution fit.',
              },
              {
                phase: 'Research',
                date: 'Nov 2025',
                desc: 'Conducted literature review on screwworm biology, reviewed existing surveillance methods, and interviewed ranchers and USDA researchers to understand current pain points and gaps.',
              },
              {
                phase: 'Design',
                date: 'Dec 2025',
                desc: 'Developed system architecture, selected drone hardware stack, and designed the AI detection pipeline. Created initial CAD models for the airframe and UI wireframes for the dashboard.',
              },
              {
                phase: 'Prototype',
                date: 'Jan 2026',
                desc: 'Built the first functional prototype (v1). Integrated camera, GPS, and edge compute modules. Developed the initial computer vision model with a curated training dataset.',
              },
              {
                phase: 'Testing',
                date: 'Feb – Mar 2026',
                desc: 'Conducted controlled field tests to measure detection accuracy, flight performance, and alert latency. Gathered structured feedback from rancher test users.',
              },
              {
                phase: 'Iterations',
                date: 'Apr – Jun 2026',
                desc: 'Applied lessons from testing across three major iteration cycles. Improved AI model accuracy, extended battery life, and refined the user interface based on field feedback.',
              },
            ].map((phase, i) => (
              <div key={phase.phase} className="flex gap-5">
                <div className="relative w-10 h-10 shrink-0 rounded-full bg-emerald-950 border border-emerald-700/50 flex items-center justify-center z-10">
                  <span className="text-[10px] font-bold text-emerald-400">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="rounded-xl border border-emerald-900/40 bg-emerald-950/20 p-4 sm:p-5 flex-1 mb-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-emerald-300">{phase.phase}</span>
                    <span className="text-xs text-emerald-500/50">{phase.date}</span>
                  </div>
                  <p className="text-xs text-emerald-200/50 leading-relaxed">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Research Summary */}
      <section className="py-10 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-bold text-emerald-500 tracking-widest">02</span>
          <h2 className="text-xl sm:text-2xl font-bold">Research Summary</h2>
          <div className="h-px flex-1 bg-emerald-900/50" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            {
              title: 'Literature Review',
              items: [
                'USDA APHIS screwworm eradication program reports',
                'UAV applications in precision agriculture research',
                'Computer vision benchmarks for livestock health monitoring',
                'Economic impact studies of screwworm on U.S. cattle industry',
              ],
            },
            {
              title: 'Interviews',
              items: [
                'South Texas cattle ranchers (operations >500 head)',
                'Wildlife managers at Big Bend National Park',
                'USDA APHIS Animal Health officers',
                'Livestock veterinarians in screwworm-risk regions',
              ],
            },
            {
              title: 'Expert Consultations',
              items: [
                'Drone hardware engineers and UAV flight specialists',
                'Computer vision researchers',
                'Precision agriculture startup founders',
                'Tech advisor: Harmandar Singh',
              ],
            },
          ].map(r => (
            <div key={r.title} className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-5 sm:p-6">
              <h3 className="text-sm font-semibold text-emerald-400 mb-4">{r.title}</h3>
              <ul className="space-y-2.5">
                {r.items.map(item => (
                  <li key={item} className="text-xs text-emerald-200/50 flex gap-2">
                    <span className="text-emerald-500 shrink-0 mt-0.5">—</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Iterations */}
      <section className="py-10 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-bold text-emerald-500 tracking-widest">03</span>
          <h2 className="text-xl sm:text-2xl font-bold">Iterations</h2>
          <div className="h-px flex-1 bg-emerald-900/50" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            {
              version: 'Version 1',
              period: 'Jan 2026',
              description: 'Initial proof-of-concept prototype. Focused on validating that a drone could capture sufficient image quality for AI-based wound detection.',
              changes: [
                'Off-the-shelf frame with Raspberry Pi compute',
                'Basic image classification model (ResNet-50)',
                'Manual remote-controlled flight path',
                'Alert delivery via email',
              ],
              lessons: 'Manual flight was impractical at ranch scale. Detection accuracy was too low (<70%) for production use. Edge processing needed to reduce alert latency.',
            },
            {
              version: 'Version 2',
              period: 'Mar 2026',
              description: 'Addressed autonomy and accuracy gaps. Integrated autonomous flight planning and upgraded the AI model architecture for faster inference.',
              changes: [
                'Autonomous flight with ArduPilot waypoints',
                'Upgraded to YOLOv8 for real-time detection',
                'NVIDIA Jetson Nano for edge compute',
                'Push notification alert system',
              ],
              lessons: 'Battery life was insufficient for large operations (>1,000 acres). Rancher feedback revealed need for a simpler alert format with visual photo confirmation.',
            },
            {
              version: 'Version 3',
              period: 'May 2026',
              description: 'Production-focused refinement cycle. Improved flight endurance, user experience, and overall system reliability based on field testing feedback.',
              changes: [
                'Extended battery: ~45-min flight time',
                'Refined dashboard with GPS map view',
                'Improved training dataset (1,000+ labeled images)',
                'Weatherproof enclosure for field conditions',
              ],
              lessons: 'AI model still needs more diverse training data from real-world field conditions. Multi-drone coordination is the top priority for next release.',
            },
          ].map(v => (
            <div key={v.version} className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-5 sm:p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-bold text-emerald-300">{v.version}</span>
                <span className="text-xs px-2 py-0.5 rounded-full border border-emerald-700/30 text-emerald-500/60">{v.period}</span>
              </div>
              <p className="text-xs text-emerald-200/50 leading-relaxed">{v.description}</p>
              <div>
                <div className="text-[10px] font-semibold text-emerald-500/60 uppercase tracking-widest mb-2">Changes</div>
                <ul className="space-y-1">
                  {v.changes.map(c => (
                    <li key={c} className="text-xs text-emerald-200/40 flex gap-2">
                      <span className="text-emerald-500 shrink-0">+</span> {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-emerald-900/30 bg-emerald-950/30 p-3">
                <div className="text-[10px] font-semibold text-emerald-500/60 uppercase tracking-widest mb-1">Lessons Learned</div>
                <p className="text-xs text-emerald-200/40 leading-relaxed">{v.lessons}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Development Challenges */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-bold text-emerald-500 tracking-widest">04</span>
          <h2 className="text-xl sm:text-2xl font-bold">Development Challenges</h2>
          <div className="h-px flex-1 bg-emerald-900/50" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            {
              type: 'Technical',
              challenges: [
                { title: 'AI Accuracy', desc: 'Training a reliable detection model with limited real-world screwworm imagery in diverse field conditions.' },
                { title: 'Edge Compute', desc: 'Running AI inference in real time on power-constrained drone hardware without overheating.' },
                { title: 'Flight Endurance', desc: 'Extending battery life to cover large ranch operations on a single charge.' },
                { title: 'GPS Precision', desc: 'Achieving accurate GPS tagging of moving animals across rugged terrain.' },
              ],
            },
            {
              type: 'Business',
              challenges: [
                { title: 'Market Validation', desc: 'Convincing ranchers to trial unproven technology during an active pest crisis requiring immediate action.' },
                { title: 'FAA Regulations', desc: 'Navigating FAA drone regulations for autonomous beyond-visual-line-of-sight agricultural operations.' },
                { title: 'Pricing Model', desc: 'Determining pricing that is accessible to small ranchers while sustaining operations at scale.' },
                { title: 'Technology Adoption', desc: 'Overcoming resistance to tech adoption in traditional agricultural communities with limited tech infrastructure.' },
              ],
            },
            {
              type: 'Manufacturing',
              challenges: [
                { title: 'Component Sourcing', desc: 'Securing affordable, reliable drone components amid global supply chain constraints and lead times.' },
                { title: 'Weatherproofing', desc: 'Designing robust enclosures to protect electronics in hot, humid, and dusty outdoor environments.' },
                { title: 'Scalability', desc: 'Designing for low-cost manufacture while maintaining the performance standards required for reliable detection.' },
                { title: 'Field Repairability', desc: 'Ensuring drones can be serviced in remote locations without specialized tools or factory support.' },
              ],
            },
          ].map(cat => (
            <div key={cat.type} className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-5 sm:p-6">
              <h3 className="text-sm font-semibold text-emerald-400 mb-4">{cat.type} Challenges</h3>
              <div className="space-y-3">
                {cat.challenges.map(ch => (
                  <div key={ch.title} className="rounded-lg border border-emerald-900/30 bg-emerald-950/30 p-3">
                    <div className="text-xs font-semibold text-green-50/80 mb-1">{ch.title}</div>
                    <p className="text-xs text-emerald-200/40 leading-relaxed">{ch.desc}</p>
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

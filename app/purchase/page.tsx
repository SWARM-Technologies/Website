'use client'
import { useState } from 'react'

type FormState = 'idle' | 'success'

function SuccessMessage({ message }: { message: string }) {
  return (
    <div className="rounded-xl border border-emerald-700/40 bg-emerald-900/20 p-5 text-center">
      <div className="text-emerald-400 font-semibold mb-1">Request received!</div>
      <p className="text-xs text-emerald-200/50">{message}</p>
    </div>
  )
}

export default function Purchase() {
  const [purchaseState, setPurchaseState] = useState<FormState>('idle')
  const [demoState, setDemoState] = useState<FormState>('idle')
  const [waitlistState, setWaitlistState] = useState<FormState>('idle')
  const [distState, setDistState] = useState<FormState>('idle')
  const [investState, setInvestState] = useState<FormState>('idle')

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-[#050f07] border border-emerald-900/60 text-green-50 placeholder-emerald-900/80 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors'

  function makeHandler(setter: (s: FormState) => void) {
    return (e: React.FormEvent) => {
      e.preventDefault()
      setter('success')
    }
  }

  return (
    <div className="min-h-screen bg-[#050f07] text-green-50 overflow-x-hidden pt-16 sm:pt-40">

      {/* Page Header */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          Purchase <span className="gradient-text">/ Pre-Order</span>
        </h1>
        <p className="text-emerald-200/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Secure your SWARM deployment early. Join the waitlist, request a demo, or reach out about distribution and investment opportunities.
        </p>
      </section>

      <div className="px-4 sm:px-6 max-w-5xl mx-auto pb-16 sm:pb-24 space-y-10">

        {/* Product Overview */}
        <div className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-6 sm:p-8">
          <h2 className="text-base font-semibold mb-4">Product Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <p className="text-sm text-emerald-200/50 leading-relaxed">
                SWARM is an autonomous drone surveillance platform for detecting New World Screwworm infestations in livestock and wildlife. Our system combines AI-powered computer vision, real-time GPS alerting, and a cloud analytics dashboard — all deployable without a drone pilot on-site.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-emerald-200/40">
                {[
                  'Autonomous 24/7 patrol across your entire operation',
                  'AI wound detection with real-time push alerts',
                  'GPS-tagged incident map for fast field response',
                  'Cloud dashboard with herd health trend data',
                  'No drone pilot required for daily operation',
                ].map(f => (
                  <li key={f} className="flex gap-2">
                    <span className="text-emerald-500 shrink-0">—</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-emerald-900/40 bg-emerald-950/40 p-4 flex flex-col gap-2 justify-center">
              <div className="text-xs text-emerald-500/60 uppercase tracking-widest">Status</div>
              <div className="text-lg font-bold text-emerald-400">Pre-Order</div>
              <div className="text-xs text-emerald-200/40">Commercial availability: 2026–2027</div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div>
          <h2 className="text-lg font-semibold mb-5">Pricing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                tier: 'Starter',
                price: 'TBD',
                period: '/ month',
                desc: 'For small ranching operations. Single drone, up to — acres of coverage.',
                features: ['1 drone unit', 'Cloud dashboard access', 'Email & push alerts', 'Basic herd analytics'],
                cta: 'Request Quote',
              },
              {
                tier: 'Professional',
                price: 'TBD',
                period: '/ month',
                desc: 'For mid-sized operations. Multiple drones, expanded coverage and support.',
                features: ['Up to 3 drone units', 'Priority support', 'Advanced analytics', 'API access'],
                cta: 'Request Quote',
                highlight: true,
              },
              {
                tier: 'Enterprise',
                price: 'Custom',
                period: '',
                desc: 'For large ranches, wildlife agencies, and government operators. Custom deployment.',
                features: ['Unlimited drones', 'Dedicated account manager', 'Custom integrations', 'On-site training'],
                cta: 'Contact Us',
              },
            ].map(t => (
              <div
                key={t.tier}
                className={`rounded-2xl border p-5 sm:p-6 flex flex-col gap-4 ${
                  t.highlight
                    ? 'border-emerald-500/40 bg-emerald-900/20'
                    : 'border-emerald-900/50 bg-emerald-950/30'
                }`}
              >
                {t.highlight && (
                  <div className="text-[10px] font-semibold text-emerald-400 tracking-widest uppercase">Most Popular</div>
                )}
                <div>
                  <div className="text-sm font-semibold text-emerald-300">{t.tier}</div>
                  <div className="text-2xl font-bold text-green-50 mt-1">
                    {t.price}<span className="text-sm font-normal text-emerald-200/40">{t.period}</span>
                  </div>
                </div>
                <p className="text-xs text-emerald-200/40 leading-relaxed">{t.desc}</p>
                <ul className="space-y-1.5 flex-1">
                  {t.features.map(f => (
                    <li key={f} className="text-xs text-emerald-200/50 flex gap-2">
                      <span className="text-emerald-500 shrink-0">—</span> {f}
                    </li>
                  ))}
                </ul>
                <button className="py-2.5 rounded-xl border border-emerald-500/40 text-emerald-300 text-sm font-medium hover:bg-emerald-500/10 transition-colors">
                  {t.cta}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Purchase Request */}
          <div className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-5 sm:p-7">
            <h2 className="text-base font-semibold mb-1">Purchase Request</h2>
            <p className="text-xs text-emerald-200/40 mb-5">Interested in purchasing SWARM? Submit a request and we&apos;ll follow up with a custom quote.</p>
            {purchaseState === 'success' ? (
              <SuccessMessage message="We'll be in touch shortly with a custom quote for your operation." />
            ) : (
              <form onSubmit={makeHandler(setPurchaseState)} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input type="text" placeholder="Name" required className={inputClass} />
                  <input type="text" placeholder="Organization / Ranch" className={inputClass} />
                </div>
                <input type="email" placeholder="Email address" required className={inputClass} />
                <input type="text" placeholder="Operation size (acres)" className={inputClass} />
                <select className={`${inputClass} text-emerald-200/60`} defaultValue="">
                  <option value="" disabled>Select a pricing tier</option>
                  <option>Starter</option>
                  <option>Professional</option>
                  <option>Enterprise</option>
                </select>
                <textarea placeholder="Additional notes..." rows={2} className={`${inputClass} resize-none`} />
                <button type="submit" className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#050f07] font-semibold transition-all active:scale-95 shadow-lg shadow-emerald-500/20">
                  Submit Purchase Request
                </button>
              </form>
            )}
          </div>

          {/* Free Demo */}
          <div className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-5 sm:p-7">
            <h2 className="text-base font-semibold mb-1">Request a Free Demo</h2>
            <p className="text-xs text-emerald-200/40 mb-5">See SWARM in action before committing. We&apos;ll arrange an on-site or virtual demo for your team.</p>
            {demoState === 'success' ? (
              <SuccessMessage message="We'll contact you to schedule your free product demonstration." />
            ) : (
              <form onSubmit={makeHandler(setDemoState)} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input type="text" placeholder="Name" required className={inputClass} />
                  <input type="text" placeholder="Organization / Ranch" className={inputClass} />
                </div>
                <input type="email" placeholder="Email address" required className={inputClass} />
                <input type="text" placeholder="Location / State" className={inputClass} />
                <select className={`${inputClass} text-emerald-200/60`} defaultValue="">
                  <option value="" disabled>Preferred demo format</option>
                  <option>On-site visit</option>
                  <option>Virtual demo (video call)</option>
                  <option>Either works</option>
                </select>
                <button type="submit" className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#050f07] font-semibold transition-all active:scale-95 shadow-lg shadow-emerald-500/20">
                  Request Free Demo
                </button>
              </form>
            )}
          </div>

          {/* Join Waitlist */}
          <div className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-5 sm:p-7">
            <h2 className="text-base font-semibold mb-1">Join the Waitlist</h2>
            <p className="text-xs text-emerald-200/40 mb-5">Be first in line when SWARM becomes commercially available. Waitlist members receive early pricing.</p>
            {waitlistState === 'success' ? (
              <SuccessMessage message="You're on the list! We'll notify you when SWARM is ready to deploy." />
            ) : (
              <form onSubmit={makeHandler(setWaitlistState)} className="space-y-3">
                <input type="text" placeholder="Your name" required className={inputClass} />
                <input type="email" placeholder="Email address" required className={inputClass} />
                <input type="text" placeholder="State / Country" className={inputClass} />
                <button type="submit" className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#050f07] font-semibold transition-all active:scale-95 shadow-lg shadow-emerald-500/20">
                  Join Waitlist
                </button>
              </form>
            )}
          </div>

          {/* Distributor Inquiry */}
          <div className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-5 sm:p-7">
            <h2 className="text-base font-semibold mb-1">Distributor Inquiry</h2>
            <p className="text-xs text-emerald-200/40 mb-5">Interested in distributing SWARM to agricultural or wildlife management markets? Let&apos;s talk.</p>
            {distState === 'success' ? (
              <SuccessMessage message="Thank you for your interest in distribution. Our team will be in touch." />
            ) : (
              <form onSubmit={makeHandler(setDistState)} className="space-y-3">
                <input type="text" placeholder="Your name" required className={inputClass} />
                <input type="text" placeholder="Company name" required className={inputClass} />
                <input type="email" placeholder="Email address" required className={inputClass} />
                <input type="text" placeholder="Region / Territory" className={inputClass} />
                <textarea placeholder="Tell us about your distribution network..." rows={2} className={`${inputClass} resize-none`} />
                <button type="submit" className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#050f07] font-semibold transition-all active:scale-95 shadow-lg shadow-emerald-500/20">
                  Submit Distributor Inquiry
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Investor Inquiry */}
        <div className="rounded-2xl border border-emerald-700/40 bg-emerald-950/30 p-5 sm:p-8">
          <h2 className="text-base font-semibold mb-1">Investor Inquiry</h2>
          <p className="text-xs text-emerald-200/40 mb-6">
            SWARM is seeking early-stage investment to accelerate commercial development, expand our dataset, and scale manufacturing. If you&apos;re interested in backing us, we&apos;d love to connect.
          </p>
          {investState === 'success' ? (
            <SuccessMessage message="Thank you for your interest. Our team will reach out to schedule a conversation." />
          ) : (
            <form onSubmit={makeHandler(setInvestState)} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input type="text" placeholder="Your name" required className={inputClass} />
              <input type="text" placeholder="Fund / Organization" className={inputClass} />
              <input type="email" placeholder="Email address" required className={inputClass} />
              <input type="text" placeholder="Investment stage focus" className={inputClass} />
              <textarea placeholder="Tell us about your investment focus and interest in SWARM..." rows={3} className={`${inputClass} resize-none sm:col-span-2`} />
              <button type="submit" className="sm:col-span-2 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#050f07] font-semibold transition-all active:scale-95 shadow-lg shadow-emerald-500/20">
                Submit Investor Inquiry
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  )
}

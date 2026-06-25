'use client'
import { useState } from 'react'

type FormState = 'idle' | 'success'
type DemoType = 'demo' | 'presentation' | 'partnership' | 'media' | ''

export default function Contact() {
  const [contactState, setContactState] = useState<FormState>('idle')
  const [demoState, setDemoState] = useState<FormState>('idle')
  const [demoType, setDemoType] = useState<DemoType>('')

  function handleContact(e: React.FormEvent) {
    e.preventDefault()
    setContactState('success')
  }

  function handleDemo(e: React.FormEvent) {
    e.preventDefault()
    setDemoState('success')
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-[#050f07] border border-emerald-900/60 text-green-50 placeholder-emerald-900/80 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors'

  return (
    <div className="min-h-screen bg-[#050f07] text-green-50 overflow-x-hidden pt-16 sm:pt-40">

      {/* Page Header */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          Get in <span className="gradient-text">Touch</span>
        </h1>
        <p className="text-emerald-200/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Whether you&apos;re a rancher, wildlife manager, investor, or member of the press — we&apos;d love to hear from you.
        </p>
      </section>

      <div className="px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-16 sm:pb-24">

          {/* Left column: Contact Info */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-5 sm:p-6">
              <h2 className="text-sm font-semibold text-emerald-400 mb-4">Contact Information</h2>
              <div className="space-y-3">
                {[
                  {
                    label: 'Email',
                    value: 'team@swarmag.tech',
                    href: 'mailto:team@swarmag.tech',
                  },
                  {
                    label: 'Phone',
                    value: '1-800-SWARM-AG',
                    href: 'tel:18007927624',
                  },
                  {
                    label: 'Instagram',
                    value: '@swarmag',
                    href: 'https://instagram.com/swarmag',
                  },
                  {
                    label: 'LinkedIn',
                    value: 'Team SWARM',
                    href: 'https://linkedin.com/company/swarmag',
                  },
                  {
                    label: 'Website',
                    value: 'swarmag.tech',
                    href: 'https://swarmag.tech',
                  },
                ].map(c => (
                  <div key={c.label}>
                    <div className="text-[10px] text-emerald-500/50 uppercase tracking-widest mb-0.5">{c.label}</div>
                    <a
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-xs text-emerald-200/60 hover:text-emerald-300 transition-colors"
                    >
                      {c.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-5 sm:p-6">
              <h2 className="text-sm font-semibold text-emerald-400 mb-3">Response Time</h2>
              <p className="text-xs text-emerald-200/40 leading-relaxed">
                We typically respond within 24–48 hours. For urgent field inquiries, call our emergency line:
              </p>
              <p className="text-xs text-emerald-300 mt-2 font-medium">1-800-SWARM-AG (24/7)</p>
            </div>
          </div>

          {/* Right column: Forms */}
          <div className="lg:col-span-2 space-y-8">

            {/* Contact Form */}
            <div className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-5 sm:p-7">
              <h2 className="text-base font-semibold mb-5">Send Us a Message</h2>
              {contactState === 'success' ? (
                <div className="rounded-xl border border-emerald-700/40 bg-emerald-900/20 p-6 text-center">
                  <div className="text-emerald-400 font-semibold mb-1">Message sent!</div>
                  <p className="text-xs text-emerald-200/50">We&apos;ll get back to you within 24–48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleContact} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input type="text" placeholder="Your name" required className={inputClass} />
                    <input type="text" placeholder="Organization" className={inputClass} />
                  </div>
                  <input type="email" placeholder="Email address" required className={inputClass} />
                  <textarea
                    placeholder="Your message"
                    required
                    rows={4}
                    className={`${inputClass} resize-none`}
                  />
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#050f07] font-semibold transition-all active:scale-95 shadow-lg shadow-emerald-500/20"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Demo Request Form */}
            <div className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-5 sm:p-7">
              <h2 className="text-base font-semibold mb-2">Demo &amp; Inquiry Request</h2>
              <p className="text-xs text-emerald-200/40 mb-5">Select the type of inquiry and tell us more.</p>
              {demoState === 'success' ? (
                <div className="rounded-xl border border-emerald-700/40 bg-emerald-900/20 p-6 text-center">
                  <div className="text-emerald-400 font-semibold mb-1">Request received!</div>
                  <p className="text-xs text-emerald-200/50">Our team will reach out to schedule your request.</p>
                </div>
              ) : (
                <form onSubmit={handleDemo} className="space-y-3">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-1">
                    {[
                      { val: 'demo' as DemoType, label: 'Product Demo' },
                      { val: 'presentation' as DemoType, label: 'Presentation' },
                      { val: 'partnership' as DemoType, label: 'Partnership' },
                      { val: 'media' as DemoType, label: 'Media Inquiry' },
                    ].map(opt => (
                      <button
                        key={opt.val}
                        type="button"
                        onClick={() => setDemoType(opt.val)}
                        className={`py-2 px-3 rounded-lg border text-xs font-medium transition-colors ${
                          demoType === opt.val
                            ? 'border-emerald-500 bg-emerald-500/10 text-emerald-300'
                            : 'border-emerald-900/60 text-emerald-200/40 hover:border-emerald-700/60 hover:text-emerald-200/60'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input type="text" placeholder="Your name" required className={inputClass} />
                    <input type="text" placeholder="Organization" className={inputClass} />
                  </div>
                  <input type="email" placeholder="Email address" required className={inputClass} />
                  <textarea
                    placeholder="Tell us more about your interest or project..."
                    rows={3}
                    className={`${inputClass} resize-none`}
                  />
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#050f07] font-semibold transition-all active:scale-95 shadow-lg shadow-emerald-500/20"
                  >
                    Submit Request
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

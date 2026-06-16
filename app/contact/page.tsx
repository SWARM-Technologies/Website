export default function Contact() {
  return (
    <div className="min-h-screen bg-[#050f07] text-green-50 overflow-x-hidden pt-16 sm:pt-40">
      <section className="py-12 sm:py-24 px-4 sm:px-6">
        <div className="max-w-md mx-auto text-center space-y-5 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Ready to <span className="gradient-text">Get Protected?</span>
          </h2>
          <p className="text-sm sm:text-base text-emerald-200/50">
            Our team will assess your operation and have drones deployed within 72 hours.
          </p>
          <div className="rounded-2xl border border-emerald-900/50 bg-emerald-950/30 p-5 sm:p-7 space-y-3 sm:space-y-4 text-left">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl bg-[#050f07] border border-emerald-900/60 text-green-50 placeholder-emerald-900 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 rounded-xl bg-[#050f07] border border-emerald-900/60 text-green-50 placeholder-emerald-900 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
            <input
              type="text"
              placeholder="Operation size (acres)"
              className="w-full px-4 py-3 rounded-xl bg-[#050f07] border border-emerald-900/60 text-green-50 placeholder-emerald-900 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
            <button className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#050f07] font-semibold transition-all active:scale-95 shadow-lg shadow-emerald-500/25">
              Request Demo
            </button>
          </div>
          <p className="text-xs text-emerald-200/30">Emergency line: 1-800-SWARM-AG (24/7)</p>
        </div>
      </section>
    </div>
  )
}

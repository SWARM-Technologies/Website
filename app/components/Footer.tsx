import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-emerald-900/30 bg-[#050f07] pt-12 pb-8 px-6 mt-16">
      <div className="max-w-5xl mx-auto">

        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 mb-10">
          <div className="flex flex-col items-center sm:items-start gap-3 max-w-xs">
            <span className="text-xl font-bold tracking-wider text-emerald-400">SWARM</span>
            <p className="text-xs text-emerald-200/40 text-center sm:text-left leading-relaxed">
              Surveillance for Wildlife &amp; Agriculture Risk Management.
              Autonomous drone networks protecting livestock and wildlife from screwworm infestations.
            </p>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2 text-xs text-emerald-200/40 max-w-sm">
            <Link href="/solution" className="hover:text-emerald-300 transition-colors">Solution</Link>
            <Link href="/product" className="hover:text-emerald-300 transition-colors">Product</Link>
            <Link href="/market" className="hover:text-emerald-300 transition-colors">Market</Link>
            <Link href="/team" className="hover:text-emerald-300 transition-colors">Team</Link>
            <Link href="/collaborators" className="hover:text-emerald-300 transition-colors">Collaborators</Link>
            <Link href="/impact" className="hover:text-emerald-300 transition-colors">Impact</Link>
            <Link href="/contact" className="hover:text-emerald-300 transition-colors">Contact</Link>
            <Link href="/purchase" className="hover:text-emerald-300 transition-colors">Purchase</Link>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8 text-xs text-emerald-200/40">
          <a href="mailto:team@swarmag.tech" className="hover:text-emerald-300 transition-colors">
            team@swarmag.tech
          </a>
          <span className="hidden sm:inline text-emerald-900">·</span>
          <a href="tel:18007927624" className="hover:text-emerald-300 transition-colors">
            1-800-SWARM-AG
          </a>
          <span className="hidden sm:inline text-emerald-900">·</span>
          <a
            href="https://instagram.com/swarmag"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-300 transition-colors"
          >
            Instagram
          </a>
          <span className="hidden sm:inline text-emerald-900">·</span>
          <a
            href="https://linkedin.com/company/swarmag"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-300 transition-colors"
          >
            LinkedIn
          </a>
          <span className="hidden sm:inline text-emerald-900">·</span>
          <a
            href="https://swarmag.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-300 transition-colors"
          >
            swarmag.tech
          </a>
        </div>

        <div className="border-t border-emerald-900/20 pt-6 flex flex-col items-center gap-2 text-center">
          <p className="text-xs text-emerald-200/30">
            © 2026 Team SWARM. All Rights Reserved.
          </p>
          <p className="text-xs text-emerald-200/20">
            Created for the Conrad Challenge Innovation Competition.
          </p>
          <div className="flex gap-5 mt-2 text-xs text-emerald-200/20">
            <Link href="/privacy" className="hover:text-emerald-200/40 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-emerald-200/40 transition-colors">Terms of Use</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

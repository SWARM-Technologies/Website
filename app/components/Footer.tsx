export default function Footer() {
  return (
    <footer className="border-t border-emerald-900/30 py-8 px-6 text-center text-xs text-emerald-200/30">
      <span className="font-bold tracking-widest text-emerald-500">SWARM</span> Technologies —
      Surveillance for Wildlife and Agriculture Risk Management
      <br className="sm:hidden" />
      <span className="hidden sm:inline"> · </span>
      © {new Date().getFullYear()} All rights reserved.
    </footer>
  )
}

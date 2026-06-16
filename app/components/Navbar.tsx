'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import LogoWithoutTagline from '../../public/Logo without tagline.png'

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/solution', label: 'Solution' },
    { href: '/product-development', label: 'Product Dev' },
    { href: '/market-analysis', label: 'Market Analysis' },
    { href: '/team', label: 'Team' },
    { href: '/partners', label: 'Partners & Advisors' },
    { href: '/impact', label: 'Impact & Outreach' },
    { href: '/contact', label: 'Contact' },
    { href: '/purchase', label: 'Purchase' },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050f07]/80 backdrop-blur-md border-b border-emerald-900/30">

        {/* Mobile row */}
        <div className="flex sm:hidden items-center justify-between px-4 h-16">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image src={LogoWithoutTagline} alt="SWARM" className="h-12 w-auto rounded-2xl" />
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="p-2 text-emerald-400"
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop: single row, 3-column grid so links are truly centered */}
        <div className="hidden sm:grid grid-cols-[auto_1fr_auto] items-center px-8 h-24">
          {/* Left: logo */}
          <Link href="/">
            <Image src={LogoWithoutTagline} alt="SWARM" className="h-[88px] w-auto rounded-2xl" />
          </Link>

          {/* Center: nav links */}
          <div className="flex items-center justify-center gap-6 text-base text-emerald-200/60">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`whitespace-nowrap hover:text-emerald-300 transition-colors ${pathname === href ? 'text-emerald-300' : ''}`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right: CTA */}
          <div className="flex justify-end">
            <Link
              href="/contact"
              className="px-5 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-[#050f07] text-sm font-semibold transition-colors"
            >
              Get Protected
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 sm:hidden bg-[#050f07]/95 backdrop-blur-md border-b border-emerald-900/30 px-6 py-4 flex flex-col gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`py-3 border-b border-emerald-900/30 text-sm font-medium transition-colors ${pathname === href ? 'text-emerald-300' : 'text-emerald-200/60 hover:text-emerald-300'}`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-[#050f07] text-sm font-semibold transition-colors text-center"
          >
            Get Protected
          </Link>
        </div>
      )}
    </>
  )
}

'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LogoWithoutTagline from '../../public/Logo without tagline.png'

export default function Navbar() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home'},
    { href: '/how-it-works', label: 'Technology' },
    { href: '/team', label: 'Team' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-16 bg-[#050f07]/80 backdrop-blur-md border-b border-emerald-900/30">
      <Link href="/">
        <Image src={LogoWithoutTagline} alt="SWARM" className="h-10 w-auto" />
      </Link>
      <div className="hidden sm:flex items-center gap-8 text-sm text-emerald-200/60">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`hover:text-emerald-300 transition-colors ${pathname === href ? 'text-emerald-300' : ''}`}
          >
            {label}
          </Link>
        ))}
      </div>
      <Link
        href="/contact"
        className="px-5 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-[#050f07] text-sm font-semibold transition-colors"
      >
        Get Protected
      </Link>
    </nav>
  )
}

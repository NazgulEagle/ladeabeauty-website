"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Nails", href: "/nails" },
  { label: "Lashes", href: "/lashes" },
  { label: "Brows", href: "/brows" },
  { label: "Teeth Whitening", href: "/teeth-whitening" },
  { label: "PMU", href: "/pmu" },
  { label: "About Me", href: "/about-me" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-cream-dark">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-heading font-bold tracking-wide text-charcoal">
          LA DEA
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-charcoal-light hover:text-gold transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://www.ladeabeauty.be"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-5 py-2 bg-gold text-white text-sm font-medium rounded-full hover:bg-gold-dark transition-colors"
          >
            Boek nu
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-charcoal"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-white border-t border-cream-dark px-6 pb-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-3 text-charcoal-light hover:text-gold transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://www.ladeabeauty.be"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-center px-5 py-2 bg-gold text-white font-medium rounded-full hover:bg-gold-dark transition-colors"
          >
            Boek nu
          </a>
        </nav>
      )}
    </header>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-white mb-4">LA DEA</h3>
            <p className="text-sm leading-relaxed">
              Unleash Your Inner Goddess. Verfijning, zelfvertrouwen en een
              luxueuze beleving in het hart van Brugge.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">
              Behandelingen
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/nails" className="hover:text-gold transition-colors">Nails</Link></li>
              <li><Link href="/lashes" className="hover:text-gold transition-colors">Lashes</Link></li>
              <li><Link href="/brows" className="hover:text-gold transition-colors">Brows</Link></li>
              <li><Link href="/teeth-whitening" className="hover:text-gold transition-colors">Teeth Whitening</Link></li>
              <li><Link href="/pmu" className="hover:text-gold transition-colors">Permanente Make-Up</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Leopold I-Laan 1C, 8000 Brugge</li>
              <li>
                <a href="tel:+32479044131" className="hover:text-gold transition-colors">
                  0479 044 131
                </a>
              </li>
              <li>
                <a href="mailto:la-dea@outlook.com" className="hover:text-gold transition-colors">
                  la-dea@outlook.com
                </a>
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/ladeabeautybar_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@ladea_beauty"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
                aria-label="TikTok"
              >
                TikTok
              </a>
              <a
                href="https://www.facebook.com/ladea_beauty"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Opening hours */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">
            Openingsuren
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            <span>Ma: 09:00 – 19:00</span>
            <span>Di: 09:00 – 21:00</span>
            <span>Wo: 09:00 – 20:00</span>
            <span>Do: 09:00 – 21:00</span>
            <span>Vr: 09:00 – 18:30</span>
            <span>Za: 09:00 – 17:30</span>
            <span className="text-white/50">Zo: Gesloten</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-xs text-white/40 text-center">
          &copy; {new Date().getFullYear()} La Dea Beauty. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
}

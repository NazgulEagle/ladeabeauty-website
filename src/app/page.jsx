import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    title: "Nails",
    description:
      "Nette, stijlvolle en duurzame gelnagels — van subtiel tot gedetailleerde nail art.",
    price: "€63",
    href: "/nails",
    image: "/images/nails/nails-07.jpg",
  },
  {
    title: "Lashes",
    description:
      "Van natuurlijk elegant tot mega volume. Volledig op maat gemaakte wimperextensions.",
    price: "€90",
    href: "/lashes",
    image: "/images/lashes/lashes-01.jpg",
  },
  {
    title: "Brows",
    description:
      "Wenkbrauw shaping, tinting en styling voor de perfecte brow.",
    price: "€13,50",
    href: "/brows",
    image: "/images/brows/brows-01.jpg",
  },
  {
    title: "Teeth Whitening",
    description:
      "Veilig, pijnloos en zichtbaar witter in één sessie. Tot 16 tinten witter!",
    price: "€80",
    href: "/teeth-whitening",
    image: "/images/homepage/content-1.avif",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        <img
          src="/images/homepage/hero-1.jpg"
          alt="La Dea Beauty salon"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <span className="text-gold-light text-sm font-medium uppercase tracking-[0.3em]">
            La Dea Beauty — Brugge
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mt-4 mb-6 leading-tight text-white">
            Unleash Your
            <br />
            <span className="italic text-gold-light">Inner Goddess</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto">
            Verfijning, zelfvertrouwen en een luxueuze beleving. Ontdek onze
            premium beautybehandelingen in het hart van Brugge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.ladeabeauty.be"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gold text-white font-medium rounded-full hover:bg-gold-dark transition-colors"
            >
              Boek een afspraak
            </a>
            <a
              href="#services"
              className="px-8 py-3 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
            >
              Onze behandelingen
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Behandelingen"
            title="Wat wij bieden"
            description="Elke behandeling bij La Dea draait om verfijning, zelfvertrouwen en een luxueuze beleving — met uitsluitend premium producten en de nieuwste technieken."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* USP strip */}
      <section className="py-16 px-6 bg-cream">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="text-3xl font-heading font-bold text-gold mb-2">5.0</div>
            <p className="text-sm text-charcoal-light">
              Beoordeling op Treatwell (208 reviews)
            </p>
          </div>
          <div>
            <div className="text-3xl font-heading font-bold text-gold mb-2">Premium</div>
            <p className="text-sm text-charcoal-light">
              Uitsluitend hoogwaardige producten en technieken
            </p>
          </div>
          <div>
            <div className="text-3xl font-heading font-bold text-gold mb-2">Brugge</div>
            <p className="text-sm text-charcoal-light">
              Stijlvolle oase in het hart van de stad
            </p>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden">
            <img
              src="/images/about/bauke-portrait.jpg"
              alt="Bauke — oprichtster La Dea Beauty"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-gold text-sm font-medium uppercase tracking-widest">
              Over La Dea
            </span>
            <h2 className="text-3xl font-heading font-semibold mt-2 mb-4">
              Jouw schoonheid, onze passie
            </h2>
            <p className="text-charcoal-light leading-relaxed mb-4">
              &ldquo;Met LA DEA wil ik er alles aan doen om jou nog meer te
              laten stralen.&rdquo; — Bauke
            </p>
            <p className="text-charcoal-light leading-relaxed mb-6">
              De passie voor beauty komt vanuit de familie. In een modern en
              elegant ingericht salon bieden we behandelingen die jouw
              natuurlijke schoonheid versterken met zorg, vakmanschap en een
              persoonlijke touch.
            </p>
            <a
              href="/about-me"
              className="text-gold font-medium hover:text-gold-dark transition-colors"
            >
              Meer over mij &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-charcoal text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            Klaar om te stralen?
          </h2>
          <p className="text-white/70 mb-8">
            Boek online tot 3 maanden vooruit. Voor dringende afspraken, bel
            ons direct.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.ladeabeauty.be"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gold text-white font-medium rounded-full hover:bg-gold-dark transition-colors"
            >
              Boek online
            </a>
            <a
              href="tel:+32479044131"
              className="px-8 py-3 border border-white/20 font-medium rounded-full hover:bg-white/10 transition-colors"
            >
              Bel 0479 044 131
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

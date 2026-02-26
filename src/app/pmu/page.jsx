export const metadata = {
  title: "Permanente Make-Up (PMU) | La Dea Beauty Brugge",
  description:
    "Permanente make-up bij La Dea Beauty in Brugge. Powder brows, microblading, lip blush en eyeliner. Professionele PMU-behandelingen.",
};

export default function PMUPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-blush">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-gold text-sm font-medium uppercase tracking-widest">
            Brugge
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">
            Permanente Make-Up
          </h1>
          <p className="text-charcoal-light text-lg leading-relaxed max-w-xl mx-auto">
            Wakker worden met perfecte wenkbrauwen, lippen of eyeliner. Onze
            professionele PMU-behandelingen geven je een natuurlijk en
            langdurig resultaat.
          </p>
          <p className="text-xs text-charcoal-light/60 mt-4">
            Oorspronkelijk gepubliceerd op brugge.ladeabeauty.be
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="aspect-square bg-cream rounded-2xl flex items-center justify-center text-gold/20 text-8xl font-heading">
              P
            </div>

            <div>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                Wat is PMU?
              </h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Permanente make-up (PMU) is een cosmetische techniek waarbij
                pigment in de bovenste huidlaag wordt aangebracht. Het resultaat
                is subtiel, natuurlijk en gaat maanden tot jaren mee.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                Bij La Dea gebruiken we de nieuwste technieken en premium
                pigmenten voor een foutloos resultaat dat perfect bij jouw
                gezicht en huidskleur past.
              </p>
            </div>
          </div>

          {/* Treatment types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-cream rounded-2xl">
              <h3 className="text-xl font-heading font-semibold mb-3">
                Wenkbrauwen
              </h3>
              <p className="text-charcoal-light text-sm leading-relaxed mb-3">
                Powder brows, microblading of combo brows — voor perfecte,
                volle wenkbrauwen die er elke dag fantastisch uitzien.
              </p>
              <ul className="text-sm text-charcoal-light space-y-1">
                <li>- Powder brows</li>
                <li>- Microblading</li>
                <li>- Combo brows</li>
                <li>- Nanostrokes</li>
              </ul>
            </div>

            <div className="p-8 bg-cream rounded-2xl">
              <h3 className="text-xl font-heading font-semibold mb-3">
                Lippen
              </h3>
              <p className="text-charcoal-light text-sm leading-relaxed mb-3">
                Lip blush geeft je lippen een subtiele, natuurlijke kleur en
                definitie — alsof je altijd een vleugje tint draagt.
              </p>
              <ul className="text-sm text-charcoal-light space-y-1">
                <li>- Lip blush</li>
                <li>- Lipliner</li>
                <li>- Full lip color</li>
              </ul>
            </div>

            <div className="p-8 bg-cream rounded-2xl">
              <h3 className="text-xl font-heading font-semibold mb-3">
                Eyeliner
              </h3>
              <p className="text-charcoal-light text-sm leading-relaxed mb-3">
                Permanente eyeliner voor meer diepte en definitie in je blik —
                van een subtiele lashline tot een klassieke wing.
              </p>
              <ul className="text-sm text-charcoal-light space-y-1">
                <li>- Lashline enhancement</li>
                <li>- Classic eyeliner</li>
                <li>- Winged eyeliner</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Info box */}
      <section className="py-16 px-6 bg-cream">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-heading font-semibold mb-4">
            Goed om te weten
          </h2>
          <div className="text-charcoal-light text-sm leading-relaxed space-y-3">
            <p>
              PMU is een semi-permanente behandeling. Het resultaat gaat
              gemiddeld 1,5 tot 2 jaar mee, afhankelijk van huidtype en
              levensstijl.
            </p>
            <p>
              Een touch-up sessie (4-6 weken na de eerste behandeling) is
              inbegrepen om het resultaat te perfectioneren.
            </p>
            <p>
              Neem vooraf contact op voor een gratis consult — we bespreken je
              wensen en adviseren de beste aanpak.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-2xl font-heading font-semibold mb-4">
          Interesse in permanente make-up?
        </h2>
        <p className="text-charcoal-light mb-6">
          Neem contact op voor een gratis consult of boek direct een afspraak.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.ladeabeauty.be"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gold text-white font-medium rounded-full hover:bg-gold-dark transition-colors"
          >
            Boek een consult
          </a>
          <a
            href="tel:+32479044131"
            className="px-8 py-3 border border-charcoal/20 text-charcoal font-medium rounded-full hover:bg-cream transition-colors"
          >
            0479 044 131
          </a>
        </div>
      </section>
    </>
  );
}

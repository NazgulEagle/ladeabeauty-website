export const metadata = {
  title: "Over mij | La Dea Beauty Brugge",
  description:
    "Ontmoet Bauke, oprichtster van La Dea Beauty in Brugge. Passie voor beauty die vanuit de familie komt.",
};

export default function AboutMePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-blush">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-gold text-sm font-medium uppercase tracking-widest">
            Over La Dea
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">
            About Me
          </h1>
          <p className="text-charcoal-light text-lg leading-relaxed max-w-xl mx-auto">
            De vrouw achter La Dea Beauty.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden">
            <img src="/images/about/bauke-portrait.jpg" alt="Bauke — oprichtster La Dea Beauty" className="w-full h-full object-cover" />
          </div>

          <div>
            <h2 className="text-3xl font-heading font-semibold mb-6">
              Bauke
            </h2>
            <blockquote className="border-l-4 border-gold pl-4 mb-6 italic text-charcoal-light text-lg">
              &ldquo;Met LA DEA wil ik er alles aan doen om jou nog meer te
              laten stralen.&rdquo;
            </blockquote>
            <p className="text-charcoal-light leading-relaxed mb-4">
              De passie voor beauty komt vanuit de familie. Wat begon als een
              liefde voor esthetiek groeide uit tot La Dea Beauty — een
              plek waar verfijning, zelfvertrouwen en een luxueuze beleving
              centraal staan.
            </p>
            <p className="text-charcoal-light leading-relaxed mb-4">
              In een modern en elegant ingericht salon in het hart van Brugge
              bied ik behandelingen die jouw natuurlijke schoonheid versterken
              met zorg, vakmanschap en een persoonlijke touch.
            </p>
            <p className="text-charcoal-light leading-relaxed mb-8">
              Ik gebruik uitsluitend premium producten en de nieuwste technieken
              om een foutloos resultaat te garanderen. Elke behandeling bij La
              Dea is een ervaring — van het moment dat je binnenstapt tot het
              moment dat je de deur uitloopt met een glimlach.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.ladeabeauty.be"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gold text-white font-medium rounded-full hover:bg-gold-dark transition-colors text-center"
              >
                Boek een afspraak
              </a>
              <a
                href="mailto:la-dea@outlook.com"
                className="px-8 py-3 border border-charcoal/20 text-charcoal font-medium rounded-full hover:bg-cream transition-colors text-center"
              >
                Stuur een bericht
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-cream">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-semibold">
              Waar La Dea voor staat
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl">
              <div className="text-3xl mb-4 text-gold font-heading font-bold">
                Verfijning
              </div>
              <p className="text-charcoal-light text-sm leading-relaxed">
                Elke behandeling wordt met precisie en aandacht voor detail
                uitgevoerd.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl">
              <div className="text-3xl mb-4 text-gold font-heading font-bold">
                Zelfvertrouwen
              </div>
              <p className="text-charcoal-light text-sm leading-relaxed">
                Het doel is dat je vol vertrouwen de salon verlaat — stralend en
                zelfverzekerd.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl">
              <div className="text-3xl mb-4 text-gold font-heading font-bold">
                Luxe
              </div>
              <p className="text-charcoal-light text-sm leading-relaxed">
                Een luxueuze beleving met premium producten in een stijlvol
                ingericht salon.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

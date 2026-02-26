import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Teeth Whitening | La Dea Beauty Brugge",
  description:
    "Tandenbleaching bij La Dea Beauty in Brugge. Veilig, pijnloos en zichtbaar witter in één sessie. Boek nu!",
};

export default function TeethWhiteningPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-blush">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-gold text-sm font-medium uppercase tracking-widest">
            Behandeling
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">
            Teeth Whitening
          </h1>
          <p className="text-charcoal-light text-lg leading-relaxed max-w-xl mx-auto">
            Veilig, pijnloos en zichtbaar witter in één sessie. Een stralende
            glimlach heeft nog nooit zo makkelijk bereikbaar geweest.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="aspect-square bg-cream rounded-2xl flex items-center justify-center text-gold/20 text-8xl font-heading">
            T
          </div>

          <div>
            <h2 className="text-2xl font-heading font-semibold mb-4">
              Hoe werkt het?
            </h2>
            <p className="text-charcoal-light leading-relaxed mb-6">
              Onze professionele tandenbleaching is snel, veilig en effectief.
              In slechts één sessie zie je al merkbaar resultaat — zonder pijn
              en zonder schade aan je tanden.
            </p>

            <ul className="space-y-3 text-charcoal-light">
              <li className="flex gap-3">
                <span className="text-gold mt-1">&#10003;</span>
                <span>Veilig en pijnloos proces</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">&#10003;</span>
                <span>Zichtbaar resultaat in één sessie</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">&#10003;</span>
                <span>Geen schade aan tandglazuur</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">&#10003;</span>
                <span>Langdurig effect bij goed onderhoud</span>
              </li>
            </ul>

            <div className="mt-8 space-y-3">
              <div className="flex justify-between p-4 bg-cream rounded-xl">
                <div>
                  <span className="font-medium">Teeth whitening</span>
                  <span className="text-charcoal-light text-sm ml-2">(40 min)</span>
                </div>
                <span className="font-heading text-lg text-gold font-semibold">€80 – €89</span>
              </div>
              <div className="flex justify-between p-4 bg-cream rounded-xl">
                <div>
                  <span className="font-medium">Touch up treatment</span>
                  <span className="text-charcoal-light text-sm ml-2">(25 min)</span>
                </div>
                <span className="font-heading text-lg text-gold font-semibold">€58,50 – €65</span>
              </div>
              <p className="text-xs text-charcoal-light/70 mt-2">
                Tot 16 tinten witter! Peroxide vrij. Tast de structuur en glazuur niet aan.
                Aftercare: 30 min niks gekleurd eten/drinken; 12u geen koffie, thee, rode wijn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-cream text-center">
        <h2 className="text-2xl font-heading font-semibold mb-4">
          Klaar voor een stralende glimlach?
        </h2>
        <p className="text-charcoal-light mb-6">
          Boek online of bel ons voor een afspraak.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.ladeabeauty.be"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gold text-white font-medium rounded-full hover:bg-gold-dark transition-colors"
          >
            Boek nu
          </a>
          <a
            href="tel:+32479044131"
            className="px-8 py-3 border border-charcoal/20 text-charcoal font-medium rounded-full hover:bg-white transition-colors"
          >
            0479 044 131
          </a>
        </div>
      </section>
    </>
  );
}

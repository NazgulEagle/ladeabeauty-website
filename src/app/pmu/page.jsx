import SectionHeading from "@/components/SectionHeading";
import PriceTable from "@/components/PriceTable";

export const metadata = {
  title: "Permanente Make-Up (PMU) | La Dea Beauty Brugge",
  description:
    "Permanente make-up bij La Dea Beauty in Brugge. Powderbrows, Lip Blush en Deepliner door onze gespecialiseerde PMU-artist. Boek nu!",
};

const prices = [
  { name: "Wenkbrauwen (Powderbrows)", duration: "75 min", price: "€350" },
  { name: "Lippen (Lip Blush)", duration: "75 min", price: "€350" },
  { name: "Eyeliner / Deepliner", duration: "75 min", price: "€225" },
  { name: "Touch-up brows", duration: "30 min", price: "€50" },
  { name: "Touch-up deepliner", duration: "30 min", price: "€50" },
  { name: "Touch-up lips", duration: "45 min", price: "€50" },
  { name: "Adviesgesprek", duration: "20 min", price: "Gratis" },
];

export default function PMUPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-blush">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-gold text-sm font-medium uppercase tracking-widest">
            Nieuw bij La Dea
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">
            Permanente Make-Up
          </h1>
          <p className="text-charcoal-light text-lg leading-relaxed max-w-xl mx-auto">
            Word elke dag wakker met een perfect verzorgde look. Onze
            PMU-specialiste brengt subtiele, natuurlijke resultaten die jouw
            unieke schoonheid versterken.
          </p>
        </div>
      </section>

      {/* Video + intro */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square rounded-2xl overflow-hidden bg-charcoal">
            <video
              src="/images/pmu/pmu-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl font-heading font-semibold mb-4">
              Onze PMU-behandelingen
            </h2>
            <p className="text-charcoal-light leading-relaxed mb-6">
              Powderbrows, Lip Blush en permanente eyeliner door onze
              gespecialiseerde PMU-artist. Elke behandeling wordt met precisie en
              zorg uitgevoerd voor een subtiel, natuurlijk resultaat.
            </p>

            <ul className="space-y-3 text-charcoal-light">
              <li className="flex gap-3">
                <span className="text-gold mt-1">&#10003;</span>
                <span>Subtiele, natuurlijke resultaten</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">&#10003;</span>
                <span>Premium pigmenten afgestemd op je huidskleur</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">&#10003;</span>
                <span>Gratis adviesgesprek voorafgaand</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">&#10003;</span>
                <span>Touch-up inbegrepen voor perfectie</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Three treatments */}
      <section className="py-20 px-6 bg-cream">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Behandelingen"
            title="Drie specialisaties"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/pmu/lip-blush-1.png"
                  alt="Powderbrows resultaat La Dea Beauty"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-2">
                  Powderbrows
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  Een zachte, poederachtige wenkbrauw met een natuurlijk
                  ombr&eacute;-effect. Perfect voor een volle, gedefinieerde brow
                  die er altijd verzorgd uitziet.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/pmu/lip-blush-2.png"
                  alt="Lip Blush resultaat La Dea Beauty"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-2">
                  Lip Blush
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  Een subtiele kleurverbetering van de lippen voor een
                  natuurlijke, frisse uitstraling. Geeft definitie, kleur en
                  volume zonder lipstick.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/pmu/deepliner-1.png"
                  alt="Deepliner permanente eyeliner resultaat"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-2">
                  Deepliner
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  Een onzichtbare eyeliner die de wimperrand subtiel verdikt. Je
                  ogen lijken groter en expressiever, zonder dat het opvalt als
                  make-up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-2xl">
          <SectionHeading eyebrow="Prijzen" title="PMU prijslijst" />
          <PriceTable items={prices} />
        </div>
      </section>

      {/* Availability */}
      <section className="py-16 px-6 bg-cream">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-gold text-sm font-medium uppercase tracking-widest">
            Beschikbaarheid
          </span>
          <h2 className="text-2xl font-heading font-semibold mt-2 mb-4">
            Elke 2 weken op dinsdag
          </h2>
          <p className="text-charcoal-light leading-relaxed mb-2">
            Onze PMU-specialiste is vanaf 31 maart 2026 elke twee weken op
            dinsdag de hele dag aanwezig bij La Dea Beauty in Brugge.
          </p>
          <p className="text-charcoal-light/60 text-sm">
            Neem contact op voor de eerstvolgende beschikbare datum.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-charcoal text-white text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-4">
          Interesse in permanente make-up?
        </h2>
        <p className="text-white/70 mb-6">
          Boek een gratis adviesgesprek of maak direct een afspraak.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.ladeabeauty.be"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gold text-white font-medium rounded-full hover:bg-gold-dark transition-colors"
          >
            Boek je PMU-afspraak
          </a>
          <a
            href="tel:+32479044131"
            className="px-8 py-3 border border-white/20 font-medium rounded-full hover:bg-white/10 transition-colors"
          >
            0479 044 131
          </a>
        </div>
      </section>
    </>
  );
}

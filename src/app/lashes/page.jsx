import SectionHeading from "@/components/SectionHeading";
import PriceTable from "@/components/PriceTable";

export const metadata = {
  title: "Lashes | La Dea Beauty Brugge",
  description:
    "Wimperextensions en lash lift bij La Dea Beauty in Brugge. Van natuurlijk elegant tot mega volume. Boek nu!",
};

const newSets = [
  { name: "One by one — nieuwe set", duration: "2 uur", price: "€90 – €100" },
  { name: "Hybride — nieuwe set", duration: "2 uur", price: "€99 – €110" },
  { name: "Soft volume — nieuwe set", duration: "2 uur", price: "€108 – €120" },
  { name: "Volume — nieuwe set", duration: "2 uur", price: "€117 – €130" },
  { name: "Mega volume — nieuwe set", duration: "2 uur", price: "€126 – €140" },
];

const touchups = [
  { name: "Bijwerking binnen 2 weken", duration: "45 min", price: "vanaf €47,70" },
  { name: "Bijwerking binnen 3 weken", duration: "1 uur", price: "vanaf €61,20" },
  { name: "Bijwerking binnen 4 weken", duration: "1u15", price: "vanaf €74,70" },
];

const extras = [
  { name: "Lash Lift", price: "€65" },
  { name: "Verwijderen wimperextensions", duration: "20 min", price: "€18 – €20" },
];

export default function LashesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-blush">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-gold text-sm font-medium uppercase tracking-widest">
            Behandeling
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">
            Lashes
          </h1>
          <p className="text-charcoal-light text-lg leading-relaxed max-w-xl mx-auto">
            Van natuurlijk elegant tot mega volume — volledig op maat gemaakte
            wimperextensions en professionele lash lifts voor een open, frisse
            blik.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="aspect-square rounded-2xl overflow-hidden">
            <img src="/images/lashes/lashes-01.jpg" alt="Wimperextensions La Dea Beauty" className="w-full h-full object-cover" />
          </div>

          <div>
            <h2 className="text-2xl font-heading font-semibold mb-4">
              Wimperextensions
            </h2>
            <p className="text-charcoal-light leading-relaxed mb-6">
              Elke set wimperextensions wordt volledig op maat gemaakt — van
              natural en elegant tot dramatic en mega volume. We gebruiken
              uitsluitend premium wimpers voor een comfortabel en langdurig
              resultaat.
            </p>

            <h2 className="text-2xl font-heading font-semibold mb-4">
              Lash Lift
            </h2>
            <p className="text-charcoal-light leading-relaxed mb-6">
              Een lash lift geeft je een open, frisse blik zonder extensions. Je
              eigen wimpers worden gelift en gekruld voor een natuurlijk
              resultaat dat weken meegaat.
            </p>

            <ul className="space-y-3 text-charcoal-light">
              <li className="flex gap-3">
                <span className="text-gold mt-1">&#10003;</span>
                <span>Persoonlijk consult voor de perfecte look</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">&#10003;</span>
                <span>Premium materialen voor comfort</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">&#10003;</span>
                <span>Langdurig resultaat — 3 tot 5 weken</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6 bg-cream">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Galerij" title="Ons werk" />
          <div className="grid grid-cols-3 md:grid-cols-7 gap-2">
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map((n) => (
              <div key={n} className="aspect-square rounded-lg overflow-hidden">
                <img src={`/images/lashes/lashes-${String(n).padStart(2,"0")}.jpg`} alt={`Lash extensions ${n}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-2xl space-y-8">
          <SectionHeading eyebrow="Prijzen" title="Lashes prijslijst" />
          <h3 className="text-lg font-heading font-semibold">Nieuwe set</h3>
          <PriceTable items={newSets} />
          <h3 className="text-lg font-heading font-semibold mt-8">Bijwerkingen</h3>
          <PriceTable items={touchups} />
          <h3 className="text-lg font-heading font-semibold mt-8">Overig</h3>
          <PriceTable items={extras} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-2xl font-heading font-semibold mb-4">
          Klaar voor een betoverende blik?
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
            className="px-8 py-3 border border-charcoal/20 text-charcoal font-medium rounded-full hover:bg-cream transition-colors"
          >
            0479 044 131
          </a>
        </div>
      </section>
    </>
  );
}

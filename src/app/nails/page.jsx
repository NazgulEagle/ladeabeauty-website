import SectionHeading from "@/components/SectionHeading";
import PriceTable from "@/components/PriceTable";

export const metadata = {
  title: "Nails | La Dea Beauty Brugge",
  description:
    "Nette, stijlvolle en duurzame gelnagels bij La Dea Beauty in Brugge. Van subtiel tot gedetailleerde nail art. Boek nu vanaf €60.",
};

const newSets = [
  { name: "Gelnagels kort (geen vrije boord)", duration: "1 uur", price: "€63 – €70" },
  { name: "Gelnagels medium verlenging", duration: "1u30", price: "€76,50 – €85" },
  { name: "Gelnagels long verlenging", duration: "2 uur", price: "€85,50 – €95" },
  { name: "Gelnagels XL (>1cm)", duration: "2 uur", price: "€99 – €110" },
  { name: "Rubberbase / gellak", duration: "1 uur", price: "€49,50 – €55" },
];

const refills = [
  { name: "Bijwerken kort", duration: "1 uur", price: "€58,50 – €65" },
  { name: "Bijwerken medium", duration: "1u15", price: "€63 – €70" },
  { name: "Bijwerken long", duration: "1u30", price: "€72 – €80" },
  { name: "Bijwerken XL", duration: "1u30", price: "€85,50 – €95" },
];

const extras = [
  { name: "Verwijderen gelnagels", duration: "15 min", price: "€18 – €20" },
  { name: "Nagelreparatie", duration: "5 min", price: "€4,50 – €5" },
  { name: "Bijwerken +4 weken toeslag", duration: "5 min", price: "€4,50 – €5" },
];

export default function NailsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-blush">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-gold text-sm font-medium uppercase tracking-widest">
            Behandeling
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">
            Nails
          </h1>
          <p className="text-charcoal-light text-lg leading-relaxed max-w-xl mx-auto">
            Nette, stijlvolle en duurzame gelnagels — van subtiel tot
            gedetailleerde nail art. Elke set wordt met precisie en zorg
            aangebracht voor een foutloos resultaat.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="aspect-square rounded-2xl overflow-hidden">
            <img src="/images/nails/nails-07.jpg" alt="Gelnagels La Dea Beauty" className="w-full h-full object-cover" />
          </div>

          <div>
            <h2 className="text-2xl font-heading font-semibold mb-4">
              Wat kun je verwachten?
            </h2>
            <ul className="space-y-3 text-charcoal-light">
              <li className="flex gap-3">
                <span className="text-gold mt-1">&#10003;</span>
                <span>Uitgebreid kleurconsult en design advies</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">&#10003;</span>
                <span>Professionele gelproducten voor langdurig resultaat</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">&#10003;</span>
                <span>Van klassiek nude tot opvallende nail art</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">&#10003;</span>
                <span>Zorgvuldige nagelvoorbereiding en afwerking</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">&#10003;</span>
                <span>Duurzaam resultaat — 3 tot 4 weken draagbaar</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6 bg-cream">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Galerij" title="Ons werk" />
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {[1,2,3,4,5,6,8,9,10,11,12,13].map((n) => (
              <div key={n} className="aspect-square rounded-lg overflow-hidden">
                <img src={`/images/nails/nails-${String(n).padStart(2,"0")}.jpg`} alt={`Nail art ${n}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-2xl space-y-8">
          <SectionHeading eyebrow="Prijzen" title="Nails prijslijst" />
          <h3 className="text-lg font-heading font-semibold">Nieuwe set</h3>
          <PriceTable items={newSets} />
          <h3 className="text-lg font-heading font-semibold mt-8">Bijwerken</h3>
          <PriceTable items={refills} />
          <h3 className="text-lg font-heading font-semibold mt-8">Overig</h3>
          <PriceTable items={extras} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-2xl font-heading font-semibold mb-4">
          Klaar voor een nieuwe set?
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

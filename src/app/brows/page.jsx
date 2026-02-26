import SectionHeading from "@/components/SectionHeading";
import PriceTable from "@/components/PriceTable";

export const metadata = {
  title: "Brows | La Dea Beauty Brugge",
  description:
    "Wenkbrauw shaping, tinting en styling bij La Dea Beauty in Brugge. Perfecte brows vanaf €15. Boek nu!",
};

const prices = [
  { name: "Henna brows (shaping & waxing incl.)", duration: "1 uur", price: "€49,50 – €55" },
  { name: "Brow lamination + tint + vitamin", duration: "1 uur", price: "€61,20 – €68" },
  { name: "Brow touch up + brow tinting", duration: "20 min", price: "€27 – €30" },
  { name: "Brow touch up + bovenlip", duration: "15 min", price: "€18 – €20" },
  { name: "Brow touch up", duration: "15 min", price: "€13,50 – €15" },
  { name: "Brow tinting", duration: "20 min", price: "€13,50 – €15" },
];

export default function BrowsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-blush">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-gold text-sm font-medium uppercase tracking-widest">
            Behandeling
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">
            Brows
          </h1>
          <p className="text-charcoal-light text-lg leading-relaxed max-w-xl mx-auto">
            Perfecte wenkbrauwen die je gezicht omlijsten. Van shaping en
            tinting tot volledige styling — altijd op maat van jouw
            gezichtsvorm.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="aspect-square rounded-2xl overflow-hidden">
            <img src="/images/brows/brows-01.jpg" alt="Wenkbrauw behandeling La Dea Beauty" className="w-full h-full object-cover" />
          </div>

          <div>
            <h2 className="text-2xl font-heading font-semibold mb-4">
              Onze brow behandelingen
            </h2>
            <p className="text-charcoal-light leading-relaxed mb-6">
              Je wenkbrauwen zijn het frame van je gezicht. Bij La Dea zorgen
              we voor de perfecte vorm, kleur en stijl die bij jou past. Of je
              nu gaat voor een subtiele verbetering of een complete
              transformatie.
            </p>

            <ul className="space-y-3 text-charcoal-light">
              <li className="flex gap-3">
                <span className="text-gold mt-1">&#10003;</span>
                <span>Shaping — perfecte vorm op maat van je gezicht</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">&#10003;</span>
                <span>Tinting — kleur die je brows definieert</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">&#10003;</span>
                <span>Styling — volledig gestructureerde, volle brows</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">&#10003;</span>
                <span>Persoonlijk advies voor onderhoud thuis</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-cream">
        <div className="mx-auto max-w-2xl">
          <SectionHeading eyebrow="Prijzen" title="Brows prijslijst" />
          <PriceTable items={prices} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-2xl font-heading font-semibold mb-4">
          Klaar voor perfecte brows?
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

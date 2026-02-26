import Link from "next/link";

export default function ServiceCard({ title, description, price, href, image }) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
    >
      <div className="aspect-[4/3] bg-cream relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gold/30 text-6xl font-heading">
            {title[0]}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-heading font-semibold mb-2">{title}</h3>
        <p className="text-charcoal-light text-sm leading-relaxed mb-3">{description}</p>
        {price && (
          <span className="text-gold font-medium text-sm">Vanaf {price}</span>
        )}
      </div>
    </Link>
  );
}

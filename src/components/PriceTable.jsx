export default function PriceTable({ items }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      {items.map((item, i) => (
        <div
          key={i}
          className={`flex items-center justify-between px-6 py-4 ${
            i < items.length - 1 ? "border-b border-cream-dark" : ""
          }`}
        >
          <div>
            <span className="font-medium">{item.name}</span>
            {item.duration && (
              <span className="text-charcoal-light text-sm ml-2">({item.duration})</span>
            )}
          </div>
          <span className="font-heading text-lg text-gold font-semibold">{item.price}</span>
        </div>
      ))}
    </div>
  );
}

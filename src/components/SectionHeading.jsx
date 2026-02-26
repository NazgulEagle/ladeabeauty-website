export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      {eyebrow && (
        <span className="text-gold text-sm font-medium uppercase tracking-widest">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-heading font-semibold mt-2 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-charcoal-light leading-relaxed">{description}</p>
      )}
    </div>
  );
}

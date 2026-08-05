const BENEFITS = [
  {
    tag: "PERFORMANCE",
    title: "Continuous insulation",
    text: "A fully adhered, continuous insulation layer that applies directly over most existing roofs, eliminating costly tear-off and landfill waste.",
  },
  {
    tag: "PROTECTION",
    title: "Seamless waterproofing",
    text: "A fully adhered, seamless membrane that resists leaks and stays weather resistant from day one.",
  },
  {
    tag: "PERFORMANCE",
    title: "Monolithic assembly",
    text: "Metal, concrete, single-ply: this fully adhered system bonds to nearly any substrate.",
  },
  {
    tag: "ECONOMICS",
    title: "Predictable maintenance",
    text: "Fewer seams and penetrations mean fewer places for problems to start, and lower lifecycle costs over time.",
  },
  {
    tag: "PERFORMANCE",
    title: "Superior thermal efficiency",
    text: "Aged R-value of 6.7 per inch, among the best insulating roof systems available, reducing energy consumption year-round.",
  },
  {
    tag: "PROTECTION",
    title: "Wind and weather resistant",
    text: "A monolithic membrane that flexes with the structure instead of cracking under wind and thermal movement.",
  },
  {
    tag: "ECONOMICS",
    title: "Lightweight system",
    text: "Adds minimal structural load compared to traditional roofing systems, keeping installation costs down.",
  },
  {
    tag: "PROTECTION",
    title: "Fire and UV resistant",
    text: "Meets UL 790 and UL 723 standards for fire performance, Class A rated.",
  },
  {
    tag: "SUSTAINABILITY",
    title: "Clean, modern material",
    text: "Asbestos and formaldehyde free, with no hidden health liabilities.",
  },
  {
    tag: "SUSTAINABILITY",
    title: "Renewable, long-life system",
    text: "Designed to be renewed rather than replaced, with decades of verified field performance.",
    lastInRow: true,
  },
];

export default function WhySprayFoam() {
  return (
    <section id="why">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">The High-Performance Difference</span>
          <h2>Built for performance, protection, and long-term value.</h2>
          <p>
            This isn&apos;t just another roof. It&apos;s a seamless, high-performance roofing
            system engineered to insulate, waterproof, and protect your building, while lowering
            energy costs and extending roof life.
          </p>
        </div>
        <div className="benefits-wrap reveal">
          <div className="benefit-grid">
            {BENEFITS.map((b) => (
              <div
                className="benefit"
                key={b.tag}
                style={b.lastInRow ? { borderRight: "none" } : undefined}
              >
                <h3>
                  {b.title} <span className="tag">{b.tag}</span>
                </h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

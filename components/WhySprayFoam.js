const BENEFITS = [
  {
    tag: "01",
    title: "Versatile application",
    text: "Applies to irregular shapes and penetrations, often directly over your existing roof, eliminating costly tear-off and landfill waste.",
  },
  {
    tag: "02",
    title: "Stops leaks",
    text: "Fully adhered, seamless membrane that's weather resistant from day one.",
  },
  {
    tag: "03",
    title: "Adheres to most surfaces",
    text: "Metal, concrete, single-ply: spray foam bonds to nearly any substrate.",
  },
  {
    tag: "04",
    title: "Simplifies maintenance",
    text: "Fewer seams and penetrations mean fewer places for problems to start.",
  },
  {
    tag: "05",
    title: "Superior insulation",
    text: "Aged R-value of 6.7 per inch, among the best insulating roof systems available.",
  },
  {
    tag: "06",
    title: "Reduces building movement",
    text: "A monolithic membrane that flexes with the structure instead of cracking.",
  },
  {
    tag: "07",
    title: "Lightweight system",
    text: "Adds minimal structural load compared to traditional roofing systems.",
  },
  {
    tag: "08",
    title: "UL 790 Class A fire rated",
    text: "Meets UL 790 and UL 723 standards for fire performance.",
  },
  {
    tag: "09",
    title: "Asbestos & formaldehyde free",
    text: "A clean, modern material with no hidden health liabilities.",
  },
  {
    tag: "10",
    title: "35+ years proven",
    text: "A roofing and insulation system with decades of verified field performance.",
    lastInRow: true,
  },
];

export default function WhySprayFoam() {
  return (
    <section id="why">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Why Spray Foam</span>
          <h2>One roof system, fewer headaches.</h2>
          <p>
            Spray polyurethane foam applies directly over most existing roofs, no tear-off,
            no landfill waste, and a roof that keeps performing for decades.
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

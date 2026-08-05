"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What is a high-performance roofing system?",
    a: "A seamless, fully adhered roofing assembly, built with spray polyurethane foam, that insulates, waterproofs, and protects your building while lowering energy costs and extending roof life. It's a complete building envelope solution, not just a roofing product.",
  },
  {
    q: "Do you have to tear off my existing roof first?",
    a: "Usually not. In most cases the system can be applied directly over your existing roof, avoiding the cost, downtime, and landfill waste of a tear-off.",
  },
  {
    q: "How often should a commercial roof be maintained?",
    a: "At least twice a year, plus after major storms. A maintenance plan protects your roofing asset by catching small issues before they become costly leaks or an early replacement.",
  },
  {
    q: "What's included in a Cook Coatings maintenance plan?",
    a: "Scheduled inspections, minor repairs, drainage and debris checks, and priority response if something comes up between visits, delivering predictable costs instead of surprise ones.",
  },
  {
    q: "What areas do you service?",
    a: "CCI is licensed in California, Arizona, and Nevada, with completed commercial projects nationwide and select international locations.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" style={{ background: "var(--white)", borderTop: "1px solid var(--line)" }}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Common Questions</span>
          <h2>Frequently asked questions.</h2>
        </div>
        <div className="faq-list reveal">
          {FAQS.map((item, i) => (
            <div className={`faq-item${openIndex === i ? " open" : ""}`} key={item.q}>
              <button
                className="faq-q"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{item.q}</span>
                <span className="plus">+</span>
              </button>
              <div className="faq-a">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

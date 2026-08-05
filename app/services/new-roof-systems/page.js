import Link from "next/link";
import Header from "@/components/Header";
import MobileActionBar from "@/components/MobileActionBar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "High-Performance Roofing System Installation | Cook Coatings Inc",
  description:
    "Cook Coatings installs seamless, high-performance roofing systems for commercial and industrial buildings, applied directly over most existing roofs to insulate, waterproof, and lower energy costs. Licensed in CA, AZ, and NV, serving clients nationwide.",
  alternates: {
    canonical: "https://www.cookcoatingsinc.com/services/new-roof-systems",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cookcoatingsinc.com/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "New Roof System Applications",
      item: "https://www.cookcoatingsinc.com/services/new-roof-systems",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "New Roof System Applications",
  serviceType: "High-performance commercial roofing system installation",
  provider: { "@type": "RoofingContractor", name: "Cook Coatings Inc" },
  areaServed: "United States",
  description:
    "A seamless, fully adhered, high-performance roofing system for commercial and industrial buildings, applied directly over most existing roofs to insulate, waterproof, and lower energy costs without a full tear-off.",
};

const PROCESS = [
  {
    title: "Roof Assessment",
    text: "We inspect the existing roof for moisture, structural, and drainage issues before any work begins, so the new system is designed for what's actually underneath it.",
  },
  {
    title: "Surface Preparation",
    text: "The substrate is cleaned and prepped so the foam fully bonds, whether it's metal, concrete, single-ply, or another existing commercial roofing material.",
  },
  {
    title: "Spray Foam Application",
    text: "SPF is spray-applied on site in controlled passes. It expands and cures within seconds into a seamless membrane that follows the roof's exact contours, including penetrations and equipment curbs, without seams or fasteners for water to find.",
  },
  {
    title: "Protective Topcoat",
    text: "An elastomeric coating is applied over the cured foam to protect it from UV exposure and foot traffic, engineered per roof to reach the specified thickness for insulation and drainage needs.",
  },
  {
    title: "Final Inspection",
    text: "The finished roof is inspected for coverage, thickness, and slope to drainage before sign-off.",
  },
];

const BENEFITS = [
  "Continuous insulation applied directly over most existing roofs, no tear-off or landfill waste",
  "Fully adhered, monolithic assembly that bonds to nearly any substrate: metal, concrete, single-ply, and more",
  "Superior thermal efficiency: an aged R-value of 6.7 per inch, among the best insulating roof systems available",
  "Meets UL 790 and UL 723 standards for fire performance (Class A)",
  "Lightweight system that adds minimal structural load, keeping installation costs down",
  "Seamless membrane that flexes with the building instead of cracking under wind and thermal movement",
];

const CHECK_ICON = (
  <svg viewBox="0 0 24 24">
    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
  </svg>
);

const PHONE_ICON = (
  <svg viewBox="0 0 24 24">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z" />
  </svg>
);

export default function NewRoofSystemsPage() {
  return (
    <>
      <Header />
      <MobileActionBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="blueprint-bg" aria-hidden="true">
        <div className="blueprint-photo"></div>
        <div className="blueprint-grid"></div>
      </div>
      <section className="page-intro">
        <div className="container">
          <Link href="/" className="back-link">
            &larr; Back to Home
          </Link>
          <h1>New Roof System Applications</h1>
          <p>
            More than a roof: a high-performance building system engineered to insulate,
            waterproof, and protect, installed directly over your existing roof in most cases.
          </p>
        </div>
      </section>
      <section className="contact-page-content">
        <div className="container">
          <div className="service-layout">
            <div className="service-main">
              <div className="service-block">
                <p className="service-intro">
                  Cook Coatings installs high-performance roofing systems, built with spray
                  polyurethane foam (SPF), for low-slope commercial and industrial buildings.
                  Applied as a liquid that expands into a rigid, closed-cell foam, it cures into a
                  seamless, monolithic membrane with no laps, seams, or fasteners, the most common
                  points of failure in traditional roofing systems, delivering continuous
                  insulation and long-term protection in one system.
                </p>
              </div>

              <div className="service-block">
                <h2>How It Works</h2>
                <ol className="process-list">
                  {PROCESS.map((step) => (
                    <li key={step.title}>
                      <span className="step-num"></span>
                      <div>
                        <h3>{step.title}</h3>
                        <p>{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="service-block">
                <h2>Why This System</h2>
                <ul className="service-benefits">
                  {BENEFITS.map((b) => (
                    <li key={b}>
                      {CHECK_ICON}
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-block">
                <h2>Common Questions</h2>
                <div className="service-faq">
                  <div>
                    <h3>Do I need to tear off my existing roof first?</h3>
                    <p>
                      Usually not. SPF can typically be applied directly over most existing
                      low-slope commercial roofing, avoiding the cost, downtime, and landfill
                      waste of a full tear-off.
                    </p>
                  </div>
                  <div>
                    <h3>What roof types can spray foam be applied to?</h3>
                    <p>
                      Metal, concrete, single-ply, and most existing commercial roofing
                      substrates. A roof assessment confirms the right approach for your specific
                      building.
                    </p>
                  </div>
                  <div>
                    <h3>How thick is a spray foam roof system?</h3>
                    <p>
                      Thickness is engineered per roof based on insulation needs and drainage
                      requirements, then applied in controlled passes to reach that specification
                      uniformly across the roof.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-sidebar">
              <div className="service-cta-card">
                <h3>Get a Free Estimate</h3>
                <p>Tell us about your building and we&apos;ll get back to you with next steps.</p>
                <a className="btn btn-primary" href="/contact">
                  Request an Estimate
                </a>
                <a className="phone-link" href="tel:+19512962664">
                  {PHONE_ICON} 951-296-2664
                </a>
              </div>
              <div className="related-services">
                <h3>Other Services</h3>
                <ul>
                  <li>
                    <Link href="/services/roof-restoration">Roof Restoration Systems &rarr;</Link>
                  </li>
                  <li>
                    <Link href="/services/maintenance-plans">Roof Maintenance Plans &rarr;</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ScrollReveal />
    </>
  );
}

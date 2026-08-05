import Link from "next/link";
import Header from "@/components/Header";
import MobileActionBar from "@/components/MobileActionBar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Commercial Roof Restoration & Renewal | High-Performance Roofing | Cook Coatings Inc",
  description:
    "Renew and protect your commercial roof with a seamless Poly-SIL membrane restoration system instead of a full replacement. Cook Coatings serves commercial property owners nationwide, licensed in CA, AZ, and NV.",
  alternates: {
    canonical: "https://www.cookcoatingsinc.com/services/roof-restoration",
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
      name: "Roof Restoration Systems",
      item: "https://www.cookcoatingsinc.com/services/roof-restoration",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Roof Restoration Systems",
  serviceType: "Commercial roof restoration and renewal",
  provider: { "@type": "RoofingContractor", name: "Cook Coatings Inc" },
  areaServed: "United States",
  description:
    "A renewable, seamless Poly-SIL membrane restoration system that protects and extends the life of an existing commercial roof, an asset-preserving alternative to full replacement.",
};

const PROCESS = [
  {
    title: "Roof Cleaning & Inspection",
    text: "The existing roof surface is cleaned and inspected for damage, ponding water, and any areas that need repair before restoration begins.",
  },
  {
    title: "Repairs",
    text: "Punctures, seams, and flashing issues are repaired first, so the restoration starts from a sound, watertight base.",
  },
  {
    title: "Primer",
    text: "Certain substrates receive a primer coat to improve adhesion of the membrane system.",
  },
  {
    title: "Poly-SIL Membrane Application",
    text: "A silicone-based elastomeric membrane is applied in a fluid-applied, fully-adhered coat that seals the entire roof surface seamlessly.",
  },
  {
    title: "Final Walkthrough",
    text: "The completed restoration is inspected for full coverage and proper drainage before sign-off.",
  },
];

const BENEFITS = [
  "Renewable system that avoids the cost, downtime, and landfill waste of a full tear-off",
  "Protects your roofing asset and extends the service life of your existing roof",
  "Seamless, fully adhered waterproof membrane",
  "Reflective coating helps reduce heat absorption and lower cooling costs",
  "Minimal disruption, your building stays operational during the work",
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

export default function RoofRestorationPage() {
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
          <h1>Roof Restoration Systems</h1>
          <p>
            Restore, protect, and perform: a smarter alternative to full replacement that renews
            your existing commercial roof with a seamless Poly-SIL membrane system, avoiding the
            cost, downtime, and landfill waste of a tear-off.
          </p>
        </div>
      </section>
      <section className="contact-page-content">
        <div className="container">
          <div className="service-layout">
            <div className="service-main">
              <div className="service-block">
                <p className="service-intro">
                  Roof restoration protects your roofing asset and extends its service life
                  without the expense and disruption of full replacement. Cook Coatings renews
                  roofs using a Poly-SIL membrane system, a silicone-based elastomeric coating
                  applied over a cleaned and repaired existing roof to deliver seamless, long-term
                  performance.
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
                <h2>Why Restoration</h2>
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
                    <h3>Is my roof a good candidate for restoration instead of replacement?</h3>
                    <p>
                      Most roofs with sound structural decking and manageable existing damage are
                      strong candidates. A roof assessment determines the right approach for your
                      building.
                    </p>
                  </div>
                  <div>
                    <h3>How is restoration different from a new roof system?</h3>
                    <p>
                      Restoration coats and seals your existing roof.{" "}
                      <Link href="/services/new-roof-systems">A new SPF system</Link> fully
                      replaces the roofing surface. A roof assessment helps determine which makes
                      more sense for your building.
                    </p>
                  </div>
                  <div>
                    <h3>Does roof restoration help with energy costs?</h3>
                    <p>
                      Reflective coatings reduce heat absorption into the building, which can help
                      lower cooling costs during warmer months.
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
                    <Link href="/services/new-roof-systems">New Roof System Applications &rarr;</Link>
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

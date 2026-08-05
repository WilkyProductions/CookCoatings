import Link from "next/link";
import Header from "@/components/Header";
import MobileActionBar from "@/components/MobileActionBar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Commercial Roof Maintenance Plans | Roof Asset Management | Cook Coatings Inc",
  description:
    "Scheduled commercial roof maintenance plans from Cook Coatings: inspections, minor repairs, and priority response that deliver predictable costs instead of costly emergency repairs. Licensed in CA, AZ, and NV.",
  alternates: {
    canonical: "https://www.cookcoatingsinc.com/services/maintenance-plans",
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
      name: "Roof Maintenance Plans",
      item: "https://www.cookcoatingsinc.com/services/maintenance-plans",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Roof Maintenance Plans",
  serviceType: "Commercial roof asset management",
  provider: { "@type": "RoofingContractor", name: "Cook Coatings Inc" },
  areaServed: "United States",
  description:
    "Scheduled roof maintenance plans that protect your roofing asset, catch small issues early, and deliver predictable costs instead of costly emergency repairs.",
};

const TIERS = [
  {
    name: "Inspect",
    desc: "Two scheduled roof inspections per year, plus an inspection after major storms, with a condition report each visit.",
  },
  {
    name: "Maintain",
    desc: "Minor repairs, drainage clearing, and debris removal handled before they turn into leaks.",
  },
  {
    name: "Respond",
    desc: "Priority callback if an issue comes up between scheduled visits, instead of waiting in a general queue.",
  },
  {
    name: "Extend",
    desc: "A documented service history and a longer roof service life, with fewer surprise capital expenses.",
  },
];

const BENEFITS = [
  "Two scheduled inspections per year, plus after major storms",
  "Minor repairs handled before they become leaks",
  "Ponding water, drainage, and debris checks",
  "Priority response if something comes up between visits",
  "A documented service history for your records",
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

export default function MaintenancePlansPage() {
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
          <h1>Roof Maintenance Plans</h1>
          <p>
            The cheapest way to deal with a roof problem is to catch it before it becomes one.
            Scheduled maintenance protects your investment and prevents surprise capital expenses.
          </p>
        </div>
      </section>
      <section className="contact-page-content">
        <div className="container">
          <div className="service-layout">
            <div className="service-main">
              <div className="service-block">
                <p className="service-intro">
                  A full roof replacement is the most expensive way to deal with a roof problem. A
                  maintenance plan is the cheapest. Scheduled visits protect your roofing asset by
                  catching small issues, ponding water, minor punctures, worn flashing, before
                  they become a leak, a claim, or an unplanned capital expense.
                </p>
              </div>

              <div className="service-block">
                <h2>How a Maintenance Plan Works</h2>
                <ol className="process-list">
                  {TIERS.map((tier) => (
                    <li key={tier.name}>
                      <span className="step-num"></span>
                      <div>
                        <h3>{tier.name}</h3>
                        <p>{tier.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="service-block">
                <h2>What&apos;s Included</h2>
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
                    <h3>How often should a commercial roof be inspected?</h3>
                    <p>
                      At least twice a year, plus after major storms. A maintenance plan catches
                      small issues before they become costly leaks or an early replacement.
                    </p>
                  </div>
                  <div>
                    <h3>What does a maintenance visit typically include?</h3>
                    <p>
                      A condition inspection, drainage and debris checks, and minor repairs on the
                      spot where possible, with a documented report after each visit.
                    </p>
                  </div>
                  <div>
                    <h3>Can a maintenance plan prevent the need for a full roof replacement?</h3>
                    <p>
                      Not indefinitely, but it meaningfully extends a roof&apos;s service life by
                      catching problems while they&apos;re still minor repairs instead of
                      emergency ones.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-sidebar">
              <div className="service-cta-card">
                <h3>Ask About Maintenance Plans</h3>
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
                    <Link href="/services/roof-restoration">Roof Restoration Systems &rarr;</Link>
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

import Link from "next/link";
import Header from "@/components/Header";
import MobileActionBar from "@/components/MobileActionBar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | Get a Commercial Roofing Estimate | Cook Coatings Inc (CCI)",
  description:
    "Request a free estimate for commercial roof coating, restoration, or maintenance from Cook Coatings Inc. Licensed in CA, AZ, and NV, serving commercial properties nationwide since 1983.",
  alternates: {
    canonical: "https://www.cookcoatingsinc.com/contact",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cookcoatingsinc.com/" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.cookcoatingsinc.com/contact" },
  ],
};

const PHONE_ICON = (
  <svg viewBox="0 0 24 24">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z" />
  </svg>
);

const EMAIL_ICON = (
  <svg viewBox="0 0 24 24">
    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2.24V6l8 5.99L20 6v-.01L12 12 4 6.24zM4 8.24V18h16V8.24l-7.4 5.55a1 1 0 0 1-1.2 0L4 8.24z" />
  </svg>
);

const PIN_ICON = (
  <svg viewBox="0 0 24 24">
    <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
  </svg>
);

export default function ContactPage() {
  return (
    <>
      <Header />
      <MobileActionBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
          <h1>Get a Free Estimate</h1>
          <p>
            Tell us about your building and the work you need done. We&apos;ll get back to you with
            next steps.
          </p>
        </div>
      </section>
      <section className="contact-page-content">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <ul className="contact-info-list">
                <li>
                  {PHONE_ICON}
                  <div>
                    <span className="label">Phone</span>
                    <a href="tel:+19512962664">951-296-2664</a>
                  </div>
                </li>
                <li>
                  {EMAIL_ICON}
                  <div>
                    <span className="label">Email</span>
                    <a href="mailto:cookcoatingsinc@yahoo.com">cookcoatingsinc@yahoo.com</a>
                  </div>
                </li>
                <li>
                  {PIN_ICON}
                  <div>
                    <span className="label">Office</span>
                    <span className="value">
                      41680 Enterprise Cir S., STE A/B
                      <br />
                      Temecula, CA 92590
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
      <ScrollReveal />
    </>
  );
}

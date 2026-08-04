import Link from "next/link";
import Header from "@/components/Header";
import MobileActionBar from "@/components/MobileActionBar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | Cook Coatings Inc (CCI)",
  description:
    "Get a free estimate for commercial roof coating, restoration, or maintenance plans from Cook Coatings Inc.",
  alternates: {
    canonical: "https://www.cookcoatingsinc.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <MobileActionBar />
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
                  <span className="label">Phone</span>
                  <a href="tel:+19512962664">951-296-2664</a>
                </li>
                <li>
                  <span className="label">Email</span>
                  <a href="mailto:info@cookcoatingsinc.com">info@cookcoatingsinc.com</a>
                </li>
                <li>
                  <span className="label">Office</span>
                  <span>
                    41680 Enterprise Cir S., STE A/B
                    <br />
                    Menifee, CA
                  </span>
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

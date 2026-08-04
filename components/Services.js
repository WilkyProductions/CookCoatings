import Image from "next/image";

export default function Services() {
  return (
    <section
      id="services"
      style={{
        background: "var(--white)",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Our Services</span>
          <h2>Three ways we protect your roof.</h2>
        </div>
        <div className="service-cards">
          <div className="service-card featured reveal">
            <span className="ribbon">Recommended</span>
            <Image
              className="card-photo"
              src="/images/maintenance-plans.jpg"
              alt="Cook Coatings crew applying a roof coating during a scheduled maintenance visit"
              width={600}
              height={300}
            />
            <div className="service-card-body">
              <h3>Roof Maintenance Plans</h3>
              <p>
                Scheduled maintenance that protects your investment, catches problems early, and
                keeps your roof performing at its best year-round.
              </p>
              <a className="learn" href="#maintenance">
                See what&apos;s included &rarr;
              </a>
            </div>
          </div>

          <div className="service-card reveal">
            <Image
              className="card-photo"
              src="/images/new-roof-system.jpg"
              alt="Aerial view of a new commercial roof system application"
              width={600}
              height={300}
            />
            <div className="service-card-body">
              <h3>New Roof System Applications</h3>
              <p>
                A high-performance roof coating system designed to extend lifespan and prevent
                costly damage from day one.
              </p>
              <a className="learn" href="/contact">
                Learn more &rarr;
              </a>
            </div>
          </div>

          <div className="service-card reveal">
            <Image
              className="card-photo"
              src="/images/roof-restoration.jpg"
              alt="Aerial view of a completed roof restoration system"
              width={600}
              height={300}
            />
            <div className="service-card-body">
              <h3>Roof Restoration Systems</h3>
              <p>
                A smarter alternative to full replacement: restoration with Poly-SIL
                membrane for long-lasting protection.
              </p>
              <a className="learn" href="/contact">
                Learn more &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

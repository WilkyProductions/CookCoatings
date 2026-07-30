import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-media">
        <Image
          src="/images/hero-roof.jpg"
          alt="Aerial drone photo of a finished commercial roof coating project"
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="hero-overlay"></div>
      <div className="container hero-inner reveal">
        <span className="eyebrow">Nationwide &middot; Licensed CA / AZ / NV</span>
        <h1>Commercial roof coatings built to outlast the building.</h1>
        <p className="lead">
          Cook Coatings Inc has installed spray polyurethane foam roofing, restoration, and
          maintenance plans on commercial buildings nationwide since 1983 &mdash; without the
          cost or waste of a full tear-off.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#contact">
            Get Free Estimate
          </a>
          <a className="btn btn-outline" href="#maintenance">
            Explore Maintenance Plans
          </a>
        </div>
        <div className="hero-stats">
          <div>
            <span className="num">40+</span>
            <span className="label">Years in business</span>
          </div>
          <div>
            <span className="num">3</span>
            <span className="label">States licensed</span>
          </div>
          <div>
            <span className="num">A</span>
            <span className="label">UL 790 fire rated</span>
          </div>
        </div>
      </div>
    </section>
  );
}

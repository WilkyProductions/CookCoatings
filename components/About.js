import Image from "next/image";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-wrap">
          <div className="about-card reveal">
            <Image
              className="card-photo"
              src="/images/cary-cook.jpg"
              alt="Portrait of Cary Cook, President of Cook Coatings Inc"
              width={500}
              height={680}
            />
            <ul className="credential-list">
              <li>
                <span>Founded</span>
                <span>1983</span>
              </li>
              <li>
                <span>License CA</span>
                <span>438394</span>
              </li>
              <li>
                <span>License AZ</span>
                <span>ROC280037</span>
              </li>
              <li>
                <span>License NV</span>
                <span>0072245</span>
              </li>
            </ul>
          </div>
          <div className="about-copy reveal">
            <span className="eyebrow">40+ Years of Excellence</span>
            <h2 style={{ fontSize: "1.9rem", marginBottom: "18px" }}>
              Built by Cary Cook. Run the same way since 1983.
            </h2>
            <p>
              Cary Cook founded Cook Coatings in 1983 to bring real craftsmanship to spray
              polyurethane foam roofing &mdash; at a time when many contractors entered the trade
              without the training to do it right. Through hands-on experience and continuous
              education, Cary built a reputation as one of the most trusted names in the industry.
            </p>
            <p>
              Today, known nationwide as CCI, the company still handles large commercial projects
              and smaller jobs for national chains and franchises alike &mdash; with the same
              standard of quality and integrity Cary started with.
            </p>
            <blockquote>
              &ldquo;If you&apos;re a commercial property owner, or responsible for the roofing
              assets of any company across the country, I invite you to contact me personally to
              discuss how we can help.&rdquo;
            </blockquote>
            <p className="signature">&mdash; Cary Cook, President</p>
          </div>
        </div>
      </div>
    </section>
  );
}

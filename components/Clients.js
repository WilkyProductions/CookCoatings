import Image from "next/image";

const CLIENTS = [
  { src: "/images/logos/northrop-grumman.png", alt: "Northrop Grumman" },
  { src: "/images/logos/aerospace.png", alt: "The Aerospace Corporation" },
  { src: "/images/logos/nrg.png", alt: "NRG" },
  { src: "/images/logos/jcpenney.png", alt: "JCPenney" },
  { src: "/images/logos/nassco.png", alt: "General Dynamics NASSCO" },
];

export default function Clients() {
  return (
    <section className="clients-band">
      <div className="container">
        <div className="section-head reveal" style={{ marginBottom: "32px" }}>
          <span className="eyebrow">Trusted By</span>
          <h2 style={{ fontSize: "1.6rem" }}>Some of our clients</h2>
        </div>
        <div className="clients-row reveal">
          {CLIENTS.map((client) => (
            <div className="client-logo" key={client.alt}>
              <Image src={client.src} alt={client.alt} width={200} height={80} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

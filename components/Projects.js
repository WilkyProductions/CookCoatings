import Image from "next/image";

// Update titles/notes/photos any time — this is a placeholder pass with 6 of the
// uploaded photos so the section isn't empty; swap in the rest later.
const PROJECTS = [
  {
    title: "Hyatt Regency — Indian Wells",
    note: "Roof restoration, spray foam system",
    src: "/images/projects/hyatt-regency-indian-wells.jpg",
    alt: "Spray foam roof restoration at the Hyatt Regency Indian Wells",
  },
  {
    title: "Homenetmen Glendale Ararat Chapter",
    note: "Glendale, CA — Roof coating system",
    src: "/images/projects/homenetmen-glendale-ararat-chapter.jpg",
    alt: "Aerial view of completed roof coating at Homenetmen Glendale Ararat Chapter",
  },
  {
    title: "Commercial Office Building",
    note: "Roof coating system, aerial view",
    src: "/images/projects/commercial-office-roof.jpg",
    alt: "Aerial view of a commercial office building roof coating project",
  },
  {
    title: "Multi-Section Facility",
    note: "Roof coating system, aerial view",
    src: "/images/projects/aerial-roof-project.jpg",
    alt: "Aerial view of a multi-section commercial roof coating project",
  },
  {
    title: "Spray Foam Detail",
    note: "Insulated ductwork encapsulation",
    src: "/images/projects/spray-foam-ductwork-detail.jpg",
    alt: "Close-up of spray foam encapsulated rooftop ductwork",
  },
  {
    title: "Roof Coating Application",
    note: "Crew applying spray foam system",
    src: "/images/projects/roof-coating-application.jpg",
    alt: "Crew applying a spray foam roof coating system, aerial view",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ background: "var(--white)", borderTop: "1px solid var(--line)" }}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Recent Projects</span>
          <h2>A few roofs we&apos;ve kept dry.</h2>
        </div>
        <div className="project-grid">
          {PROJECTS.map((project, i) => (
            <div className="project-tile reveal" key={i}>
              <Image
                className="project-photo"
                src={project.src}
                alt={project.alt}
                width={600}
                height={440}
              />
              <div className="project-caption">
                {project.title}
                <span>{project.note}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

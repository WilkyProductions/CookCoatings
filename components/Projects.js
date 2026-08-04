import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" style={{ background: "var(--white)", borderTop: "1px solid var(--line)" }}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Recent Projects</span>
          <h2>A few roofs we&apos;ve kept dry.</h2>
          <p>Check out some of our latest work. Click on any image to open the full project gallery.</p>
        </div>
        <div className="project-grid">
          {PROJECTS.map((project) => (
            <Link
              href={`/projects#${project.slug}`}
              className="project-tile reveal"
              key={project.slug}
            >
              <Image
                className="project-photo"
                src={project.photos[0].src}
                alt={project.photos[0].alt}
                width={600}
                height={440}
              />
              <div className="project-caption">
                {project.title}
                <span>{project.note}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

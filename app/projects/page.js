import Link from "next/link";
import Header from "@/components/Header";
import MobileActionBar from "@/components/MobileActionBar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectSlideshow from "@/components/ProjectSlideshow";
import ProjectsSideNav from "@/components/ProjectsSideNav";
import { PROJECTS } from "@/data/projects";

export const metadata = {
  title: "Project Gallery | Cook Coatings Inc (CCI)",
  description:
    "Browse commercial roof coating and restoration projects completed by Cook Coatings Inc nationwide.",
  alternates: {
    canonical: "https://www.cookcoatingsinc.com/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <MobileActionBar />
      <div className="blueprint-bg" aria-hidden="true">
        <div className="blueprint-photo"></div>
        <div className="blueprint-grid"></div>
      </div>
      <section className="page-intro">
        <div className="container">
          <Link href="/" className="back-link">
            &larr; Back to Home
          </Link>
          <h1>Our Project Gallery</h1>
          <p>
            Browse commercial roof coating and restoration projects completed nationwide. Pick a
            project from the list to jump straight to it.
          </p>
        </div>
      </section>
      <section className="projects-content">
        <div className="container">
          <div className="projects-layout">
            <ProjectsSideNav projects={PROJECTS} />
            <div>
              {PROJECTS.map((project) => (
                <section id={project.slug} className="project-section reveal" key={project.slug}>
                  <ProjectSlideshow photos={project.photos} />
                  <h2>{project.title}</h2>
                  {project.location && <span className="project-location">{project.location}</span>}
                  <p className="project-description">{project.description}</p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ScrollReveal />
    </>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function ProjectsSideNav({ projects }) {
  const [active, setActive] = useState(projects[0]?.slug);

  useEffect(() => {
    const sections = projects.map((p) => document.getElementById(p.slug)).filter(Boolean);
    if (!("IntersectionObserver" in window) || !sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => io.observe(section));
    return () => io.disconnect();
  }, [projects]);

  return (
    <nav className="projects-side-nav" aria-label="Project list">
      {projects.map((project, i) => (
        <a
          key={project.slug}
          href={`#${project.slug}`}
          className={active === project.slug ? "active" : ""}
        >
          <span className="nav-index">{String(i + 1).padStart(2, "0")}</span>
          {project.title}
        </a>
      ))}
    </nav>
  );
}

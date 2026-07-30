const CAMERA_ICON = (
  <svg viewBox="0 0 24 24">
    <path d="M12 5.5L2 11v2l10-5.5L22 13v-2L12 5.5zM4 14v6h5v-4h6v4h5v-6l-8-4.4L4 14z" />
  </svg>
);

// Swap each photo-slot for a real <Image> once you have project photos —
// see the Services.js / About.js components for the pattern to follow.
const PROJECTS = [
  { title: "Hyatt Regency — Indian Wells", note: "Roof restoration, spray foam system" },
  { title: "Project Title", note: "Add project location & scope" },
  { title: "Project Title", note: "Add project location & scope" },
  { title: "Project Title", note: "Add project location & scope" },
  { title: "Project Title", note: "Add project location & scope" },
  { title: "Project Title", note: "Add project location & scope" },
];

export default function Projects() {
  return (
    <section id="projects" style={{ background: "var(--white)", borderTop: "1px solid var(--line)" }}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Recent Projects</span>
          <h2>A few roofs we&apos;ve kept dry.</h2>
          <p>Replace these slots with real project photos &mdash; captions below are ready to edit.</p>
        </div>
        <div className="project-grid">
          {PROJECTS.map((project, i) => (
            <div className="project-tile reveal" key={i}>
              <div className="photo-slot">
                {CAMERA_ICON}
                <span className="slot-label">ADD PHOTO</span>
              </div>
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

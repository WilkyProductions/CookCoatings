const CHECK_ICON = (
  <svg viewBox="0 0 24 24">
    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
  </svg>
);

const MAINTENANCE_POINTS = [
  "Two scheduled inspections per year, plus after major storms",
  "Minor repairs handled before they become leaks",
  "Ponding water, drainage, and debris checks",
  "Priority response if something comes up between visits",
  "A documented service history for your records",
];

const TIERS = [
  { name: "Inspect", desc: "Scheduled roof inspections & condition reports" },
  { name: "Maintain", desc: "Minor repairs, drainage & debris upkeep" },
  { name: "Respond", desc: "Priority callback if an issue comes up" },
  { name: "Extend", desc: "Longer roof life, fewer surprise costs" },
];

export default function Maintenance() {
  return (
    <section id="maintenance" className="maintenance">
      <div className="container">
        <div className="maintenance-wrap">
          <div className="reveal">
            <span className="eyebrow">Most Requested Service</span>
            <h2>Roof maintenance plans that prevent the expensive surprise.</h2>
            <p className="lead">
              A full replacement is the most expensive way to deal with a roof problem. A
              maintenance plan is the cheapest. Scheduled visits catch small issues, ponding
              water, minor punctures, worn flashing, before they become a leak, a claim, or a
              capital expense.
            </p>
            <ul className="maintenance-list">
              {MAINTENANCE_POINTS.map((point) => (
                <li key={point}>
                  {CHECK_ICON}
                  {point}
                </li>
              ))}
            </ul>
            <a className="btn btn-primary" href="/contact">
              Ask About Maintenance Plans
            </a>
          </div>
          <div className="maintenance-card reveal">
            {TIERS.map((tier) => (
              <div className="tier" key={tier.name}>
                <div>
                  <div className="tier-name">{tier.name}</div>
                  <div className="tier-desc">{tier.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

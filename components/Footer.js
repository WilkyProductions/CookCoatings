export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand" style={{ color: "var(--white)" }}>
              Cook Coatings Inc
            </div>
            <p style={{ maxWidth: "36ch", color: "rgba(255,255,255,0.6)" }}>
              High-performance commercial roofing systems, restoration, and maintenance
              nationwide since 1983.
            </p>
          </div>
          <div>
            <h5>Head Office</h5>
            <p>
              41680 Enterprise Cir S.
              <br />
              STE A/B
              <br />
              Temecula, CA 92590
            </p>
            <p style={{ marginTop: "10px" }}>
              Office: 951-296-2664
              <br />
              Fax: 951-848-9269
            </p>
          </div>
          <div>
            <h5>Navigation</h5>
            <ul>
              <li>
                <a href="/#about">About CCI</a>
              </li>
              <li>
                <a href="/#services">Services</a>
              </li>
              <li>
                <a href="/#maintenance">Maintenance Plans</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/#faq">FAQ</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            &copy; 2026 Cook Coatings Inc. Lic. CA 438394 / AZ ROC280037 / NV 0072245.
          </span>
          <span style={{ display: "flex", gap: "18px" }}>
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Accessibility</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

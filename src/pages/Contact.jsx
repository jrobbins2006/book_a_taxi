// src/pages/Contact.jsx
export default function Contact() {
  return (
    <section className="page contact">
      <h1>Contact</h1>
      <p className="lead">
        Have questions about the TaxiRide experience or want to extend this
        project? Use the details below as a template for real-world contact
        information.
      </p>

      <div className="contact-grid">
        <div className="contact-card">
          <h2>Support & General Inquiries</h2>
          <p>
            Email: <span className="contact-highlight">support@taxiride.demo</span>
            <br />
            Phone: <span className="contact-highlight">+1 (555) 123-4567</span>
          </p>
          <p>
            In a production environment, this section would connect to a help
            desk system or live chat service. For this demo, it documents where
            that information would live.
          </p>
        </div>

        <div className="contact-card">
          <h2>Partnerships & Integration</h2>
          <p>
            Email:{" "}
            <span className="contact-highlight">
              partnerships@taxiride.demo
            </span>
          </p>
          <p>
            TaxiRide’s front-end is designed to integrate cleanly with existing
            dispatch, billing, or mapping solutions through API calls and
            authentication flows.
          </p>
        </div>
      </div>

      <p className="contact-footnote">
        This page is intentionally simple but styled to match the rest of the
        app. It can easily host a real contact form or embedded support widget
        in a production scenario.
      </p>
    </section>
  );
}

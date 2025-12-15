// src/pages/Services.jsx
import { Link } from "react-router-dom";

const SERVICES = [
  {
    id: "standard",
    name: "Standard Ride",
    tagline: "Reliable everyday rides",
    description:
      "Quick, comfortable rides for daily errands, commutes, or meeting friends across town.",
    bestFor: "Solo riders or pairs",
    eta: "3–8 min typical ETA",
    priceTag: "Most budget-friendly",
    icon: "🚕",
  },
  {
    id: "pool",
    name: "Ride Share / Pool",
    tagline: "Share the ride, split the cost",
    description:
      "Match with riders going in a similar direction and enjoy lower fares with a smaller footprint.",
    bestFor: "Budget-conscious riders",
    eta: "5–12 min typical ETA",
    priceTag: "Cheapest option",
    icon: "👥",
  },
  {
    id: "luxury",
    name: "Luxury",
    tagline: "Premium cars, elevated comfort",
    description:
      "High-end vehicles for special occasions, client meetings, or when you want extra space and style.",
    bestFor: "Business trips & events",
    eta: "5–10 min typical ETA",
    priceTag: "Premium pricing",
    icon: "✨",
  },
  {
    id: "airport",
    name: "Airport Transfer",
    tagline: "Stress-free departures & arrivals",
    description:
      "Pre-scheduled, time-sensitive rides to and from major airports with room for luggage.",
    bestFor: "Travel days, early flights",
    eta: "Scheduled in advance",
    priceTag: "Fixed or metered pricing",
    icon: "✈️",
  },
];

export default function Services() {
  return (
    <section className="page services">
      <div className="service-hero">
        <p className="badge-row">
          <span className="pill pill-blue">Multiple ride types</span>
          <span className="pill pill-green">Up-front details</span>
        </p>
        <h1>Ride Services for Every Trip</h1>
        <p className="lead">
          From quick city hops to airport transfers, TaxiRide offers flexible
          ride options. Each service type is reflected directly in the booking
          form for a seamless experience.
        </p>
        <div className="hero-cta-row">
          <Link to="/book" className="primary-btn">
            Book a Ride
          </Link>
          <a href="#service-list" className="ghost-btn">
            View all services
          </a>
        </div>
      </div>

      <section id="service-list" className="service-section">
        <h2>Our Core Services</h2>
        <p className="section-intro">
          Choose the ride style that matches your budget, comfort level, and
          urgency. All service types are available in the demo booking flow.
        </p>

        <div className="service-grid">
          {SERVICES.map((service) => (
            <article key={service.id} className="service-card">
              <div className="service-card-header">
                <span className="service-icon">{service.icon}</span>
                <div>
                  <h3>{service.name}</h3>
                  <p className="service-tagline">{service.tagline}</p>
                </div>
              </div>

              <p className="service-description">{service.description}</p>

              <dl className="service-meta">
                <div>
                  <dt>Best for</dt>
                  <dd>{service.bestFor}</dd>
                </div>
                <div>
                  <dt>Typical ETA</dt>
                  <dd>{service.eta}</dd>
                </div>
                <div>
                  <dt>Pricing</dt>
                  <dd>{service.priceTag}</dd>
                </div>
              </dl>

              <div className="service-footer">
                <span className="tag-pill">
                  Available in demo booking form
                </span>
                <Link to="/book" className="secondary-btn service-book-link">
                  Book {service.name}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="service-section service-compare">
        <h2>Not Sure Which Service to Choose?</h2>
        <div className="service-compare-row">
          <div>
            <h3>💰 Keep it affordable</h3>
            <p>
              Choose <strong>Standard</strong> for everyday trips, or{" "}
              <strong>Ride Share / Pool</strong> when you want the lowest fare
              and don’t mind sharing.
            </p>
          </div>
          <div>
            <h3>🧳 Traveling with luggage</h3>
            <p>
              <strong>Airport Transfer</strong> is ideal for time-sensitive
              rides with bags and longer distances.
            </p>
          </div>
          <div>
            <h3>🕴️ Important occasions</h3>
            <p>
              For client meetings, events, or when comfort matters,{" "}
              <strong>Luxury</strong> provides a more premium ride experience.
            </p>
          </div>
        </div>
      </section>

      <section className="service-section service-cta">
        <h2>Ready to Plan Your Next Ride?</h2>
        <p>
          Head to the booking page, select your preferred service type, and walk
          through the complete request flow in this professional demo app.
        </p>
        <div className="hero-cta-row">
          <Link to="/book" className="primary-btn">
            Book a Ride
          </Link>
          <Link to="/" className="ghost-btn">
            Back to Home
          </Link>
        </div>
      </section>
    </section>
  );
}

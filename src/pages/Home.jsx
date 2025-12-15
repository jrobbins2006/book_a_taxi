// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="page home">
      <div className="home-hero">
        <div className="home-hero-text">
          <p className="badge-row">
            <span className="pill pill-blue">Citywide coverage</span>
            <span className="pill pill-green">Professional experience</span>
          </p>
          <h1>Smart, Reliable Taxi Ride Booking</h1>
          <p className="lead">
            TaxiRide gives you a streamlined interface to request, schedule, and
            manage rides with clarity and confidence. Designed for modern users
            and ready to integrate with real-world APIs.
          </p>
          <div className="hero-cta-row">
            <Link to="/book" className="primary-btn">
              Book a Ride
            </Link>
            <Link to="/services" className="ghost-btn">
              View Services
            </Link>
          </div>
          <p className="hero-footnote home-footnote">
            This project showcases a professional front-end for a taxi
            ride-sharing platform using React and React Router.
          </p>
        </div>

        <div className="home-hero-card">
          <h2>Why TaxiRide?</h2>
          <ul className="home-hero-list">
            <li>Clear booking flow with validation</li>
            <li>Service types for different travel needs</li>
            <li>Responsive, professional UI theme</li>
            <li>Easy to extend with backend integration</li>
          </ul>
        </div>
      </div>

      <section className="home-section">
        <h2>Built for a Professional Experience</h2>
        <div className="home-grid">
          <div className="home-feature-card">
            <h3>Multi-Page Layout</h3>
            <p>
              Separate pages for About, Services, Contact, and Booking, all
              wired via React Router for a smooth SPA experience.
            </p>
          </div>
          <div className="home-feature-card">
            <h3>Consistent Design System</h3>
            <p>
              Unified colors, typography, and components ensure a cohesive look
              and feel across the entire application.
            </p>
          </div>
          <div className="home-feature-card">
            <h3>Booking & Validation</h3>
            <p>
              A structured booking form with basic client-side validation makes
              it easy to adapt to real data models and APIs.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

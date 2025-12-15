// src/pages/Booking.jsx
import { useState } from "react";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pickup: "",
    dropoff: "",
    serviceType: "",
    date: "",
    time: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSubmitted(false);
  }

  function validate() {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.pickup.trim())
      newErrors.pickup = "Pickup location is required";

    if (!formData.dropoff.trim())
      newErrors.dropoff = "Dropoff location is required";

    if (!formData.serviceType)
      newErrors.serviceType = "Please select a service type";

    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    console.log("Booking submitted:", formData);
    setSubmitted(true);
  }

  return (
    <section className="page booking">
      <h1>Book a Ride</h1>
      <p className="lead">
        Fill in the details below to simulate a professional ride booking
        experience. All fields are validated on the client side.
      </p>

      <div className="booking-layout">
        <form className="booking-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label>
              Full name
              <input
                name="name"
                type="text"
                placeholder="Jane Doe"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </label>
          </div>

          <div className="form-row">
            <label>
              Email
              <input
                name="email"
                type="email"
                placeholder="jane.doe@example.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </label>
          </div>

          <div className="form-row">
            <label>
              Pickup location
              <input
                name="pickup"
                type="text"
                placeholder="123 Main St"
                value={formData.pickup}
                onChange={handleChange}
              />
              {errors.pickup && <span className="error">{errors.pickup}</span>}
            </label>
          </div>

          <div className="form-row">
            <label>
              Dropoff location
              <input
                name="dropoff"
                type="text"
                placeholder="Airport Terminal B"
                value={formData.dropoff}
                onChange={handleChange}
              />
              {errors.dropoff && (
                <span className="error">{errors.dropoff}</span>
              )}
            </label>
          </div>

          <div className="form-row">
            <label>
              Service type
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
              >
                <option value="">Select a service</option>
                <option value="standard">Standard Ride</option>
                <option value="pool">Ride Share / Pool</option>
                <option value="luxury">Luxury</option>
                <option value="airport">Airport Transfer</option>
              </select>
              {errors.serviceType && (
                <span className="error">{errors.serviceType}</span>
              )}
            </label>
          </div>

          <div className="form-row form-row-inline">
            <label>
              Date
              <input
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
              />
              {errors.date && <span className="error">{errors.date}</span>}
            </label>
            <label>
              Time
              <input
                name="time"
                type="time"
                value={formData.time}
                onChange={handleChange}
              />
              {errors.time && <span className="error">{errors.time}</span>}
            </label>
          </div>

          <button type="submit" className="primary-btn full-width-btn">
            Confirm Booking
          </button>

          {submitted && (
            <p className="success-msg">
              Your ride has been booked in this demo interface. In a live
              system, this would trigger confirmation emails or notifications.
            </p>
          )}
        </form>

        <aside className="booking-side">
          <h2>What Happens Next?</h2>
          <p>
            In a production deployment, your booking would be sent to a backend
            service to:
          </p>
          <ul>
            <li>Match you with nearby drivers</li>
            <li>Calculate real-time pricing and ETAs</li>
            <li>Display live trip status and driver details</li>
          </ul>
          <p>
            Here, we focus on getting the front-end flow, design system, and
            validation patterns right.
          </p>
        </aside>
      </div>
    </section>
  );
}

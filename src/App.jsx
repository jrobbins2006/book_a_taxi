// src/App.jsx
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Booking from "./pages/Booking.jsx";

function App() {
  return (
    <div className="app">
      <NavBar />
      <main className="main-content">
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<Booking />} />
          </Routes>
        </div>
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} TaxiRide. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

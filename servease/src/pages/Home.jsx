import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import homepageImg from "../assets/images/homepage.png";  
import easyBooking from "../assets/images/easybooking.png";
import verified from "../assets/images/verified.png";
import secure from "../assets/images/secure.png";


const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <center>
          <h1>Welcome to ServEase</h1></center>
          <img src={homepageImg} alt="Service Marketplace" className="homepage-image" />
          <p>Find the best local services or offer your expertise with ease.</p>
          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary">Explore Services</Link>
            <Link to="/login" className="btn btn-secondary">Join as a Provider</Link>
            <Link to="/login" className="btn btn-tertiary">Join us as a Service Provider</Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose ServEase?</h2>
        <div className="features-grid">
          <div className="feature-card">
            
            <h3>Easy Booking</h3>
            <p>Find trusted professionals in just a few clicks.</p>
          </div>
          <div className="feature-card">
            
            <h3>Verified Providers</h3>
            <p>All service providers are verified for quality assurance.</p>
          </div>
          <div className="feature-card">
            
            <h3>Secure Payments</h3>
            <p>Make secure transactions with confidence.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works?</h2>
        <div className="steps">
          <div className="step">
            <span>1</span>
            <h3>Choose a Service</h3>
            <p>Browse from a variety of service categories.</p>
          </div>
          <div className="step">
            <span>2</span>
            <h3>Book a Provider</h3>
            <p>Pick a provider based on ratings & reviews.</p>
          </div>
          <div className="step">
            <span>3</span>
            <h3>Enjoy the Service</h3>
            <p>Get the job done hassle-free.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <p>Join ServEase today and experience the ease of hiring or offering services!</p>
        <Link to="/signup" className="btn btn-primary">Sign Up Now</Link>
      </section>
    </div>
  );
};

export default Home;

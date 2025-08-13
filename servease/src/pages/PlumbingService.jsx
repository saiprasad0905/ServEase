import React from "react";
import "./BookService.css";

const PlumbingService = () => {
  return (
    <div className="book-service-container">
      <h2>Available Plumbers</h2>
      <div className="providers-list">
        <div className="provider-card">
          <h3>John Doe</h3>
          <p>⭐ 4.5 / 5</p>
          <button>Book Now</button>
        </div>
        <div className="provider-card">
          <h3>Michael Smith</h3>
          <p>⭐ 4.2 / 5</p>
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default PlumbingService;

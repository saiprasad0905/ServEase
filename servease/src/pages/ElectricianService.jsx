import React from "react";
import "./BookService.css";

const ElectricianService = () => {
  return (
    <div className="book-service-container">
      <h2>Available Electricians</h2>
      <div className="providers-list">
        <div className="provider-card">
          <h3>Sarah Johnson</h3>
          <p>⭐ 4.8 / 5</p>
          <button>Book Now</button>
        </div>
        <div className="provider-card">
          <h3>David Lee</h3>
          <p>⭐ 4.3 / 5</p>
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default ElectricianService;

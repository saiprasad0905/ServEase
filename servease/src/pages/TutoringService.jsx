import React from "react";
import "./BookService.css";

const TutoringService = () => {
  return (
    <div className="book-service-container">
      <h2>Available Tutors</h2>
      <div className="providers-list">
        <div className="provider-card">
          <h3>Emily Brown</h3>
          <p>⭐ 4.9 / 5</p>
          <button>Book Now</button>
        </div>
        <div className="provider-card">
          <h3>Chris Wilson</h3>
          <p>⭐ 4.6 / 5</p>
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default TutoringService;

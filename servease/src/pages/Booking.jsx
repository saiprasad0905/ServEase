import React from "react";
import { useParams } from "react-router-dom";
import "./Booking.css";

function Booking() {
  const { id } = useParams();

  return (
    <div className="booking-container">
      <h1>Book Your Service</h1>
      <p>Booking service ID: {id}</p>
      <form className="booking-form">
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" required />

        <label>Phone Number:</label>
        <input type="tel" placeholder="Enter your phone number" required />

        <label>Address:</label>
        <textarea placeholder="Enter your address" required></textarea>

        <button type="submit" className="confirm-btn">Confirm Booking</button>
      </form>
    </div>
  );
}

export default Booking;

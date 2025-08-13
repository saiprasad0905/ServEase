import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookService.css";

const serviceProviders = [
  { id: 1, name: "John Doe", rating: 4.5 },
  { id: 2, name: "Sarah Smith", rating: 4.8 },
  { id: 3, name: "Michael Johnson", rating: 4.2 },
];

const BookService = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { serviceName } = location.state || {}; // Get the selected service name

  const handleBooking = (provider) => {
    alert(`You have booked ${provider.name} for ${serviceName}`);
    navigate("/services"); // Redirect back to Services after booking
  };

  return (
    <div className="book-service-container">
      <h2>Available {serviceName} Providers</h2>
      <div className="providers-list">
        {serviceProviders.map((provider) => (
          <div key={provider.id} className="provider-card">
            <h3>{provider.name}</h3>
            <p>⭐ {provider.rating} / 5</p>
            <button onClick={() => handleBooking(provider)}>Book</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookService;

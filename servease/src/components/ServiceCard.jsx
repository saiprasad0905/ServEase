import React from "react";
import { useNavigate } from "react-router-dom";
import "./ServiceCard.css";

function ServiceCard({ service }) {
  const navigate = useNavigate();

  return (
    <div className="service-card">
      <img src={service.image} alt={service.name} className="service-image" />
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <button onClick={() => navigate(`/booking/${service.id}`)}>Book Now</button>
    </div>
  );
}

export default ServiceCard;

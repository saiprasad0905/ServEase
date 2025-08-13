import React, { useState, useEffect } from "react";
import "./ServiceProvider.css";

const ServiceProviderList = ({ serviceId, onClose }) => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    // Fetch providers for the selected service
    fetch(`http://localhost:5000/api/providers?serviceId=${serviceId}`)
      .then((res) => res.json())
      .then((data) => setProviders(data))
      .catch((err) => console.error("Error fetching providers:", err));
  }, [serviceId]);

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Available Service Providers</h2>
        <button className="close-btn" onClick={onClose}>X</button>
        {providers.length > 0 ? (
          <ul>
            {providers.map((provider) => (
              <li key={provider.id} className="provider-item">
                <span>{provider.name} ⭐ {provider.rating}</span>
                <button className="book-btn">Book</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No providers available</p>
        )}
      </div>
    </div>
  );
};

export default ServiceProviderList;

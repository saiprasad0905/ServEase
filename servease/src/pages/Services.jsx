import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";
import barberImage from "../assets/images/barber.jpg"; // Adjust the path as needed
import teacherImage from "../assets/images/teacher.png"; // Adjust the path as needed
import carpenterImage from "../assets/images/carpenter.jpg"; // Adjust the path as needed
import electricianImage from "../assets/images/electrician.jpg"; // Adjust the path as needed
import housecleaningImage from "../assets/images/housecleaning.jpg"; // Adjust the path as needed
import plumbingImage from "../assets/images/plumbing.jpg"; // Adjust the path as needed
import ServiceProviderList from "../components/ServiceProviderList";  

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  const serviceList = [
    { id: 1, name: "Home Cleaning", description: "Professional cleaning services for your home.", image: housecleaningImage },
    { id: 2, name: "Plumbing", description: "Expert plumbing solutions for all issues.", image: plumbingImage },
    { id: 3, name: "Tutoring", description: "Find experienced tutors for any subject.", image: teacherImage },
    { id: 4, name: "Barber", description: "Professional barber services.", image: barberImage },
    { id: 5, name: "Carpenter", description: "Carpenter service at your doorstep.", image: carpenterImage },
    { id: 6, name: "Electrician", description: "Electrical service at your one click.", image: electricianImage }
  ];

  const handleBookNow = (serviceName) => {
    navigate("/book-service", { state: { serviceName } });
  };

  return (
    <div className="services-container">
      <h2>Available Services</h2>
      <div className="services-grid">
        {serviceList.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.name} className="service-image" />
            <h3 className="service-name">{service.name}</h3>
            <p className="service-description">{service.description}</p>
            <button className="book-btn" onClick={() => handleBookNow(service.name)}>Book Now</button>
          </div>
        ))}
      </div>
      {selectedService && (
        <ServiceProviderList serviceId={selectedService} onClose={() => setSelectedService(null)} />
      )}
    </div>
  );
}

export default Services;
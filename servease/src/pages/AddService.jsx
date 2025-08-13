import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddService.css";

function AddService() {
  const navigate = useNavigate();
  const [serviceName, setServiceName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleAddService = async (e) => {
    e.preventDefault();

    const newService = { serviceName, description, price };
    
    try {
      const response = await fetch("http://localhost:5000/provider/add-service", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newService),
      });

      if (response.ok) {
        alert("Service Added Successfully!");
        navigate("/provider-dashboard");
      } else {
        alert("Failed to add service");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="add-service-container">
      <h2>Add a New Service</h2>
      <form onSubmit={handleAddService}>
        <input
          type="text"
          placeholder="Service Name"
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
          required
        />
        <textarea
          placeholder="Service Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit">Add Service</button>
      </form>
    </div>
  );
}

export default AddService;

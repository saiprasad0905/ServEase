import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./EditService.css";

const EditService = () => {
    const [services, setServices] = useState([]);
    const [newService, setNewService] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const providerId = localStorage.getItem("providerId");
                const response = await axios.get(`http://localhost:5000/api/providers/${providerId}/services`);
                setServices(response.data);
            } catch (error) {
                console.error("Error fetching services:", error);
            }
        };

        fetchServices();
    }, []);

    const addService = async () => {
        if (newService.trim() === "") return;

        try {
            const providerId = localStorage.getItem("providerId");
            await axios.post(`http://localhost:5000/api/providers/${providerId}/services`, { name: newService });
            setServices([...services, { name: newService }]);
            setNewService("");
        } catch (error) {
            console.error("Error adding service:", error);
        }
    };

    const removeService = async (serviceName) => {
        try {
            const providerId = localStorage.getItem("providerId");
            await axios.delete(`http://localhost:5000/api/providers/${providerId}/services`, { data: { name: serviceName } });
            setServices(services.filter((s) => s.name !== serviceName));
        } catch (error) {
            console.error("Error removing service:", error);
        }
    };

    return (
        <div className="edit-services">
            <h1>Edit Your Services</h1>
            <input
                type="text"
                placeholder="Enter new service"
                value={newService}
                onChange={(e) => setNewService(e.target.value)}
            />
            <button onClick={addService}>Add Service</button>
            <ul>
                {services.map((service, index) => (
                    <li key={index}>
                        {service.name}
                        <button onClick={() => removeService(service.name)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => navigate("/provider-dashboard")}>Back to Dashboard</button>
        </div>
    );
};

export default EditService;
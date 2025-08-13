import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProviderDashboard.css"; // Add styles if needed

const ProviderDashboard = () => {
    const [provider, setProvider] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProviderData = async () => {
            try {
                const providerId = localStorage.getItem("providerId"); // Assuming login stores this
                const response = await axios.get(`http://localhost:5000/api/providers/${providerId}`);
                setProvider(response.data);
            } catch (error) {
                console.error("Error fetching provider data:", error);
            }
        };

        fetchProviderData();
    }, []);

    return (
        <div className="provider-dashboard">
            <h1>Welcome, {provider?.name || "Provider"}!</h1>
            <p><strong>⭐ Average Rating:</strong> {provider?.rating || "Not Rated Yet"}</p>
            <h2>Your Services</h2>
            <ul>
                {provider?.services?.map((service) => (
                    <li key={service.id}>{service.name}</li>
                ))}
            </ul>
            <button onClick={() => navigate("/edit-services")}>Edit Services</button>
        </div>
    );
};

export default ProviderDashboard;

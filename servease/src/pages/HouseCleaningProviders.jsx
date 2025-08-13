import React from "react";
import "../components/ServiceProvider.css"; // Ensure this file exists
import { Link } from "react-router-dom";

const HouseCleaningProviders = () => {
    // Static list of house cleaning providers
    const providers = [
        { id: 1, name: "Sophia Williams", phone: "9876543210", service: "House Cleaning", email: "sophia@example.com" },
        { id: 2, name: "David Johnson", phone: "9123456789", service: "House Cleaning", email: "david@example.com" },
        { id: 3, name: "Emma Brown", phone: "8899776655", service: "House Cleaning", email: "emma@example.com" },
        { id: 4, name: "Olivia Wilson", phone: "9988776655", service: "House Cleaning", email: "olivia@example.com" }
    ];

    return (
        <div className="provider-container">
            <h2>Available House Cleaning Providers</h2>
            <table className="provider-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Type of Service</th>
                        <th>Email ID</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {providers.map((provider) => (
                        <tr key={provider.id}>
                            <td>{provider.name}</td>
                            <td>{provider.phone}</td>
                            <td>{provider.service}</td>
                            <td>{provider.email}</td>
                            <td>
                                <button className="book-btn">
                                    <Link to="/book-service" className="book-link">Book Now</Link>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HouseCleaningProviders;

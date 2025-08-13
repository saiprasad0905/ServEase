import React from "react";
import { useNavigate } from "react-router-dom";
import HouseCleaningProviders from "./HouseCleaningProviders"; // Adjust the path as needed

const HomeCleaning = () => {
    const navigate = useNavigate();

    const handleBookNow = () => {
        navigate("/house-cleaning-providers");  // Redirects to the table
    };

    return (
        <div>
            <h2>Home Cleaning Services</h2>
            <div className="service-grid">
                {/* Example Service */}
                <div className="service-card">
                    <h3>Professional House Cleaning</h3>
                    <p>Expert cleaning services for your home.</p>
                    <button onClick={handleBookNow}>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default HomeCleaning;
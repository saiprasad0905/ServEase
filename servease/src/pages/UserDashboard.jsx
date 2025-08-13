import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function UserDashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login"); // Redirect if not logged in
    }
  }, [navigate]);

  return (
    <div className="dashboard">
      <h2>Welcome, {user?.name || "User"}!</h2>
      <button onClick={() => navigate("/services")}>Book a New Service</button>
    </div>
  );
}

export default UserDashboard;

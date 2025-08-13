import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styless.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user", // Default role
    service: "", // Service field for providers
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", formData);
      alert(response.data.message);
      if (formData.role === "user") {
        navigate("/"); // Redirect to home page
      } else if (formData.role === "provider") {
        navigate("/provider-dashboard"); // Redirect to provider dashboard
      }
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="auth-container">
      <h1>Signup</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Create a password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label>Role:</label>
        <select name="role" value={formData.role} onChange={handleChange} required>
          <option value="user">User</option>
          <option value="provider">Provider</option>
        </select>

        {formData.role === "provider" && (
          <>
            <label>Service:</label>
            <input
              type="text"
              name="service"
              placeholder="Enter your service"
              value={formData.service}
              onChange={handleChange}
              required
            />
          </>
        )}

        <button type="submit" className="auth-btn">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
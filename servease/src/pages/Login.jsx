import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./styless.css";

const users = [
  { email: "sai123@gmail.com", password: "userpass", role: "user" },
  { email: "provider@xyz.com", password: "providerpass", role: "provider" }
];

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulated user & provider authentication
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      if (user.role === "user") {
        localStorage.setItem("user", JSON.stringify({ name: "Sai", email }));
        setIsAuthenticated(true);
        navigate("/user-dashboard"); // Redirect to User Dashboard
      } else if (user.role === "provider") {
        localStorage.setItem("provider", JSON.stringify({ name: "Provider", email }));
        setIsAuthenticated(true);
        navigate("/provider-dashboard"); // Redirect to Provider Dashboard
      }
    } else {
      alert("Invalid credentials! Try again.");
    }
  };

  return (
    <div className="auth-container">
      <h1>Login</h1>
      <form className="auth-form" onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="auth-btn">Login</button>
      </form>
      <p className="signup-link">
        Don't have an account yet? <Link to="/signup">Join us</Link>
      </p>
    </div>
  );
};

export default Login;
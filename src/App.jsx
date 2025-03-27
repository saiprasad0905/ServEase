import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Payment from "./pages/Payment";
import UserDashboard from "./pages/UserDashboard";
import ProviderDashboard from "./pages/ProviderDashboard";
import EditService from "./pages/EditService";
import Footer from "./components/Footer";
import "./App.css";
import HomeCleaning from "./pages/HomeCleaning";  // Import home cleaning
import HouseCleaningProviders from "./pages/HouseCleaningProviders"; // Import provider list
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is logged in from Local Storage
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/provider-dashboard" element={<ProviderDashboard />} />
            <Route path="/edit-service" element={<EditService />} />
            <Route path="/home-cleaning" element={<HomeCleaning />} />
            <Route path="/house-cleaning-providers" element={<HouseCleaningProviders />} />

            {/* Protected Route for Services */}
            <Route
              path="/services"
              element={isAuthenticated ? <Services /> : <Navigate to="/login" />}
            />

            {/* Protected Route for Booking */}
            <Route
              path="/booking/:id"
              element={isAuthenticated ? <Booking /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
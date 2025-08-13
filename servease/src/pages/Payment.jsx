import React from "react";
import "./styless.css";

function Payment() {
  return (
    <div className="payment-container">
      <h1>Secure Payment</h1>
      <form className="payment-form">
        <label>Card Number:</label>
        <input type="text" placeholder="Enter card number" required />

        <label>Expiration Date:</label>
        <input type="text" placeholder="MM/YY" required />

        <label>CVV:</label>
        <input type="text" placeholder="CVV" required />

        <button type="submit" className="pay-btn">Pay Now</button>
      </form>
    </div>
  );
}

export default Payment;
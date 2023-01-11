import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import paymentLogo from '../../assets/images/gallery/PaymentLogo.png'
import CheckoutForm from "./CheckoutForm";
import "./paymentform.scss";
import { useContext } from 'react';
import Context from '../../context';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51M3lFCBdhXwO3KVwrgXL4Wdi2z3FH7XKeydDVgGwB072JByBGhXPMyewho0rln8M1XG11hfw6jLHDw8TZ59tmiyd00hPu85kSm");

export default function App() {
  const [clientSecret, setClientSecret] = useState("");
  let {selectedFlight , setRegStep, flightpassengers} = useContext(Context)

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:3000/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: selectedFlight.price.total }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  sessionStorage.setItem('selectedFlight', JSON.stringify(selectedFlight));
  sessionStorage.setItem('Passengers', JSON.stringify(flightpassengers));


  return (
    <div className="payment-form">
      <div className="payment-form_logo-container">
        <img src={paymentLogo} alt="" />
      </div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
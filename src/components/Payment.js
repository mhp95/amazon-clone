import React, { useState } from "react";
import "../styles/Payment.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

function Payment() {
  const strips = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(null);
  const handleSubmit = (event) => {
    //Stripe things
  };
  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout ({<Link to="/checkout">{basket?.length} items</Link>}){" "}
        </h1>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>LosAngeles,CA</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__address">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h1>Payment Method</h1>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit} action="">
              <CardElement onChange={handleChange} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

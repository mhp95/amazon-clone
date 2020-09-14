import React from "react";
import "../styles/Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/images/media/images/banner-ads-examples-ncino.jpg"
          alt=""
        />

        <div className="checkout__title">
          <h3>{user?.email}</h3>
          <h2>Your shopping basket</h2>
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
      <div className="checkout__right">
        <div className="checkout__subtotal">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;

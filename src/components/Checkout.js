import React from "react";
import "../styles/Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/images/media/images/banner-ads-examples-ncino.jpg"
          alt=""
        />

        <div className="checkout__title">
          <h2>Your shopping basket</h2>
          {/*Basket*/}
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

import React from "react";
import orderEmptyImg from "../../../assessts/orderEmpty.png";
import "./Order.css";

const OrderedItems = () => {
  return (
    <div className="container order-empty">
      <div className="order-empty">
        <div>
          <img src={orderEmptyImg} alt="order empty" width="250px" />
        </div>
        <div className="mt-3">
          <h5>Your orders will show here.</h5>
        </div>
      </div>
    </div>
  );
};

export default OrderedItems;

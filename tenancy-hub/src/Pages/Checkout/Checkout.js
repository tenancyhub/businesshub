import React, { useState, useEffect } from "react";
import FormInput from "../../components/Form-input/form-input.component";
import PayWithRaveBtn from "../../components/RaveGateway/PayWithRaveBtn";
import { getCartItemsOnCheckout } from "../../Services/CheckoutUtils";
import "./Checkout.css";

const Checkout = () => {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getCartItemsOnCheckout(setItemsInCart);
    // console.log(itemsInCart);
    if (itemsInCart.lenght > 0) {
      setLoading(!loading);
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-lg-6 col-sm col-md">
          <div className="col- lg-3 col-sm col-md">
            <h4>Shippng Address</h4>
            <div>
              <label htmlFor="Name">
                <i className="fas fa-user" /> Full Name
              </label>
              <FormInput type="text" placeholder=" John Doe..." />
            </div>
          </div>
          <div className="col- lg-3 col-sm col-md">
            <div>
              <label htmlFor="Email">
                <i className="fas fa-envelope" /> Email
              </label>
              <FormInput type="email" placeholder="doe@example.com..." />
            </div>
          </div>
          <div className="col- lg-3 col-sm col-md">
            <div>
              <label htmlFor="address">
                <i className="fas fa-address-card" /> Address
              </label>
              <FormInput type="text" placeholder="14 Apena..." />
            </div>
          </div>
          <div className="col- lg-3 col-sm col-md">
            <div>
              <label htmlFor="state">
                <i className="fas fa-address-card" /> State
              </label>
              <FormInput type="text" placeholder="Bornu state..." />
            </div>
          </div>
        </div>

        <div className="mt-5 col-lg-6 col-sm col-md">
          <div className="cart-container">
            <h4>
              Cart{" "}
              <span style={{ color: "black", float: "right" }}>
                <i className="fa fa-shopping-cart"></i>{" "}
                <b>{itemsInCart.length}</b>
              </span>
            </h4>
            {itemsInCart !== null &&
              itemsInCart.length > 0 &&
              itemsInCart.map((item, index) => (
                <p key={index}>
                  <span>{item.product["name"]}</span>{" "}
                  <span style={{ float: "right" }}>
                    &#8358; {item.product["amount"] * item.quantity}
                  </span>
                </p>
              ))}

            <hr />
            <p>
              Total{" "}
              <span
                className="price"
                style={{ color: "black", float: "right" }}
              >
                <b>&#8358; total</b>
              </span>
            </p>
          </div>
          <div className="mt-3 text-center" style={{ width: "100%" }}>
            <PayWithRaveBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

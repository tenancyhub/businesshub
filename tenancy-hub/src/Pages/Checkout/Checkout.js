import React from "react";
import FormInput from "../../components/Form-input/form-input.component";
import PayWithRaveBtn from "../../components/RaveGateway/PayWithRaveBtn";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div class="container">
      <div className="row p-5">
        <div className="col-lg-6 col-sm col-md">
          <div className="col- lg-3 col-sm col-md">
            <h4>Shippng Address</h4>
            <div>
              <label htmlFor="Name">
                <i class="fas fa-user" /> Full Name
              </label>
              <FormInput type="text" placeholder=" John Doe..." />
            </div>
          </div>
          <div className="col- lg-3 col-sm col-md">
            <div>
              <label htmlFor="Email">
                <i class="fas fa-envelope" /> Email
              </label>
              <FormInput type="email" placeholder="doe@example.com..." />
            </div>
          </div>
          <div className="col- lg-3 col-sm col-md">
            <div>
              <label htmlFor="address">
                <i class="fas fa-address-card" /> Address
              </label>
              <FormInput type="text" placeholder="14 Apena..." />
            </div>
          </div>
          <div className="col- lg-3 col-sm col-md">
            <div>
              <label htmlFor="state">
                <i class="fas fa-address-card" /> State
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
                <i className="fa fa-shopping-cart"></i> <b>4</b>
              </span>
            </h4>
            <p>
              <span>Product 1</span> <span style={{ float: "right" }}>$15</span>
            </p>
            <p>
              <span>Product 2</span> <span style={{ float: "right" }}>$5</span>
            </p>
            <p>
              <span>Product 3</span> <span style={{ float: "right" }}>$8</span>
            </p>
            <p>
              <span>Product 4</span> <span style={{ float: "right" }}>$2</span>
            </p>
            <hr />
            <p>
              Total{" "}
              <span
                className="price"
                style={{ color: "black", float: "right" }}
              >
                <b>$30</b>
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

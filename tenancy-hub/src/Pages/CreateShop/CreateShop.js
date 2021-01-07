import React, { useState, useEffect } from "react";
import FormInput from "../../components/Form-input/form-input.component";
// import LoginBtn from "../../components/CustomButton/CustomButton";
import {
  getAvailableDispatchRider,
  getCurrencyType,
  createShop,
  getPaymentRef,
} from "../../Services/CreateShoputil";
import { connect } from "react-redux";
import { loadUser } from "../../actions/AuthAction";

import "./createShop.css";
import { useHistory } from "react-router-dom";
import PayWithRaveBtn from "../../components/RaveGateway/PayWithRaveBtn";

const CreateShop = ({ loadUser }, props) => {
  const history = useHistory();
  useEffect(() => {
    getCurrencyType(setCurrency);

    //eslint - disable - next - line;
  }, []);

  //   const history = useHistory();
  const [shop, setShop] = useState({
    storeName: "",
    currencyId: " ",
    description: "",
    dispatchRiderId: "",
  });
  const [errors, setError] = useState({});
  const [dispatchRiderId, setdispatchRiderId] = useState([]);
  const [currency, setCurrency] = useState([]);
  const [res, setRes] = useState({});
  const [payRef, setPayRef] = useState({});
  const [riderAvailable, setAvailable] = useState("false");

  const validateForm = (props) => {
    // let formField = user.formField;
    let errors = {};
    let formIsValid = true;

    if (!shop.storeName) {
      formIsValid = false;
      errors["storeName"] = "Please provide a unique Store";
    }
    if (!shop.dispatchRiderId) {
      formIsValid = false;
      errors["dispatchRiderId"] = "Assign dispatch Rider to shop";
    }
    if (!shop.currencyId) {
      formIsValid = false;
      errors["currencyId"] = "select currency type";
    }
    if (!shop.description) {
      formIsValid = false;
      errors["description"] = "Provide some details about your shop";
    }
    setError(errors);
    return formIsValid;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      createShop(setRes, shop);
    }
    if (res.message === "200") {
      await getPaymentRef(setPayRef);
    }
    console.log("see mrere");
  };

  const onChanges = (e) => {
    setShop({
      ...shop,
      [e.target.name]: e.target.value,
    });
    // console.log(shop);
    if (e.target.name === "currencyId") {
      setAvailable("true");
      getAvailableDispatchRider(setdispatchRiderId, e.target.value);
    }
  };

  return (
    <div className="container">
      <h3 className="mt-3 p-3 mb-2">
        Pitch your tent on Tenancy-
        <span style={{ color: "goldenrod" }}>Hub</span> to grow incomes
      </h3>
      <form onSubmit={onSubmit}>
        {/* <div className="formGroup"> */}
        <label htmlFor="bank-detail">Shop Name</label>
        <span
          className="d-block"
          style={{ color: "#dd2b0e", fontSize: "0.875rem" }}
        >
          {errors["storeName"]}
        </span>
        <FormInput
          type="text"
          name="storeName"
          // value={email}
          placeholder="Enter Shop name"
          onChange={onChanges}
          required
        />
        <div>
          <label htmlFor="store description">Description</label>
          <span
            className="d-block"
            style={{ color: "#dd2b0e", fontSize: "0.875rem" }}
          >
            {errors["description"]}
          </span>
          <textarea
            className="group"
            name="description"
            //   value={description}
            onChange={onChanges}
            placeholder="Brief Store details"
            //   style={{ width: "100%" }}
            rows="3"
          ></textarea>
        </div>
        <label htmlFor="currency type">Currency type</label>

        <span
          className="d-block"
          style={{ color: "#dd2b0e", fontSize: "0.875rem" }}
        >
          {errors["currencyId"]}
        </span>
        <select value={shop.currencyId} onChange={onChanges} name="currencyId">
          <option value="SELECT CURRENCY TYPE">SELECT CURRENCY TYPE</option>
          {currency.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        <label htmlFor="currency type">Dispatch Ride</label>

        <span
          className="d-block"
          style={{ color: "#dd2b0e", fontSize: "0.875rem" }}
        >
          {errors["dispatchRiderId"]}
        </span>
        <select
          value={shop.dispatchRiderId}
          onChange={onChanges}
          name="dispatchRiderId"
          //   {!riderAvailable ? disabled: null}
        >
          <option value="SELECT DISPATCH RIDER">SELECT DISPATCH RIDER</option>
          {dispatchRiderId.map((r) => (
            <option key={r.id} value={r.id}>
              {r.name}
            </option>
          ))}
        </select>

        <span
          className="text-center"
          style={{ color: "#dd2b0e", fontSize: "0.875rem" }}
        >
          {" "}
          {res.message}
        </span>
        {res.message !== "200" && (
          <FormInput
            onClick={onSubmit}
            style={{ width: "100%", color: "black", background: "grey" }}
            type="submit"
            value="Create Shop"
          />
        )}
        {res.message === "200" && (
          <PayWithRaveBtn
            class="button"
            btnText="Pay Now to verify shop"
            txref={payRef.paymentReference}
            // ravePubKey="FLWPUBK_TEST-24e8c02b14df66ccb2e5494880a65e07-X"
            //   paymentReference={config.paymentReference}
            currency={payRef.currency}
            amount={payRef.amount}
            firstname={shop.storeName}
            customer_email={localStorage.getItem("email")}
            // callback={onSuccess}
          />
        )}
      </form>
    </div>
  );
};
// const mapStateToProps = (state) => ({
//   authState: state.Auth.isAuthenticated,
// });

export default CreateShop;
// export default connect(mapStateToProps, { login })(Login);

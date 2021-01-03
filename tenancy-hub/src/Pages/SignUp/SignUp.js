import React, { useState } from "react";
import FormInput from "../../components/Form-input/form-input.component";
import Register from "../../components/CustomButton/CustomButton";
import "./SignUp.css";

const SignUp = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    description: "",
    storeName: "",
    // storeUrl: "",
  });
  // const {
  //   firstname,
  //   lastname,
  //   email,
  //   password,
  //   confirmPassword,
  //   description,
  //   storeName,
  //   address,
  //   // storeUrl,
  // } = user;
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (event) => {
    // e.peventDefault();
    event.preventDefault();
    setUser({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      address: "",
      description: "",
      storeName: "",
      storeUrl: "",
    });
  };

  return (
    <div className="signup-container">
      <div className="form-container">
        <h3 className="mt-3 p-3 mb-2">
          Register on Tenancy-<span style={{ color: "goldenrod" }}>Hub</span>
        </h3>
        <form className="contactForm" onSubmit={onSubmit}>
          {/* <div className="d-flex"> */}
          <div className="">
            {/* <label>Firstname</label> */}
            <FormInput
              type="text"
              label="Fisrstname"
              // value={firstname}
              onChange={handleChange}
              placeholder="Firstname"
            />
          </div>
          <div>
            <label>Lastname</label>
            <FormInput
              type="text"
              // value={lastname}
              onChange={handleChange}
              placeholder="Last Name"
            />
          </div>
          {/* </div> */}
          <div>
            <label>Email</label>
            <FormInput
              type="email"
              //   value={email}
              onChange={handleChange}
              placeholder="Enter email address"
            />
          </div>
          {/* <div className="d-flex"> */}
          <div className="">
            <label>Password</label>
            <FormInput
              type="password"
              // value={password}
              onChange={handleChange}
              placeholder="Password"
            />
          </div>
          <div className="">
            <label>Confirm password</label>
            <FormInput
              type="password"
              // value={confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
            />
          </div>
          {/* </div> */}
          <div>
            <label>Store Name</label>
            <FormInput
              type="text"
              //   value={storeName}
              onChange={handleChange}
              placeholder="Store name"
            />
          </div>
          {/* <div>
            <label>Store Url</label>
            <FormInput
              type="text"
              //   value={storeUrl}
              onChange={handleChange}
              placeholder="Store Url"
            />
          </div> */}
          <div>
            <label>Description</label>
            <textarea
              class="group"
              name="description"
              //   value={description}
              onChange={handleChange}
              placeholder="Brief Store details"
              //   style={{ width: "100%" }}
              rows="3"
            ></textarea>
          </div>
          <div>
            <label>Address</label>
            <FormInput
              type="text"
              onChange={handleChange}
              //   value={address}
              placeholder="Address"
            />
          </div>
          <Register style={{ width: "100%" }}>Register</Register>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

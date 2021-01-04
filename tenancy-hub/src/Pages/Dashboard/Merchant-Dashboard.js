import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Merchant.css";

const MerchantDashboard = () => {
  const activeStyle = {
    background: "rgba(140, 145, 150, 1)",
  };
  const [sidebar, setSidebar] = useState("true");

  const toggleSideBar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="container-fluid">
      <div className={`${sidebar ? "sidebar" : "sidebar-show"} `}>
        <span onClick={toggleSideBar} className="closebtn">
          ☰
        </span>
        <NavLink to="/admin" activeStyle={activeStyle}>
          <span className="fas fa-home">{""}</span> Home{" "}
        </NavLink>
        <NavLink to="/asdf" activeStyle={activeStyle}>
          <span className="fas fa-envelope">{""}</span> Notification{" "}
        </NavLink>
        <NavLink to="/products" activeStyle={activeStyle}>
          <span className="fas fa-plus-square">{""}</span> Products{" "}
        </NavLink>
        <NavLink to="/orders" activeStyle={activeStyle}>
          <span className="fas fa-inbox">{""}</span> Orders{" "}
        </NavLink>
        <NavLink to="/customers" activeStyle={activeStyle}>
          <span className="fas fa-user">{""}</span> Customers{" "}
        </NavLink>
        <NavLink to="/shop" activeStyle={activeStyle}>
          <span className="fas fa-store">{""}</span> Online-Store{" "}
        </NavLink>
        <NavLink to="/setting" activeStyle={activeStyle}>
          <span className="fas fa-user-cog">{""}</span> Setting{" "}
        </NavLink>
      </div>

      <div id="main" className={`${sidebar ? "main" : "main-full"} `}>
        <button className="openbtn" onClick={toggleSideBar}>
          ☰
        </button>

        <div className="container">
          <div>{/* <img src='' */}rfifiowo</div>
        </div>
      </div>
    </div>
  );
};

export default MerchantDashboard;

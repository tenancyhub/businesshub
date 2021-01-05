import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AddFormProduct from "../AddProductForm/AddFormProduct";
import "./Merchant.css";
import Notification from "./Notification/Notification";
import { connect } from "react-redux";
import { loadUser } from "../../actions/AuthAction";

const MerchantDashboard = ({ user, loadUser }, props) => {
  const activeStyle = {
    // background: "rgba(140, 145, 150, 1)",
  };
  // useEffect(() => {
  //   loadUser();
  //   if (user.account_number === null) {
  //     props.history("/verify-merchant");
  //   } else if (user.token === 0) {
  //     props.history("/payment");
  //   }
  //   // eslint-disable-next-line
  // }, []);

  const [sidebar, setSidebar] = useState("true");
  const [veiw, setVeiw] = useState("false");

  const toggleSideBar = () => {
    setVeiw(!veiw);
  };
  const toggleSide = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="wrapper">
      <div className={`${sidebar ? "sidebar" : "sidebar-show"} `}>
        <span onClick={toggleSide} className="closebtn">
          ☰
        </span>
        <NavLink to="/admin" activeStyle={activeStyle}>
          <span className="fas fa-home">{""}</span> Home{" "}
        </NavLink>
        <NavLink to="/admin" onClick={toggleSideBar} activeStyle={activeStyle}>
          <span className="fas fa-envelope">{""}</span> Notification{" "}
        </NavLink>
        <NavLink to="/admin" onClick={toggleSideBar} activeStyle={activeStyle}>
          <span className="fas fa-plus-square">{""}</span> Products{" "}
        </NavLink>
        <NavLink to="/admin" activeStyle={activeStyle}>
          <span className="fas fa-inbox">{""}</span> Orders{" "}
        </NavLink>
        <NavLink to="/admin" activeStyle={activeStyle}>
          <span className="fas fa-user">{""}</span> Customers{" "}
        </NavLink>
        <NavLink to="/shop" activeStyle={activeStyle}>
          <span className="fas fa-store">{""}</span> Online-Store{" "}
        </NavLink>
        <NavLink to="/admin" activeStyle={activeStyle}>
          <span className="fas fa-user-cog">{""}</span> Setting{" "}
        </NavLink>
      </div>

      <div id="main" className={`${sidebar ? "main" : "main-full"} `}>
        <button className="openbtn" onClick={toggleSideBar}>
          ☰
        </button>

        <div className="container">
          {veiw && (
            <div>
              <AddFormProduct />
            </div>
          )}
          {veiw && (
            <div>
              <Notification />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.Auth.user,
});

export default connect(mapStateToProps, { loadUser })(MerchantDashboard);

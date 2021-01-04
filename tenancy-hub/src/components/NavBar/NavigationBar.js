import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Login from "../../Pages/Login-Modal/Login";
import SignUpButton from "../CustomButton/CustomButton";
import { connect } from "react-redux";
import "./Navbar.css";

const NavBar = ({ isUser, isAuthenticated }) => {
  const [showNav, setShowNav] = useState(false);
  const history = useHistory();

  // const productContext = useContext(ProductContext);

  // const { cart } = productContext;
  // const cartLength = JSON.parse(window.localStorage.getItem("inCart"));
  // const isLogggedIn =(
  //   <Fragment>
  //     <li className="nav-item">
  //               <Link className="nav-link" to="/">
  //                 {isActive ? "Log out" : <Login />}
  //               </Link>
  //             </li>
  //   </Fragment>
  // )
  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <p className="logo">
            Tenancy <span style={{ color: "goldenrod" }}>Hub</span>
          </p>
        </Link>

        <div className={(showNav ? "show" : "") + " collapse navbar-collapse"}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                {isAuthenticated ? "Log out" : <Login />}
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/">
                {isAuthenticated && `Hello ${firstName}`}
              </Link>
            </li> */}

            {!isAuthenticated && (
              <li className="nav-item">
                <SignUpButton
                  onClick={() => {
                    history.push(`/register`);
                  }}
                  type="button"
                  style={{ borderRadius: "5px" }}
                >
                  Sell on Tenancy hub
                </SignUpButton>
              </li>
            )}
          </ul>
        </div>
        <span className="nav-item mr-auto" style={{ position: "relative" }}>
          {isUser && (
            <Link className="nav-link" to="/cart">
              <i className="fas fa-shopping-cart fa-2x"></i>

              {/* {cart && (
              <p
                className="badge badge-danger"
                style={{ position: "absolute", top: "-2px", right: "35PX" }}
              >
                {cart.length}
              </p>
            )} */}
            </Link>
          )}
        </span>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => toggleNav()}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};
const mapStateToProps = (state) => ({
  isLogin: state.isAuthenticated,
  user: state.user,
});

export default connect(mapStateToProps)(NavBar);

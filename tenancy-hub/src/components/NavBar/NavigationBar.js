import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
// import Login from "../../Pages/Login-Modal/Login";
import SignUpButton from "../CustomButton/CustomButton";
import { connect } from "react-redux";
import { logOut } from "../../actions/AuthAction";
import "./Navbar.css";

const NavBar = ({ cart, logOut }) => {
  const [showNav, setShowNav] = useState(false);
  const history = useHistory();
  const [isCustomer, setIsCustomer] = useState(false);

  useEffect(() => {
    if (localStorage.token) {
      localStorage.setItem("isloggedIn", "true");
    }
    if (localStorage.userType === "CUSTOMER") {
      setIsCustomer(true);
    }
  }, []);

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
  // const onlogOut = async () => {
  //   console.log("ljhj");
  //   logOut();
  // };

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light">
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
              {localStorage.token ? (
                <Link className="nav-link" to="/">
                  <span
                    onClick={() => {
                      logOut();
                    }}
                  >
                    Log out
                  </span>
                </Link>
              ) : (
                <Link className="nav-link" to="/login">
                  <span>Login</span>
                </Link>
              )}
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/">
                {isAuthenticated && `Hello ${firstName}`}
              </Link>
            </li> */}

            {!localStorage.token && (
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
        {isCustomer && (
          <span className="nav-item mr-auto" style={{ position: "relative" }}>
            <Link className="nav-link" to="/cart">
              <i className="fas fa-shopping-cart fa-2x"></i>

              {cart && (
                <p
                  className="badge badge-danger"
                  style={{
                    position: "absolute",
                    top: "-2px",
                    right: "35PX",
                  }}
                >
                  {cart.length}
                </p>
              )}
            </Link>
          </span>
        )}
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
  isLogin: state.Auth.isAuthenticated,
  user: state.Auth.user,
  cart: state.product.cart,
});

export default connect(mapStateToProps, { logOut })(NavBar);

import React, { Fragment } from "react";
import NavBar from "./components/NavBar/NavigationBar";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./Pages/Login-Modal/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Homepage from "./Pages/Homepage";
import MerchantDashboard from "./Pages/Dashboard/Merchant-Dashboard";
import { Provider } from "react-redux";
import store from "./Store";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Products from "./Pages/Products";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import PrivateRoute from "./components/routing/PrivateRoute";
import AddFormProduct from "./Pages/AddProductForm/AddFormProduct";
import Carts from "./Pages/Cart/Carts";
import VerifyMercchant from "./Pages/VerifyAccount/Verify-Merchant";
// import PayWithRaveBtn from "./components/RAveGateway/PayWithRaveBtn";
import setAuthToken from "./utils/SetAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/Login" component={Login} />
          <Route path="/shop" component={Products} />
          <Route path="/cart" component={Carts} />
          {/* <Route path="/payment" component={PayWithRaveBtn} /> */}
          <Route path="/verify-merchant" component={VerifyMercchant} />
          <Route path="/add-product" component={AddFormProduct} />
          <Route path="/admin" component={MerchantDashboard} />
          <Route path="/register" component={SignUp} />
          <Route component={ErrorPage} />
        </Switch>
        <ToastContainer />
      </Fragment>
    </Provider>
  );
};

export default App;

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
import PrivateRoute from "./components/routing/PrivateRoute";
const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/Login" component={Login} />
          <PrivateRoute path="/shop" component={Products} />
          <PrivateRoute path="/admin" component={MerchantDashboard} />
          <Route path="/register" component={SignUp} />
          <Route component={ErrorPage} />
        </Switch>
        <ToastContainer />
      </Fragment>
    </Provider>
  );
};

export default App;

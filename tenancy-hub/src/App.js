import React, { Fragment } from "react";
import NavBar from "./components/NavBar/NavigationBar";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./Pages/Login-Modal/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Homepage from "./Pages/Homepage";

const App = () => {
  return (
    <Fragment>
      <NavBar />

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/Login" component={Login} />
        <Route path="/register" component={SignUp} />
      </Switch>
    </Fragment>
  );
};

export default App;

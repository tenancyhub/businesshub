import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !props.isAuthenticated && !props.loading ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.Auth.isAuthenticated,
  loader: state.Auth.loading,
});
export default connect(mapStateToProps)(PrivateRoute);

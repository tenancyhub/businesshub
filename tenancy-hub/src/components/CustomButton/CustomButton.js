import React from "react";
import PropTypes from "prop-types";
import "./custombtn.css";

const customButton = ({ children, ...otherProps }) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};

export default customButton;

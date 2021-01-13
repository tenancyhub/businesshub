import React, { useState, useEffect } from "react";
// import { useState } from "react";/
// import { useEffect } from "react";
import PayWithRave from "../../components/RaveGateway/PayWithRaveBtn";
import { Subscribe } from "../../Services/MerchantTokaenPayment";
import { loadMerchantInfo } from "../../Services/LoadMerchant-InfoUtil";
import { connect } from "react-redux";
import { loadUser } from "../../actions/AuthAction";
// import axios from "axios";
// import util from "../../utils/util";
// import setAuthToken from "../../utils/SetAuthToken";
import "./pay.css";

const PaymentPage = ({ user, loadUser }, props) => {
  const [config, setConfig] = useState({});
  const [details, setDetails] = useState({});
  useEffect(() => {
    // loadUser();
    loadMerchantInfo(setDetails);
    Subscribe(setConfig);

    // eslint - disable - next - line;
  }, []);

  const onSuccess = () => {
    props.history("/admin");
  };

  return (
    <div className="pay-container">
      <div className="pay">
        <p>Please click the button below to proceed to Payment</p>
        <PayWithRave
          // btnText="Pay"
          tx_ref={config.paymentReference}
          currency={config.currency}
          amount={config.amount}
          name={details.firstName}
          phoneNumber={details.phoneNumber}
          // lastname={details.lastName}
          email={localStorage.email}
          callback={onSuccess}
        />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.Auth,
});

export default connect(mapStateToProps, { loadUser })(PaymentPage);

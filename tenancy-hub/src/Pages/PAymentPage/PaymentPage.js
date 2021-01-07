import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import PayWithRave from "../../components/RaveGateway/PayWithRaveBtn";
import { Subscribe } from "../../Services/MerchantTokaenPayment";
import { connect } from "react-redux";
import { loadUser } from "../../actions/AuthAction";
import axios from "axios";
import util from "../../utils/util";
import setAuthToken from "../../utils/SetAuthToken";
import "./pay.css";

const PaymentPage = ({ user, loadUser }, props) => {
  useEffect(() => {
    // loadUser();
    Subscribe(setConfig);
    // if (localStorage.token) {
    //   setAuthToken(localStorage.token);
    // }

    // try {
    const ref = async () => {
      if (localStorage.token) {
        setAuthToken(localStorage.token);
      }
      try {
        const res = await axios.get(`${util}merchant/my-info`);
        setDetails({ ...res.data.user });
        console.log(res.data.user);
      } catch (err) {
        console.log(err);
      }
    };
    ref();
    // console.log(details);
    // eslint - disable - next - line;
  }, []);

  // const onSuccess = () => {
  //   props.history("/admin");
  // };

  const [config, setConfig] = useState({});
  const [details, setDetails] = useState({});
  return (
    <div className="pay-container">
      <div className="pay">
        <p>Please click the button below to proceed to Payment</p>
        <PayWithRave
        // btnText="Pay"
        // txref={config.paymentReference}
        // // ravePubKey="FLWPUBK_TEST-24e8c02b14df66ccb2e5494880a65e07-X"
        // //   paymentReference={config.paymentReference}
        // currency={config.currency}
        // amount={config.amount}
        // firstname={details.firstName}
        // lastname={details.lastName}
        // customer_email={details.email}
        // callback={onSuccess}
        />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.Auth,
});

export default connect(mapStateToProps, { loadUser })(PaymentPage);

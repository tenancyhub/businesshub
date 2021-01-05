import React from "react";
import { useRavePayment } from "react-ravepayment";

//test card--  5531 8866 5214 2950

// const price = localStorage.getItem("total");
const config = {
  txref: "FLW_ZvNytRaK1i_1609802091319",
  customer_email: "user@example.com",
  customer_phone: "234099940409",
  amount: 230000,
  PBFPubKey: "FLWPUBK_TEST-24e8c02b14df66ccb2e5494880a65e07-X",

  production: false,
};

const PayWithRaveBtn = () => {
  const { initializePayment } = useRavePayment(config);
  return (
    <div>
      <button onClick={() => initializePayment()}>Proceed to Pay</button>
    </div>
  );
};

export default PayWithRaveBtn;

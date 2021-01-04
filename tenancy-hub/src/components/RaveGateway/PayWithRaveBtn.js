// import React from "react";
// import PayWithStripe from "react-stripe-checkout";
// import "./stripebtn.css";

// const PayWithRaveBtn = ({ price, props }) => {
//   const amountToPay = price * 100;
//   const publishablekey =
//     "pk_test_51HrXzAC7pxoyF2hAGJry7eT2u9yz1QX0qFrxEHZfZ4RTA5TWVmMOEZVHydUARPjEUmEmtVsG1GVg8lseAssusjNI00fTZXUwHY";
//   const onToken = (token) => {
//     alert("Payment Successful...Thank you!!!");
//     window.location.href = "/";
//   };

//   return (
//     <PayWithRave
//       ComponentClass="custom-btn"
//       label="Proceed to Checkout"
//       name="Futerex Home of Quality..."
//       billingAddress
//       shippingAddress
//       image="https://res.cloudinary.com/undercover/image/upload/v1606350671/skciy4mzzis81kv31cin.png"
//       description={`Total Amount is ${price}`}
//       amount={amountToPay}
//       panelLabel="Pay Now"
//       token={onToken}
//       stripeKey={publishablekey}
//     />
//   );
// };

// export default PayWithRaveBtn;

import React from "react";
import { useRavePayment } from "react-ravepayment";

//test card--  5531 8866 5214 2950

const price = localStorage.getItem("total");
const config = {
  txref: "rave-123456",
  customer_email: "user@example.com",
  customer_phone: "234099940409",
  amount: price,
  PBFPubKey: "FLWPUBK_TEST-24e8c02b14df66ccb2e5494880a65e07-X",

  production: false,
};

const PayWithRaveBtn = (props) => {
  const { initializePayment } = useRavePayment(config);
  return (
    <div>
      <button onClick={() => initializePayment()}>Proceed to Pay</button>
    </div>
  );
};

export default PayWithRaveBtn;

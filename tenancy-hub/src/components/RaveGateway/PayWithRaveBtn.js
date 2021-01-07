import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import PayBtn from "../CustomButton/CustomButton";

const PayWithRaveBtn = (props) => {
  const config = {
    public_key: "FLWPUBK_TEST-24e8c02b14df66ccb2e5494880a65e07-X",
    tx_ref: props.tx_ref,
    amount: props.amount,
    currency: props.currency,

    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: props.email,
      phonenumber: "07037860938",
      name: props.name,
    },
    customizations: {
      title: props.storeName,
      // description: "Payment for items in cart",
      logo:
        "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="">
      {/* <h1>Hello Test user</h1> */}

      <PayBtn
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              closePaymentModal(); // this will close the modal programmatically
            },
            onClose: () => {
              console.log("Payment closed");
            },
          });
        }}
      >
        Proceed to pay
      </PayBtn>
    </div>
  );
};
export default PayWithRaveBtn;

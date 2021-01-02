import React from "react";
import PayWithStripe from "react-stripe-checkout";
import "./stripebtn.css";

const PayWithStripeBtn = ({ price, props }) => {
  const amountToPay = price * 100;
  const publishablekey =
    "pk_test_51HrXzAC7pxoyF2hAGJry7eT2u9yz1QX0qFrxEHZfZ4RTA5TWVmMOEZVHydUARPjEUmEmtVsG1GVg8lseAssusjNI00fTZXUwHY";
  const onToken = (token) => {
    alert("Payment Successful...Thank you!!!");
    window.location.href = "/";
  };

  return (
    <PayWithStripe
      ComponentClass="custom-btn"
      label="Proceed to Checkout"
      name="Futerex Home of Quality..."
      billingAddress
      shippingAddress
      image="https://res.cloudinary.com/undercover/image/upload/v1606350671/skciy4mzzis81kv31cin.png"
      description={`Total Amount is ${price}`}
      amount={amountToPay}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default PayWithStripeBtn;

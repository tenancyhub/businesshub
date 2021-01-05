// import React from "react";
// import { useRavePayment } from "react-ravepayment";

// //test card--  5531 8866 5214 2950

// // const price = localStorage.getItem("total");
// const config = {
//   txref: "FLW_1yBsfeFw8r_1609846733885",
//   customer_email: "rave@example.com",
//   customer_phone: "234099940409",
//   amount: 200,
//   PBFPubKey: "FLWPUBK_TEST-24e8c02b14df66ccb2e5494880a65e07-X",

//   production: false,
// };

// const PayWithRaveBtn = () => {
//   const { initializePayment } = useRavePayment(config);
//   return (
//     <div>
//       <button onClick={() => initializePayment()}>Proceed to Pay</button>
//     </div>
//   );
// };

// export default PayWithRaveBtn;

import React, { useState } from "react";
// import './App.css';
// Import the Library
import Rave from "react-flutterwave-rave";

const PayWithRaveBtn = (props) => {
  const [config, setConfig] = useState({
    key: "FLWPUBK_TEST-24e8c02b14df66ccb2e5494880a65e07-X", // RavePay PUBLIC KEY
    phone: "0000000000000",
    amount: 2000,
    firstname: "Oluwole",
    lastname: "Adebiyi",
    email: "test@test.com",
    room_number: "23A",
    hostel: "Silver 1",
    ticket_number: 3,
  });
  //   this.callback = this.callback.bind(this);
  //   this.close = this.close.bind(this);
  // }

  const callback = (response) => {
    console.log(response);
  };

  const close = () => {
    console.log("Payment closed");
  };

  return (
    <div className="App">
      <Rave
        pay_button_text="Pay With Rave"
        class="button"
        metadata={[
          { metaname: "Tickets", metavalue: config.ticket_number },
          { metaname: "Hostel", metavalue: config.hostel },
          { metaname: "Room", metavalue: config.room_number },
        ]}
        payment_method="card"
        customer_email={config.email}
        customer_phone={config.phone}
        amount={20}
        currency="USD"
        ravePubKey={config.key}
        callback={callback}
        onclose={close}
      />
    </div>
  );
};

export default PayWithRaveBtn;

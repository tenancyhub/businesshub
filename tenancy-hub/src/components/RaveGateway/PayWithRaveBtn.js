import React, { useState, useEffect } from "react";
// import './App.css';
// Import the Library
import Rave from "react-flutterwave-rave";

const PayWithRaveBtn = (props) => {
  //test card--  5531 8866 5214 2950
  // exp: 09/32
  // cvv 564
  useEffect(() => {
    setConfig({ ...props });
  }, [props]);

  const [config, setConfig] = useState({
    // key: "FLWPUBK_TEST-24e8c02b14df66ccb2e5494880a65e07-X", // RavePay PUBLIC KEY
    // phone: "0000000000000",
    // amount: 2000,
    // firstname: "Oluwole",
    // lastname: "Adebiyi",
    // email: "test@test.com",
    // room_number: "23A",
    // hostel: "Silver 1",
    // ticket_number: 3,
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
        pay_button_text={props.btnText}
        {...config}
        class="pay-button"
        // metadata={[
        //   { metaname: "Tickets", metavalue: config.ticket_number },
        //   { metaname: "Hostel", metavalue: config.hostel },
        //   { metaname: "Room", metavalue: config.room_number },
        // ]}
        payment_method="card"
        // customer_email={config.email}
        // customer_phone={config.phone}
        // amount={20}
        // currency="USD"
        ravePubKey="FLWPUBK_TEST-24e8c02b14df66ccb2e5494880a65e07-X" // RavePay PUBLIC KEY
        callback={callback}
        onclose={close}
      />
    </div>
  );
};

export default PayWithRaveBtn;

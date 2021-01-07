// import React, { useState, useEffect } from "react";
// import Rave from "react-flutterwave-rave";

// const PayWithRaveBtn = (props) => {
//   //test card--  5531 8866 5214 2950
//   // exp: 09/32
//   // cvv 564
//   useEffect(() => {
//     setConfig({ ...props });
//   }, [props]);

//   const [config, setConfig] = useState({
//     // key: "FLWPUBK_TEST-24e8c02b14df66ccb2e5494880a65e07-X", // RavePay PUBLIC KEY
//     // phone: "0000000000000",
//     // amount: 2000,
//     // firstname: "Oluwole",
//     // lastname: "Adebiyi",
//     // email: "test@test.com",
//     // room_number: "23A",
//     // hostel: "Silver 1",
//     // ticket_number: 3,
//   });
//   //   this.callback = this.callback.bind(this);
//   //   this.close = this.close.bind(this);
//   // }

//   // const callback = (response) => {
//   //   console.log(response);
//   // };

//   const close = () => {
//     console.log("Payment closed");
//   };

//   return (
//     <div className="App">
//       <Rave
//         pay_button_text={props.btnText}
//         {...config}
//         class="pay-button"
//         // metadata={[
//         //   { metaname: "Tickets", metavalue: config.ticket_number },
//         //   { metaname: "Hostel", metavalue: config.hostel },
//         //   { metaname: "Room", metavalue: config.room_number },
//         // ]}
//         payment_method="card"
//         // customer_email={config.email}
//         // customer_phone={config.phone}
//         // amount={20}
//         // currency="USD"
//         // email="shit2boy@live.com"
//         ravePubKey="FLWPUBK_TEST-24e8c02b14df66ccb2e5494880a65e07-X"
//         callback={props.callback}
//         onclose={close}
//       />
//     </div>
//   );
// };

// export default PayWithRaveBtn;

import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import PayBtn from "../CustomButton/CustomButton";

const PayWithRaveBtn = (props) => {
  const config = {
    public_key: "FLWPUBK_TEST-24e8c02b14df66ccb2e5494880a65e07-X",
    tx_ref: Date.now(),
    amount: 100,
    currency: "NGN",

    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phonenumber: "07064586146",
      name: "joel ugwumadu",
    },
    customizations: {
      title: "my Payment Title",
      description: "Payment for items in cart",
      logo:
        "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
      <h1>Hello Test user</h1>

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
        Payment with React hooks
      </PayBtn>
    </div>
  );
};
export default PayWithRaveBtn;

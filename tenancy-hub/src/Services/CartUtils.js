import axios from "axios";
import API_BASE_URL from "../utils/util";
import setAuthToken from "../utils/SetAuthToken";

export const add = async (callBackFunction, carts) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  const config = {
    headers: {
      "content-Type": "application/json",
    },
  };
  let cartItems;
  carts.map((item) => {
    cartItems = {
      productId: item.id,
      quantity: item.quantity,
    };
  });

  //   carts.map(items)=>{
  // console.log('klk');
  //   }
  try {
    const res = await axios.post(`${API_BASE_URL}cart`, cartItems, config);

    // console.log(res.data);
    callBackFunction(res.data);
  } catch (error) {
    console.error(error);
  }
};

import axios from "axios";
import API_BASE_URL from "../utils/util";
import setAuthToken from "../utils/SetAuthToken";

export const cartItemsServices = async (callBackFunction, carts) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  const config = {
    headers: {
      "content-Type": "application/json",
    },
  };
  let cartItems = [];
  if (carts) {
    carts.map((item) => {
      cartItems.push({
        productId: item.id,
        quantity: item.quantity,
      });
      return cartItems;
    });
  }
  try {
    await axios.post(`${API_BASE_URL}cart`, cartItems, config);

    // console.log(res.data);
    callBackFunction(true);
  } catch (error) {
    console.error(error);
  }
};

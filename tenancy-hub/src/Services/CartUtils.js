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
  const Id = localStorage.currencyId;
  try {
    await axios.post(`${API_BASE_URL}cart/${Id}`, cartItems, config);

    // console.log(res.data);
    await callBackFunction("200");
  } catch (error) {
    console.error(error);
  }
};

import axios from "axios";
import API_BASE_URL from "../utils/util";
import setAuthToken from "../utils/SetAuthToken";

export const addProductUtil = async (callBackFunction, item) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  const config = {
    headers: {
      "content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(`${API_BASE_URL}product/add`, item, config);

    // console.log(res.data);
    callBackFunction(res.data);
  } catch (error) {
    console.error(error);
  }
};

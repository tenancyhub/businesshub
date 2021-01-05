import axios from "axios";
import API_BASE_URL from "../utils/util";
import setAuthToken from "../utils/SetAuthToken";

export const getBanks = async (callBackFunction) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  const config = {
    headers: {
      "content-Type": "application/json",
    },
  };
  try {
    const res = await axios.get(`${API_BASE_URL}bank`, config);

    // console.log(res.data);
    callBackFunction(res.data);
  } catch (error) {
    console.error(error);
  }
};

export const validateDetails = async (callBackFunction, data) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  const config = {
    headers: {
      "content-Type": "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${API_BASE_URL}merchant/validate-account/${data.accountNumber}/${data.id}`,
      config
    );
    // console.log(res.data)
    callBackFunction(res.data);
  } catch (error) {
    // console.error(error.response.data.message);
    if (error.response.data.status === 422) {
      callBackFunction(error.response.data);
    }
  }
};
export const mapAccountToMerchant = async (callBackFunction, data) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  const config = {
    headers: {
      "content-Type": "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${API_BASE_URL}merchant/validate-account/${data.accountNumber}/${data.id}`,
      config
    );

    // console.log(res.data);
    // status(res.data.status);
    callBackFunction(res.data);
  } catch (error) {
    // console.error(error.response.data.message);
    if (error.response.data.status === 422) {
      callBackFunction(error.response.data);
    }
  }
};

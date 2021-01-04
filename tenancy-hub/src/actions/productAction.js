import axios from "axios";

import {
  GET_ITEMS,
  ADD_TO_CARTS,
  DELETE_ITEM,
  GET_TOTAL,
  DECREASE_CART_ITEM,
  GET_CART_LENGTH,
} from "../actions/Types";

export const getItems = () => async (dispatch) => {
  try {
    const res = await axios("https://fakestoreapi.com/products");
    dispatch({ type: GET_ITEMS, payload: res.data });
  } catch (err) {
    console.log(err);
    // dispatch({ type: ITEM_ERROR, payload: err.response.data });
  }
};

//Add contact
export const addToCart = (item) => async (dispatch) => {
  dispatch({ type: ADD_TO_CARTS, payload: item });

  // contact.id = uuidv4();
};

//Delete contact
export const deleteItem = (item) => async (dispatch) => {
  dispatch({ type: DELETE_ITEM, payload: item });
};

//decrease cart
export const decreaseCart = (item) => async (dispatch) => {
  dispatch({ type: DECREASE_CART_ITEM, payload: item });
};

//Determine Amount to pay

export const amountToPay = (item) => async (dispatch) => {
  dispatch({ type: GET_TOTAL, payload: item });
};

//Items in Cart

export const itemInCart = (item) => async (dispatch) => {
  dispatch({ type: GET_CART_LENGTH, payload: item });
};

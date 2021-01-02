import React, { useReducer } from "react";
// import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import ProductContext from "./ProductContext";
import productReducer from "./ProductReducer";
import {
  GET_ITEMS,
  ADD_TO_CARTS,
  DELETE_ITEM,
  GET_TOTAL,
  DECREASE_CART_ITEM,
  GET_CART_LENGTH,
} from "../Types";

const ProductState = (props) => {
  const inCart = [];
  const initialState = {
    inCart: JSON.parse(window.localStorage.getItem(inCart)),
    cart: [],
    filtered: null,
    loading: true,
    items: [],
    error: null,
    TotalAmountToPay: 0,
    inCartLength: 0,
  };
  const [state, dispatch] = useReducer(productReducer, initialState);
  //GET CONTACTS
  const getItems = async () => {
    try {
      const res = await axios("https://fakestoreapi.com/products");
      dispatch({ type: GET_ITEMS, payload: res.data });
    } catch (err) {
      console.log(err);
      // dispatch({ type: ITEM_ERROR, payload: err.response.msg });
    }
  };

  //Add contact
  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CARTS, payload: item });

    // contact.id = uuidv4();
  };

  //Delete contact
  const deleteItem = (item) => {
    dispatch({ type: DELETE_ITEM, payload: item });
  };

  //decrease cart
  const decreaseCart = (item) => {
    dispatch({ type: DECREASE_CART_ITEM, payload: item });
  };

  //Determine Amount to pay

  const amountToPay = (item) => {
    dispatch({ type: GET_TOTAL, payload: item });
  };

  //Items in Cart

  const itemInCart = (item) => {
    dispatch({ type: GET_CART_LENGTH, payload: item });
  };

  // useEffect(() => {
  //   setCartItemsCount(getCartItemsCount(cartItems));
  //   setCartTotal(getCartTotal(cartItems));
  // }, [cartItems]);

  return (
    <ProductContext.Provider
      value={{
        inCart: state.inCart,
        cart: state.cart,
        loading: state.loading,
        items: state.items,
        filtered: state.filtered,
        error: state.error,
        inCartLength: state.inCartLength,
        TotalAmountToPay: state.TotalAmountToPay,
        getItems,
        addToCart,
        deleteItem,
        decreaseCart,
        amountToPay,
        itemInCart,
        // clearCurrent,
        // setCurrent,
        // updateContact,
        // filterContact,
        // clearFilter,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;

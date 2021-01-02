import {
  GET_ITEMS,
  ADD_TO_CARTS,
  DELETE_ITEM,
  DECREASE_CART_ITEM,
  GET_TOTAL,
  GET_CART_LENGTH,
} from "../Types";
import {
  addItemToCart,
  decreaseItem,
  getAmountToPay,
  getCartLength,
} from "../../utils/cart.utils";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */

export default (state, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case ADD_TO_CARTS:
      return {
        ...state,
        cart: addItemToCart(state.cart, action.payload),
        TotalAmountToPay: getAmountToPay(state.cart),
      };
    case DELETE_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case DECREASE_CART_ITEM:
      return {
        ...state,
        cart: decreaseItem(state.cart, action.payload),
        loading: false,
      };
    case GET_TOTAL:
      return {
        ...state,
        TotalAmmountToPay: getAmountToPay(state.cart),
      };
    case GET_CART_LENGTH:
      return {
        ...state,
        inCartLength: getCartLength(state.cart),
      };

    // case FILTER_CONTACT:
    //   return {
    //     ...state,
    //     filtered: state.contacts.filter((contact) => {
    //       const regex = new RegExp(`${action.payload}`, "gi");
    //       return contact.name.match(regex) || contact.email.match(regex);
    //     }),
    //   };
    // case CLEAR_FILTER:
    //   return {
    //     ...state,
    //     filtered: null,
    //   };
    // case CONTACT_ERROR:
    //   return {
    //     ...state,
    //     error: action.payload,
    //   };

    default:
      return state;
  }
};

import cartActionTypes from "./cart.types";

const { TOGGLE_CART_HIDDEN, ADD_ITEM } = cartActionTypes;

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});
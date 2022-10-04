import cartActionTypes from "./cart.types";

const { TOGGLE_CART_HIDDEN, HIDE_CART, ADD_ITEM, REMOVE_ITEM, CLEAR_ITEM_FROM_CART } =
  cartActionTypes;

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});
export const hideCart = () => ({
  type: HIDE_CART
})

import { createSelector } from "reselect";

const selectCart = (state) => {
  console.debug("I am being called!");
  return state.cart;
};

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

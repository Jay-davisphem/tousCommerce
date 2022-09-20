import { createSelector } from "reselect";

const shopSelector = (state) => state.shop;
console.log("IN SELECTORS");
export const shopCollectionsSelector = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

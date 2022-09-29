import ShopActionTypes from "./shop.types";

export const updateCollections = (colMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: colMap,
});

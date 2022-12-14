import { createSelector } from "reselect";

const shopSelector = (state) => state.shop;
export const shopCollectionsSelector = createSelector(
  [shopSelector],
  (shop) => {
    return shop.collections;
  }
);

export const selectCollectionsArray = createSelector(
  [shopCollectionsSelector],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (param) =>
  createSelector([shopCollectionsSelector], (collections) =>
    collections ? collections[param] : null
  );

export const selectIsCollectionFetching = createSelector(
  [shopSelector],
  (shop) => shop.isFetching
);

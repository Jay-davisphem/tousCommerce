import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
  childrens: 6,
  students: 7,
  gadgets: 8,
  homes: 9,
  pets: 10,
};

const shopSelector = (state) => state.shop;
export const shopCollectionsSelector = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

export const selectCollection = (param) =>
  createSelector([shopCollectionsSelector], (collections) =>
    collections.find((collection) => collection.id === COLLECTION_ID_MAP[param])
  );

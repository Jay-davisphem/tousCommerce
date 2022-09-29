import ShopActionTypes from "./shop.types";
import data from "../../data/shop";

const INITIAL_STATE = {
  collections: data,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      alert("it was done");
      console.log(action.payload);
      return {
        ...state,
        collecions: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;

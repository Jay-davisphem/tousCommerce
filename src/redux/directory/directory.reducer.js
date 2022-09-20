import data from "../../data/directory";

const INITIAL_DATA = {
  sections: data,
};

const directoryReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    default:
      console.log("Here");
      return state;
  }
};

export default directoryReducer;

import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import userReducer from "./user/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddlwware) => getDefaultMiddlwware().concat(logger),
});

export default store;

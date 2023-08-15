import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";
import uiReducer from "./ui-slice";
import cartReducer from "./cart-slice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    ui: uiReducer,
    cart: cartReducer,
  },
});

export default store;

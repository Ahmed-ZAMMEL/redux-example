import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false, notificztion: null },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      const { status, title, message } = action.payload;
      state.notification = { status, title, message };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;

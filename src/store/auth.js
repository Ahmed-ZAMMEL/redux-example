import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticated: false };
/**
 *
 * AuthState is application-wide state.
 * So therefore, this is the user authenticated state
 * is a perfect example for a state
 * that we could manage with React context
 * or this is an example how to use redux.
 */

const authSlice = createSlice({
  name: "authenticaion",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;

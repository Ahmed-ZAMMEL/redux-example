import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    /**
     * When we fetch the cart from server the cart change
     * but we don't need to send a request to sever.
     * Please, see the dispatch on the App.js to understand.
     **/
    changed: false,
  },
  reducers: {
    /****************************************************************************************
     * Never perform a side effect (http request for exmple ) inside a reducer !
     * Side effects should be performed either inside the componenets (e.g. useEffect())
     * or inside the action creators
     ****************************************************************************************/
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },

    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

/**
 * This is a Thunk, a thunk is a function that delays an action until later.
 * An action creator function that does not return the action itself but another
 * function which eventually retuerns the action.
 **/

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;

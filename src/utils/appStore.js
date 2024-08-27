import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;

/**
 *  Install @reduxjs/toolkit ans react-redux
 *  Create or Build store
 *  Connect store to our app
 *  create Slice (cartSlice)
 *  dispatch(action) -> When click on ADD item to cart
 *  Selector -> used connection (subscribing) with store
 *
 */

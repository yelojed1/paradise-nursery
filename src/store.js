import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './SliceCreate';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import climaSlice from './clima-slice';

const store = configureStore({
  reducer: {
    clima: climaSlice.reducer,
  },
});

export default store;

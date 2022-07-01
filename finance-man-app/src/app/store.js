import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import fetcherReducer from '../features/fetcher/fetcherSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    fetcher: fetcherReducer,
  },
});

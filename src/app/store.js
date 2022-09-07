import { configureStore } from '@reduxjs/toolkit';
import picturesReducer from '../features/pictures';


export const store = configureStore({
  reducer: {
    pictures: picturesReducer
  },
});

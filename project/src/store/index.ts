import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import { redirect } from './middle-ware/redirect-to-route';
import { createApi } from '../services/api';

export const api = createApi();

export const store = configureStore({
  reducer : rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});



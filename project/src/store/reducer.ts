import { createReducer } from '@reduxjs/toolkit';
import {amsterdamOffers} from '../components/app/mocks/offers';
import { changeCity, fillRentList } from './action';

const initialState = {
  city: 'Amsterdam',
  offersList: amsterdamOffers
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillRentList, (state, action) => {
      state.offersList = action.payload;

    });
});

export {reducer};



import { createReducer } from '@reduxjs/toolkit';
import {amsterdamOffers} from '../components/app/mocks/offers';
import { SortOptions } from '../components/const';
import { changeCity, fillRentList, changeSortType } from './action';
import Offer from '../types/offer';
import { sortBy } from '../components/const';

const initialState : {
  city: string,
  offersList: Offer[],
  sortType: string
} = {
  city: 'Amsterdam',
  offersList: amsterdamOffers,
  sortType: SortOptions.POPULAR
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillRentList, (state, action) => {
      state.offersList = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
      state.offersList = [...state.offersList].sort(sortBy[action.payload]);
    });
});


export {reducer};



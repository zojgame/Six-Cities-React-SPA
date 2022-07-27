import { createReducer } from '@reduxjs/toolkit';
// import {amsterdamOffers} from '../components/app/mocks/offers';
import { AuthorizationStatus, SortOptions } from '../components/const';
import { changeCity, fillRentList, changeSortType, loadOffers, requireAuthorization } from './action';
import {Offer} from '../types/offer';
import { sortBy } from '../components/const';


type InitialState = {
  city: string,
  offersList: Offer[],
  // offersList: Offer[],
  sortType: string,
  authorizationStatus : AuthorizationStatus,
  isDataLoaded: boolean
};

const initialState : InitialState = {
  city: 'Amsterdam',
  offersList: [],
  sortType: SortOptions.POPULAR,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false
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
    })
    .addCase(loadOffers, (state, action) => {
      state.offersList = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});


export {reducer};



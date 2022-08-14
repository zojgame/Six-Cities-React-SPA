/* eslint-disable @typescript-eslint/no-unused-vars */
import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, SortOptions } from '../components/const';
import { changeCity } from './switches/switches';
import { changeSortType } from './data-offers/data-offers';
import { fillRentList, loadOffers, loadNearestOffers, setLoadingAnimation } from './data-offers/data-offers';
import { setError, requireAuthorization } from './user/user';
import { sendNewComment, loadComments } from './data-comments/data-comments';

import {Offers, ApiOffer} from '../types/offer';
import { sortBy } from '../components/const';
import { Comment } from '../types/review';


type InitialState = {
  city: string,
  offersList: Offers,
  sortType: string,
  authorizationStatus : AuthorizationStatus,
  isDataLoaded: boolean,
  comments: Comment[],
  nearestOffers: ApiOffer[]
  error: string
};

const initialState : InitialState = {
  city: 'Amsterdam',
  offersList: [],
  sortType: SortOptions.POPULAR,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  comments: [],
  nearestOffers: [],
  error: ''
};

const reducer = createReducer(initialState, (builder) => {
  builder

    .addCase(fillRentList, (state, action) => {//data-offers
      state.offersList = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offersList = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadNearestOffers, (state, action) => {
      state.nearestOffers = action.payload;
    })
    .addCase(setLoadingAnimation, (state, action)=> {
      state.isDataLoaded = action.payload;
    })

    .addCase(changeSortType, (state, action) => {//switches
      state.sortType = action.payload;
      state.offersList = [...state.offersList].sort(sortBy[action.payload]);
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })


    .addCase(setError, (state, action) => {//user
      state.error = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })


    .addCase(sendNewComment, (state, action) => {//data-comments
      state.comments = [...state.comments, action.payload];
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    });
});


// export {reducer};



import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, SortOptions } from '../components/const';
import { changeCity, changeSortType, loadOffers,
  requireAuthorization, loadComments, setError,
  fillRentList, setLoadingAnimation, loadNearestOffers,
  sendNewComment } from './action';
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
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setLoadingAnimation, (state, action)=> {
      state.isDataLoaded = action.payload;
    })
    .addCase(loadNearestOffers, (state, action) => {
      state.nearestOffers = action.payload;
    })
    .addCase(sendNewComment, (state, action) => {
      state.comments = [...state.comments, action.payload];
    });
});


export {reducer};



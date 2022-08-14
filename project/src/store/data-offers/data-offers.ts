import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, SortOptions } from '../../components/const';
import { ApiOffer, Offers } from '../../types/offer';
import { sortBy } from '../../components/const';

const initialState : {
    offersList : Offers,
    sortType: SortOptions,
    isDataLoading: boolean,
    loadNearestOffers: ApiOffer[],
    favorites : Offers
} = {
  offersList: [],
  isDataLoading: false,
  sortType : SortOptions.POPULAR,
  loadNearestOffers: [],
  favorites : []
};

export const dataOffers = createSlice({
  name: NameSpace.DataOffers,
  initialState,
  reducers: {
    fillRentList: (state, action) => {
      state.offersList = action.payload;
    },
    loadOffers: (state,action) => {
      state.offersList = action.payload;
      state.isDataLoading = true;
    },
    loadNearestOffers: (state, action) => {
      state.loadNearestOffers = action.payload;
    },
    setLoadingAnimation : (state, action) => {
      state.isDataLoading = action.payload;
    },
    changeSortType : (state, action) => {
      state.sortType = action.payload;
      state.offersList = [...state.offersList].sort(sortBy[action.payload]);
    },
    setFavorites : (state, action) => {
      state.favorites = action.payload;
    }
  }
});

export const {fillRentList, loadOffers, loadNearestOffers, setLoadingAnimation, changeSortType, setFavorites} = dataOffers.actions;

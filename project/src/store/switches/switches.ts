import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../components/const';
import { SortOptions } from '../../components/const';
import { City } from '../../types/cities';

import { Offers } from '../../types/offer';


const initialState : {
    sortType: SortOptions,
    city: City,
    offersList : Offers
} = {
  sortType : SortOptions.POPULAR,
  city: City.Amsterdam,
  offersList: []
};

export const switches = createSlice({
  name: NameSpace.Switches,
  initialState,
  reducers: {
    changeCity : (state, action) => {
      state.city = action.payload;
    },
  }
});

export const {changeCity} = switches.actions;

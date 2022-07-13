import { createReducer } from '@reduxjs/toolkit';
import {amsterdamOffers} from '../components/app/mocks/offers';
import { changeCity, fillRentList } from './action';
// import Offer from '../types/offer';

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

// function GetOffers(city: string):Offer[]{
//   switch(city){
//     case 'Amsterdam':
//       return amsterdamOffers;
//     default:
//       return londonOffers;
//   }
// }

export {reducer};



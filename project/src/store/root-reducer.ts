import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../components/const';
import { dataComments } from './data-comments/data-comments';
import { dataOffers } from './data-offers/data-offers';
import { switches } from './switches/switches';
import { user } from './user/user';

export const rootReducer = combineReducers({
  [NameSpace.DataComments] : dataComments.reducer,
  [NameSpace.DataOffers] : dataOffers.reducer,
  [NameSpace.Switches] : switches.reducer,
  [NameSpace.User] : user.reducer,
});



import { createAction } from '@reduxjs/toolkit';
import Offer from '../types/offer';

export const changeCity = createAction<string>('main/changeCity');
export const fillRentList = createAction<Offer[]>('main/fillRentList');
export const changeSortType = createAction<string>('main/changeSortType');

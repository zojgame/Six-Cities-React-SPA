import { createAction } from '@reduxjs/toolkit';
import {Offer} from '../types/offer';
import { AuthorizationStatus } from '../components/const';

export const changeCity = createAction<string>('main/changeCity');

export const fillRentList = createAction<Offer[]>('main/fillRentList');

export const changeSortType = createAction<string>('main/changeSortType');

export const loadOffers = createAction<Offer[]>('main/loadOffers');

export const requireAuthorization = createAction<AuthorizationStatus>('login/requireAuthorization');

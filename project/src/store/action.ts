import { createAction } from '@reduxjs/toolkit';
import {Offers} from '../types/offer';
import { AuthorizationStatus, AppRoute } from '../components/const';
import {Comment} from '../types/review';


export const changeCity = createAction<string>('main/changeCity');

export const fillRentList = createAction<Offers>('main/fillRentList');

export const changeSortType = createAction<string>('main/changeSortType');

export const loadOffers = createAction<Offers>('main/loadOffers');

export const loadComments = createAction<Comment[]>('propertyPage/loadComments');

export const requireAuthorization = createAction<AuthorizationStatus>('login/requireAuthorization');

export const setError = createAction<string>('game/setError');

export const redirectToRoute = createAction<AppRoute>('loginPage/redirectToRoute');

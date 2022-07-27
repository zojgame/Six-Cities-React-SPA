import { createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '.';
import { APIRoute, AuthorizationStatus, MarkerType } from '../components/const';
import { loadOffers, requireAuthorization } from './action';
import { api } from '.';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { ApiOffer, Offer } from '../types/offer';

export const fetchOffersAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    const {data} = await api.get(APIRoute.Hotels);
    const adaptedData = adaptToClient(data);
    store.dispatch(loadOffers(adaptedData));
  }
);

export const checkAuthStatus = createAsyncThunk(
  'user/checkAuth',
  async () => {
    await api.get(APIRoute.Login);
    store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
  }
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password} : AuthData) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
  }
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    await api.delete(APIRoute.Logout);
    dropToken();
    store.dispatch(requireAuthorization(AuthorizationStatus.NotAuth));
  }
);

const adaptToClient = (receivedOffers: ApiOffer[]):Offer[] => {
  const mockComments = [
    {description: `A quiet cozy and picturesque that hides behind a a river
               * by the unique lightness of Amsterdam. The 
               * building is green and from 18th century.`,
    rating: 4,
    commentatorName: 'Max',
    photo: 'img/avatar-max.jpg',
    date: new Date(2001, 12, 20)},
    {description: 'Awesome',
      rating: 5,
      commentatorName: 'Mathway',
      photo: 'img/avatar-max.jpg',
      date: new Date(2022, 12, 20)}
  ];

  const adaptedOffers: Offer[] = receivedOffers.map((offer) =>
    (
      {rating: offer.rating,
        name: offer.title,
        price: offer.price,
        countBedrooms: offer.bedrooms,
        capacity: offer.max_adults,
        isPremium: offer.is_premium,
        pictures: offer.images,
        isActive: false,
        offerType: offer.type,
        id: offer.id,
        y: offer.location.latitude,
        x: offer.location.longitude,
        comments: mockComments,
        markerType: MarkerType.DEFAULT,
        city: offer.city.name,
        location: offer.city.location}
    ));

  return adaptedOffers;
};

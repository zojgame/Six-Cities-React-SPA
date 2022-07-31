import { createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '.';
import { APIRoute, AuthorizationStatus, MarkerType, AppRoute } from '../components/const';
import { loadComments, loadOffers, requireAuthorization, setError, redirectToRoute } from './action';
import { api } from '.';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { ApiOffer, Offer } from '../types/offer';
import { Comment } from '../types/review';
import { errorHandle } from '../services/error-handle';

export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  () => {
    const timeoutShowError = 2000;
    setTimeout(
      () => store.dispatch(setError('')),
      timeoutShowError
    );
  }
);

export const fetchOffersAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    try{
      const {data} = await api.get(APIRoute.Hotels);
      const adaptedData = adaptToClient(data);
      store.dispatch(loadOffers(adaptedData));
    }
    catch(error){
      errorHandle(error);
    }
  }
);

export const checkAuthStatus = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try{
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    }
    catch(error){
      errorHandle(error);
    }
  }
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password} : AuthData) => {
    try{
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoute.Main));
    }
    catch(error){
      errorHandle(error);
    }
  }
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try{
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NotAuth));
    }
    catch(error){
      errorHandle(error);
    }
  }
);

export const getComments = createAsyncThunk(
  'propertyPage/fetchComments',
  async (hotelId : string) => {
    try{
      const {data: comments} = await api.post<Comment[]>(`comments/${hotelId}`, {hotelId});
      store.dispatch(loadComments(comments));
    }
    catch(error){
      errorHandle(error);
    }
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
        location: offer.city.location,
        previewImage: offer.preview_image}
    ));

  return adaptedOffers;
};



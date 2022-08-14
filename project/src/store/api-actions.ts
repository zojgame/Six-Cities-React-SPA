import { createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '.';
import { APIRoute, AuthorizationStatus, MarkerType, AppRoute } from '../components/const';
import { loadComments, sendNewComment } from './data-comments/data-comments';
import { requireAuthorization, setError, setIsProStatus, setUserEmail, setUserName } from './user/user';
import { redirectToRoute } from './action';
import { setLoadingAnimation, loadNearestOffers, loadOffers, setFavorites } from './data-offers/data-offers';
import { api } from '.';
import { LoginData} from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { ApiOffer, Offer } from '../types/offer';
import dayjs from 'dayjs';
import { errorHandle } from '../services/error-handle';
import { ApiComment } from '../types/comment';
import { Comment } from '../types/review';
import { customAlphabet } from 'nanoid';
import { setAvatarUrl } from './user/user';

export const setAnimationLoading = createAsyncThunk(
  'main/setLoading',
  () => {
    const timeoutAnimation = 300;
    store.dispatch(setLoadingAnimation(false));
    setTimeout(
      () => store.dispatch(setLoadingAnimation(true)),
      timeoutAnimation
    );
  }
);

export const clearErrorAction = createAsyncThunk(
  'main/clearError',
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

type AuthData = {
  avatarUrl: string
  email: string
  id: number
  isPro: boolean
  name: string
  token: string
  }

export const checkAuthStatus = createAsyncThunk(
  'user/checkAuth',
  async () => {

    try{
      store.dispatch(setLoadingAnimation(false));
      const { avatarUrl, email, isPro, name } : AuthData = await api.get(APIRoute.Login);
      store.dispatch(setAvatarUrl(avatarUrl));
      store.dispatch(setUserEmail(email));
      store.dispatch(setUserName(name));
      store.dispatch(setIsProStatus(isPro));
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    }

    catch(error){

      errorHandle(error);
      store.dispatch(redirectToRoute(AppRoute.Login));
    }
  }
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password} : LoginData) => {
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

export const sendComment = createAsyncThunk(
  'user/login',
  async ({comment, rating, hotelId} : ApiComment) => {
    try{
      await api.post(`/comments/${hotelId}`, {comment, rating});
      const newComment = CreateNewComment({comment, rating});
      store.dispatch(sendNewComment(newComment));
    }
    catch(error){
      errorHandle(error);
    }
  }
);

function CreateNewComment({comment, rating} : {comment: string, rating: number}):Comment{
  const nanoid = customAlphabet('1234567890', 18);
  const newComment: Comment = {
    comment: comment,
    date: new Date().toISOString(),
    id: parseInt(nanoid(), 2),
    rating: rating,
    user: {
      avatarUrl: 'atl',
      id: 200,
      isPro: false,
      name: 'Danil'
    }
  };

  return newComment;
}

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
      const {data} = await api.get(`comments/${hotelId}`);
      store.dispatch(loadComments(data));
    }
    catch(error){
      errorHandle(error);
    }
  }
);

export const getNearestOffers = createAsyncThunk(
  'propertyPage/fetchNearestOffers',
  async(hotelId : string) => {
    try{
      const {data} = await api.get(`/hotels/${hotelId}/nearby`);
      store.dispatch(loadNearestOffers(data));
    }
    catch(error){
      errorHandle(error);
    }
  }
);


export const loadFavorites = createAsyncThunk (
  'data/favorites',
  async () => {
    try{
      const {data} = await api.get(`${APIRoute.Favorite}`);
      store.dispatch(setFavorites(data));
    }

    catch(error){
      errorHandle(error);
    }
  }
);

export const addToFavorite = createAsyncThunk (
  'propertyPage/addToFavorite',
  async (hotelId : string) => {
    try{
      await api.post(`${APIRoute.Favorite}/${hotelId}/1`);
      store.dispatch(loadFavorites());
    }
    catch(error){
      errorHandle(error);
    }
  }
);

export const deleteFavorite = createAsyncThunk (
  'propertyPage/addToFavorite',
  async (hotelId : string) => {
    try{
      await api.post(`${APIRoute.Favorite}/${hotelId}/0`);
      store.dispatch(loadFavorites());
    }
    catch(error){
      errorHandle(error);
    }
  }
);


export const adaptToClient = (receivedOffers: ApiOffer[]) : Offer[] => {
  const mockComments = [
    {description: `A quiet cozy and picturesque that hides behind a a river
               * by the unique lightness of Amsterdam. The 
               * building is green and from 18th century.`,
    rating: 4,
    commentatorName: 'Max',
    photo: 'img/avatar-max.jpg',
    date: dayjs(new Date()).toISOString()},
    {description: 'Awesome',
      rating: 5,
      commentatorName: 'Mathway',
      photo: 'img/avatar-max.jpg',
      date: dayjs(new Date()).toISOString()}
  ];

  const adaptedOffers: Offer[] = receivedOffers.map((offer) =>
    (
      {
        goods: offer.goods,
        rating: offer.rating,
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
        previewImage: offer.preview_image,
        description: offer.description,
        title: offer.title,
        host: {
          avatarUrl: offer.host.avatar_url,
          id: offer.host.id,
          isPro: offer.host.is_pro,
          name: offer.host.name
        }
      }
    ));

  return adaptedOffers;
};



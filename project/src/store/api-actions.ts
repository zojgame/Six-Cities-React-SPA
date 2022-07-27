import { createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '.';
import { APIRoute, AuthorizationStatus } from '../components/const';
import { loadOffers, requireAuthorization } from './action';
import { api } from '.';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';

export const fetchOffersAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    const {data} = await api.get(APIRoute.Hotels);
    store.dispatch(loadOffers(data));
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

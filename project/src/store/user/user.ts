import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../components/const';
import { NameSpace } from '../../components/const';

const initialState : {
    error: string,
    authorizationStatus : AuthorizationStatus,
    avatarUrl : string,
    email : string,
    name : string,
    isPro : boolean
} = {
  error: '',
  authorizationStatus: AuthorizationStatus.Unknown,
  avatarUrl : '',
  email : '',
  name : '',
  isPro : false
};

export const user = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setError : (state, action) => {
      state.error = action.payload;
    },
    requireAuthorization : (state, action) => {
      state.authorizationStatus = action.payload;
    },
    setAvatarUrl : (state, action) => {
      state.avatarUrl = action.payload;
    },
    setUserEmail : (state, action) => {
      state.email = action.payload;
    },
    setUserName : (state, action) => {
      state.name = action.payload;
    },
    setIsProStatus : (state, action) => {
      state.isPro = action.payload;
    },
  }
});

export const {setError, requireAuthorization, setAvatarUrl, setUserEmail, setUserName, setIsProStatus} = user.actions;

import { NameSpace } from '../../components/const';
import { State } from '../../types/state';

export const getAuthorizationStatus = (state : State) => state[NameSpace.User].authorizationStatus;

export const getError = (state : State) => state[NameSpace.User].error;

export const getAvatarUrl = (state : State) => state[NameSpace.User].avatarUrl;

export const getEmail = (state : State) => state[NameSpace.User].email;

export const getName = (state : State) => state[NameSpace.User].name;

export const getIsPro = (state : State) => state[NameSpace.User].isPro;

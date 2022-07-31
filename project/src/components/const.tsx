import {Offer} from '../types/offer';

export enum AppRoute {
    Login = '/login',
    SignIn = '/sign_in',
    Favorites = '/favorites',
    Main = '/',
    Error = '/*'
}

export enum SortOptions {
  POPULAR = 'POPULAR',
  PRICE_LOW_TO_HIGH = 'PRICE_LOW_TO_HIGH',
  PRICE_HIGH_TO_LOW = 'PRICE_HIGH_TO_LOW',
  TOP_RATED_FIRST = 'TOP_RATED_FIRST'
}

export const sortBy : {
  [sort:string] : (cardA: Offer, cardB: Offer) => number,

} = {
  [SortOptions.POPULAR]: (cardA : Offer, cardB : Offer) => cardA.comments.length - cardB.comments.length,
  [SortOptions.PRICE_HIGH_TO_LOW]: (cardA : Offer, cardB : Offer) => cardB.price - cardA.price,
  [SortOptions.PRICE_LOW_TO_HIGH]: (cardA : Offer, cardB : Offer) => cardA.price - cardB.price,
  [SortOptions.TOP_RATED_FIRST]: (cardA : Offer, cardB : Offer) => cardB.rating - cardA.rating
};

export const currentWordSortBy : {
  [sort:string] : string,

} = {
  [SortOptions.POPULAR]: 'Popular',
  [SortOptions.PRICE_HIGH_TO_LOW]: 'Price: high to low',
  [SortOptions.PRICE_LOW_TO_HIGH]: 'Price: low to high',
  [SortOptions.TOP_RATED_FIRST]: 'Top rated first'
};

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NotAuth = 'NOT_AUTH',
    Unknown = 'UNKNOWN',
}

export enum MarkerType {
  DEFAULT= 'DEFAULT',
  CURRENT= 'CURRENT'
}

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export enum APIRoute {
  Login = '/login',
  Logout = '/logout',
  Hotels = '/hotels'
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHARIZED = 401,
  NOT_FOUND = 404,
}


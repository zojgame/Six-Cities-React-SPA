import Offer from '../types/offer';
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

// export const sortBy : {
//   [sortType:string] : (cards: Offer[]) => Offer[]
// } = {
//   [SortOptions.POPULAR]: (cards : Offer[]) => cards.filter(() => true),
//   // [SortOptions.PRICE_HIGH_TO_LOW]: (cards: Offer[]) => cards.filter((card) => card.price),
//   [SortOptions.PRICE_HIGH_TO_LOW]: (cards: Offer[]) => ),
//   [SortOptions.PRICE_LOW_TO_HIGH]: (cards: Offer[]) => cards.filter((card) => card.price),
//   [SortOptions.TOP_RATED_FIRST]: (cards: Offer[]) => cards.filter((card) => card.rating)
// };

export const sortBy : {
  [sort:string] : (cardA: Offer, cardB: Offer) => number,

} = {
  [SortOptions.POPULAR]: (cardA : Offer, cardB : Offer) => cardA.comments.length - cardB.comments.length,
  [SortOptions.PRICE_HIGH_TO_LOW]: (cardA : Offer, cardB : Offer) => cardB.price - cardA.price,
  [SortOptions.PRICE_LOW_TO_HIGH]: (cardA : Offer, cardB : Offer) => cardA.price - cardB.price,
  [SortOptions.TOP_RATED_FIRST]: (cardA : Offer, cardB : Offer) => cardB.rating - cardA.rating
};
// [SortOptions.PRICE_HIGH_TO_LOW]: (cards: Offer[]) => cards.filter((card) => card.price),

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


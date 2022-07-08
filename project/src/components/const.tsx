export enum AppRoute {
    Login = '/login',
    SignIn = '/sign_in',
    Favorites = '/favorites',
    Main = '/',
    Error = '/*'
}

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


import { Middleware } from '@reduxjs/toolkit';
import browserHistory from '../../browser-history';
// import { reducer } from '../reducer';
import {rootReducer} from '../root-reducer';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect : Middleware<unknown, Reducer> =
(_store) =>
  (next) =>
    (action) =>
    {
      if(action.type === 'loginPage/redirectToRoute'){
        browserHistory.push(action.payload);
      }

      return next(action);
    };

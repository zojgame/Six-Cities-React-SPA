
import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../components/const';

export const redirectToRoute = createAction<AppRoute>('loginPage/redirectToRoute');

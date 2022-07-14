import { store } from '.';

export type State = ReturnType<typeof store.getState>;

export type ApiDispatch = typeof store.dispatch;

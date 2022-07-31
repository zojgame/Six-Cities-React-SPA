import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import {store} from './store';
import { fetchOffersAction, checkAuthStatus } from './store/api-actions';
import ErrorMessageComponent from './components/error-message/error-message';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthStatus());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessageComponent />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

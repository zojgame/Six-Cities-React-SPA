import React from 'react';
import App from './components/app/app';
import { Provider } from 'react-redux';
import {store} from './store';
import { fetchOffersAction } from './store/api-actions';
import ErrorMessageComponent from './components/error-message/error-message';
import {createRoot} from 'react-dom/client';

store.dispatch(fetchOffersAction());


const container = createRoot(document.getElementById('root'));
container.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessageComponent />
      <App />
    </Provider>
  </React.StrictMode>
);

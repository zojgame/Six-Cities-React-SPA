import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import offers from './components/app/mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      appartments = {offers}
    />
  </React.StrictMode>,
);

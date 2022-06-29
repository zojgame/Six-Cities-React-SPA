import MainPage from './pages/main';
import { AppRoute, AuthorizationStatus } from '../const';
import FavoritesPage from './pages/favorites';
import ErrorPage from './pages/error-page';
import LoginPage from './pages/login-page';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import PropertyPage from './pages/property-page';
// import PrivateRoute from './pages/private-route-page';
import NotAuthPropertyPage from './pages/not-auth-property-page';
import PrivateRoute from './pages/private-route-page';


const Options = {
  CARDS_COUNT : 4,
};

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage cardsCount={Options.CARDS_COUNT}/>}
        />
        <Route
          path={AppRoute.Error}
          element={<ErrorPage />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NotAuth}
            >
              <FavoritesPage />
            </PrivateRoute>
          }

        />
        <Route
          path='/property'
          element={
            'AUTH' === AuthorizationStatus.Auth
              ? <PropertyPage />
              : <NotAuthPropertyPage />
          }
        />
      </Routes>
    </BrowserRouter>);
}

export default App;

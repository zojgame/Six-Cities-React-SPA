import MainPage from './pages/main';
import { AppRoute, AuthorizationStatus } from '../const';
import FavoritesPage from './pages/favorites';
import ErrorPage from './pages/error-page';
import LoginPage from './pages/login-page';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import PropertyPage from './pages/property-page';
// import NotAuthPropertyPage from './pages/not-auth-property-page';
import PrivateRoute from './pages/private-route-page';
import { Offer } from './mocks/offers';

type AppScreenProps = {
  appartments : Offer[]
}
const Options = {
  CARDS_COUNT : 4,
};

function App({appartments: apartments} : AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage cardsCount={Options.CARDS_COUNT} appartments={apartments} />}
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
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavoritesPage appartments={apartments}/>
            </PrivateRoute>
          }
        />

        <Route path='/property/:num' element={<PropertyPage apartments={apartments}/>}/>

      </Routes>
    </BrowserRouter>);
}

export default App;

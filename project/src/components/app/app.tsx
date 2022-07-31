import MainPage from './pages/main';
import { AppRoute, AuthorizationStatus } from '../const';
import FavoritesPage from './pages/favorites';
import ErrorPage from './pages/error-page';
import LoginPage from './pages/login-page';
import { Routes, Route } from 'react-router-dom';
import PropertyPage from './pages/property-page';
import PrivateRoute from './pages/private-route-page';
import DefaultMap from './components/default-map';
import browserHistory from '../../browser-history';
import HistoryRouter from '../history-route/history-route';


function App(): JSX.Element {


  return (

    // <BrowserRouter>
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage />}
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
              <FavoritesPage/>
            </PrivateRoute>
          }
        />
        <Route path='/property/:id/:city' element={<PropertyPage />}/>
        <Route path='/map' element={ <DefaultMap/> }/>
      </Routes>
    </HistoryRouter>
    // </BrowserRouter>
  );
}

export default App;

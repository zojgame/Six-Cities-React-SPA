import MainPage from './pages/main';
import { AppRoute, AuthorizationStatus } from '../const';
import FavoritesPage from './pages/favorites';
import ErrorPage from './pages/error-page';
import LoginPage from './pages/login-page';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import PropertyPage from './pages/property-page';
import PrivateRoute from './pages/private-route-page';
import Offer from '../../types/offer';
import Map from './components/map';
// import {useAppSelector} from '../../hooks/index';
// import { useSelector } from 'react-redux';

type AppScreenProps = {
  appartments : Offer[]
}
// const Options = {
//   CARDS_COUNT : 4,
// };

function App({appartments: apartments} : AppScreenProps): JSX.Element {
  // const {offersList} = useAppSelector((state) => state);
  // const {offersList} = useSelector((state) => state.offersList);
  // const offersList = useSelector((state) => state.offersList);
  return (
    <BrowserRouter>
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
              <FavoritesPage appartments={apartments}/>
            </PrivateRoute>
          }
        />
        <Route path='/property/:id/:city' element={<PropertyPage />}/>
        <Route path='/map' element={ <Map city={'Amsterdam'} points={apartments}/> }/>
      </Routes>
    </BrowserRouter>);
}

export default App;

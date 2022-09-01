import Map from '../components/map';
import CardsListComponent from '../components/main-screen/card-list';
import Logo from '../logo/logo';
import {useAppDispatch, useAppSelector} from '../../../hooks/index';
import CitiesList from '../components/main-screen/cities-list';
import OptionSortComponent from '../components/main-screen/option-sort';
import LoadingPage from './loading-page/loading-page';
import { getCity } from '../../../store/switches/selectors';
import { getDataLoadedStatus, getOffers } from '../../../store/data-offers/selectors';
import MainPageEmpty from './main-empty';
import { LoginHeaderComponent } from '../components/login-header';

function MainPage():JSX.Element{
  const dispatch = useAppDispatch();
  const city = useAppSelector(getCity);
  const offersList = useAppSelector(getOffers);
  const isDataLoaded = useAppSelector(getDataLoadedStatus);
  if(!isDataLoaded){
    return <LoadingPage />;
  }

  const currentOffers = offersList.filter((offer) => offer.city === city);
  if(currentOffers.length === 0){
    return <MainPageEmpty />;
  }

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <LoginHeaderComponent />
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList city={ city } dispatch={ dispatch } />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay in {city}</b>
              <OptionSortComponent />
              <CardsListComponent appartments={ currentOffers }/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map points={currentOffers}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;

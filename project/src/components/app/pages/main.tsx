import Map from '../components/map';
import CardsListComponent from '../components/main-screen/card-list';
import Logo from '../logo/logo';
import {useAppDispatch, useAppSelector} from '../../../hooks/index';
import CitiesList from '../components/main-screen/cities-list';
import OptionSortComponent from '../components/main-screen/option-sort';

function MainPage():JSX.Element{
  const dispatch = useAppDispatch();//
  const {city, offersList} = useAppSelector((state) => state);
  const currentOffers = offersList.filter((offer) => offer.city === city);
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="http://localhost:3000">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="http://localhost:3000">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList city={ city } dispatch={dispatch} />
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

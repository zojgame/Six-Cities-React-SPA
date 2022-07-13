/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Map from '../components/map';
import CardsListComponent from '../main-screen/card-list';
import Logo from '../logo/logo';
import Offer from '../../../types/offer';
import {useAppDispatch, useAppSelector} from '../../../hooks/index';
import { changeCity, fillRentList } from '../../../store/action';
import { offers } from '../mocks/offers';
import { ApiDispatch } from '../../../store/state';
// import { useSelector } from 'react-redux';
// import { off } from 'process';
// import CityTabComponent from '../main-screen/city-tab';


type MainScreenProps = {
  cardsCount : number;
  appartments : Offer[];
}

function MainPage({cardsCount, appartments} : MainScreenProps):JSX.Element{
  const dispatch = useAppDispatch();
  // const city = useAppSelector((state) => state.city);
  const {city, offersList} = useAppSelector((state) => state);
  // const offers = useAppSelector((state) => state.offersList);
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

          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className={`locations__item-link tabs__item ${ city === 'Paris' ? 'tabs__item--active' : ''}`} href="http://localhost:3000"
                  onClick={
                    (evt) => {
                      evt.preventDefault();
                      SwitchCity('Paris', dispatch);
                      SwitchOffers('Paris', dispatch);
                    }
                  }
                >
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className={`locations__item-link tabs__item ${ city === 'Cologne' ? 'tabs__item--active' : ''}`} href="http://localhost:3000"
                  onClick={
                    (evt) => {
                      evt.preventDefault();
                      SwitchCity('Cologne', dispatch);
                      SwitchOffers('Cologne', dispatch);
                    }
                  }
                >
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className={`locations__item-link tabs__item ${ city === 'Brussels' ? 'tabs__item--active' : ''}`} href="http://localhost:3000"
                  onClick={
                    (evt) => {
                      evt.preventDefault();
                      SwitchCity('Brussels', dispatch);
                      SwitchOffers('Brussels', dispatch);
                    }
                  }
                >
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className={`locations__item-link tabs__item ${ city === 'Amsterdam' ? 'tabs__item--active' : ''}`} href="http://localhost:3000"
                  onClick={
                    (evt) => {
                      evt.preventDefault();
                      SwitchCity('Amsterdam', dispatch);
                      SwitchOffers('Amsterdam', dispatch);
                    }
                  }
                >
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className={`locations__item-link tabs__item ${ city === 'Hamburg' ? 'tabs__item--active' : ''}`} href="http://localhost:3000"
                  onClick={
                    (evt) => {
                      evt.preventDefault();
                      SwitchCity('Hamburg', dispatch);
                      SwitchOffers('Hamburg', dispatch);
                    }
                  }
                >
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className={`locations__item-link tabs__item ${ city === 'Dusseldorf' ? 'tabs__item--active' : ''}`} href="http://localhost:3000"
                  onClick={
                    (evt) => {
                      evt.preventDefault();
                      SwitchCity('Dusseldorf', dispatch);
                      SwitchOffers('Dusseldorf', dispatch);
                    }
                  }
                >
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use href="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <CardsListComponent appartments={ offersList }/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"><Map points={appartments}/></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function SwitchCity(city: string, dispatch: ApiDispatch):void{
  dispatch(changeCity(city));
}


function SwitchOffers(city: string, dispatch: ApiDispatch){
  const updatedOffers = offers[city];
  dispatch(fillRentList(updatedOffers));
}

export default MainPage;

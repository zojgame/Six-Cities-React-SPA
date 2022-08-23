import { useAppSelector } from '../../../hooks';
import Logo from '../logo/logo';
import { getFavorites } from '../../../store/data-offers/selectors';
import FavoriteCard from '../favorite-screen/favorite-card';
import { nanoid } from 'nanoid';
import {store} from '../../../store';
import {loadFavorites} from '../../../store/api-actions';
import { LoginHeaderComponent } from '../components/login-header';


function FavoritesPage():JSX.Element{
  store.dispatch(loadFavorites());
  const favorites = useAppSelector(getFavorites);
  favorites.map((favorite) => (<FavoriteCard appartment={favorite} key={nanoid()}/>));

  return (
    <div className="page">
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

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="main.html">
                      <span>Amsterdam</span>
                    </a>


                  </div>
                </div>
                <div className="favorites__places">
                  {
                    favorites.map((favorite) =>
                      <FavoriteCard appartment={favorite} key={nanoid()}/>)
                  }
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="main.html">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;

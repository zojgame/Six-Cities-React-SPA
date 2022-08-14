import ErrorPage from './error-page';
import Map from '../components/map';
import { Offer } from '../../../types/offer';
import { useAppSelector } from '../../../hooks';
import LoadingPage from '../pages/loading-page';
import {useParams, useNavigate} from 'react-router-dom';
import {nanoid} from 'nanoid';
import {useAppDispatch} from '../../../hooks';
import {getComments, getNearestOffers, adaptToClient, addToFavorite, deleteFavorite, loadFavorites} from '../../../store/api-actions';
import Reviews from '../components/reviews';
import {setAnimationLoading, logoutAction} from '../../../store/api-actions';
import { AppRoute } from '../../const';
import { getDataLoadedStatus, getOffers, getNearOffers } from '../../../store/data-offers/selectors';
import {getFavorites} from '../../../store/data-offers/selectors';

type Params = {
  id: string,
  city: string
}

function PropertyPage():JSX.Element {
  const { id, city } = useParams<keyof Params>() as Params;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  dispatch(loadFavorites);
  dispatch(getComments(id));
  dispatch(getNearestOffers(id));


  const isDataLoaded = useAppSelector(getDataLoadedStatus);
  const offersList = useAppSelector(getOffers);
  const nearestOffers = useAppSelector(getNearOffers);
  const favorites = useAppSelector(getFavorites);

  const currentOffers = offersList.filter((offer) => offer.city === city);
  const currentOffer = currentOffers.filter((offer) => offer.id.toString() === id)[0];
  const isFavorite = favorites.filter((offer) => offer.id === currentOffer.id).length !== 0;

  if(!isDataLoaded){
    return <LoadingPage />;
  }

  if(currentOffers.length === 0){
    return (<ErrorPage />);
  }

  const handleLogOut = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(setAnimationLoading());
    dispatch(logoutAction());
    navigate(AppRoute.Main);
  };


  const clickFavoriteButton = () => {
    if(!isFavorite){
      handleAddToFavorite();
    }
    else{
      handleDeleteFromFavorite();
    }
  };

  const handleAddToFavorite = () => {
    dispatch(addToFavorite(currentOffer.id));
  };

  const handleDeleteFromFavorite = () => {
    dispatch(deleteFavorite(currentOffer.id));
  };

  const adaptedOffers = adaptToClient(nearestOffers);
  const otherPlaces = adaptedOffers.map((apartment) => (OtherApartment(apartment))).slice(0, 3);

  const photos = currentOffer.pictures.map((pic) =>
    (
      <div className="property__image-wrapper" key={nanoid(8)}>
        <img className="property__image" src={pic} alt="studio" />
      </div>
    ));

  const items = currentOffer.goods.map((good) =>
    (
      <li className="property__inside-item" key={nanoid()}>
        {good}
      </li>
    ));
  return (
    <body>
      <base href="/" />
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>

      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="/">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#tag">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#tag" onClick={handleLogOut}>
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--property" >
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {photos}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                <div className={currentOffer.isPremium ? 'property__mark' : 'visually-hidden'}>
                  <span className={currentOffer.isPremium ? '' : 'visually-hidden'}>Premium</span>
                </div>
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {currentOffer.title}
                  </h1>
                  {/* <button className="property__bookmark-button button property__bookmark-button--active" type="button" onClick={clickFavoriteButton}> */}
                  <button className={`property__bookmark-button button ${isFavorite ? 'property__bookmark-button--active' : ''}`} type="button" onClick={clickFavoriteButton}>
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use href="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: currentOffer.rating * 29}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{currentOffers[0].rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {currentOffer.offerType}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {currentOffer.countBedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                  Max 4 adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{currentOffer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {items}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={currentOffer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {currentOffer.host.name}
                    </span>
                    <span className="property__user-status">
                      {currentOffer.host.isPro ? 'Pro' : ''}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {currentOffer.description}
                    </p>
                  </div>
                </div>
                <Reviews hotelId={id}/>
              </div>
            </div>
            <section className="property__map map">
              <Map points={adaptedOffers} />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {otherPlaces}
              </div>
            </section>
          </div>
        </main>
      </div>
    </body>
  );
}

function OtherApartment(apartment : Offer):JSX.Element{
  return(
    <article className="near-places__card place-card">
      <div className={`place-card__mark${ apartment.isPremium ? '' : 'visually-hidden'}`}>
        <span className={ apartment.isPremium ? '' : 'visually-hidden'}>Premium</span>
      </div>
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <a href="#tag">
          <img className="place-card__image"
            src={apartment?.previewImage ? apartment.previewImage : 'img/apartment-03.jpg'} width="260" height="200" alt="Place"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{apartment.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: apartment.rating * 14.5}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#tag">{apartment.title}</a>
        </h2>
        <p className="place-card__type">{apartment.offerType}</p>
      </div>
    </article>
  );
}

export default PropertyPage;

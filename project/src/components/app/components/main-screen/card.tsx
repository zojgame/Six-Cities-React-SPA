import {Offer} from '../../../../types/offer';
import {MouseEvent} from 'react';
import {useAppDispatch, useAppSelector} from '../../../../hooks/index';
import {MarkerType} from '../../../const';
import { fillRentList } from '../../../../store/action';

type CardProps = {
  // appartment : ApiOffer
  appartment : Offer
}

function SortCards(currentAppartment : Offer, offers : Offer[], index : number){
  const newApartment = [...offers.slice(0, index), currentAppartment, ...offers.slice(index + 1)];
  return newApartment;
}

function CardElement({appartment} : CardProps):JSX.Element{
  const dispatch = useAppDispatch();
  const {offersList} = useAppSelector((state) => state);


  const currentAppartment = [...offersList].filter((offer) => offer.id === appartment.id)[0];
  const index = offersList.indexOf(currentAppartment);
  const updatedApartment = {...currentAppartment, markerType: MarkerType.CURRENT};
  const initialApartment = {...currentAppartment, markerType: MarkerType.DEFAULT};
  const sortedOffers = SortCards(updatedApartment, offersList, index);
  const initialState = SortCards(initialApartment, offersList, index);
  const mouseHolding = (evt: MouseEvent) => {
    evt.preventDefault();
    dispatch(fillRentList([...sortedOffers]));
  };
  const mouseLeave = (evt: MouseEvent) => {
    evt.preventDefault();
    dispatch(fillRentList([...initialState]));
  };
  return(
    <article className="cities__place-card place-card"
      onMouseOver={mouseHolding} onMouseOut={mouseLeave}
    >
      <div className={currentAppartment.isPremium ? 'visually-hidden' : 'place-card__mark'}>

        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#icon-bookmark">
          <img className="place-card__image" src={currentAppartment.previewImage} width="260" height="200" alt="Place" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{currentAppartment.price}</b>
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
            <span style={{width: currentAppartment.rating * 15}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={`property/${currentAppartment.id}/${currentAppartment.city}`}>{currentAppartment.name}</a>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}

export default CardElement;

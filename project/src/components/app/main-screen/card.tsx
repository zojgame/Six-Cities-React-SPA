import { Offer } from '../mocks/offers';

type CardProps = {
  appartment : Offer
}
function CardElement({appartment} : CardProps):JSX.Element{
  return(
    <article className="cities__place-card place-card">
      <div className={appartment.isPremium ? 'visually-hidden' : 'place-card__mark'}>

        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#icon-bookmark">
          <img className="place-card__image" src={appartment.pictures[0]} width="260" height="200" alt="Place" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{appartment.price}</b>
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
            <span style={{width: appartment.rating * 15}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={`property/${appartment.id}`}>{appartment.name}</a>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}

export default CardElement;

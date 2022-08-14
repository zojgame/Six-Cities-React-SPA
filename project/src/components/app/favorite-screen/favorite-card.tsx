import {Offer} from '../../../types/offer';
type FavoriteCardProps = {
  appartment : Offer
}

function FavoriteCard({appartment} : FavoriteCardProps):JSX.Element{

  return (
    <article className="favorites__card place-card">
      <div className={appartment.isPremium ? 'place-card__mark' : 'visually-hidden'}>
        <span>Premium</span>
      </div>
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="main.html">
          <img className="place-card__image" src={appartment.previewImage} width="150" height="110" alt="Place" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{appartment.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: appartment.rating * 15}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="main.html">{appartment.title}</a>
        </h2>
        <p className="place-card__type">{appartment.offerType}</p>
      </div>
    </article>);
}

export default FavoriteCard;

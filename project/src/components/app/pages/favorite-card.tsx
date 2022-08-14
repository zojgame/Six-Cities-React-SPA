
type FavoriteCardProps = {
    bedrooms: number
    city: {
    location: {
    latitude: number
    longitude: number
    zoom: number
    }
    name: string
    }
    description: string
    goods: [string]
    host: {
    avatarUrl: string
    id: number
    isPro: boolean
    name: string
    }
    id: number
    images: [string]
    isFavorite: boolean
    isPremium: boolean
    location: {
    latitude: number
    longitude: number
    zoom: number
    }
    maxAdults: number
    previewImage: string
    price: number
    rating: number
    title: string
    type: string
    }

export function FavoriteCard(apartment : FavoriteCardProps):JSX.Element{
  return(
    <article className="cities__place-card place-card">
      <div className={apartment.isPremium ? 'visually-hidden' : 'place-card__mark'}>

        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#icon-bookmark">
          <img className="place-card__image" src={apartment.previewImage} width="260" height="200" alt="Place" />
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
            <span style={{width: apartment.rating * 15}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={`property/${apartment.id}/${apartment.city}`}>{apartment.title}</a>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}

import Comment from './comment';

export type Offer = {
    rating: number,
    name: string,
    price: number,
    countBedrooms: number,
    capacity: number,
    isPremium : boolean,
    pictures : string[],
    isActive : boolean,
    offerType : string,
    id: string,
    y: number,
    x: number,
    markerType: string,
    comments: Comment[],
    city: string,
    location: {
      latitude: number,
      longitude: number,
      zoom: number
    },
    previewImage: string
  };

export type ApiOffer ={
    bedrooms: number,
    city: {
      name: string,
      location: {
        latitude: number,
        longitude: number,
        zoom: number
      }
    },
    description: string,
    goods: string[],
    host: {
      avatar_url: string,
      id: number,
      is_pro: boolean,
      name: string
    },
    id: string,
    images: string[],
    is_favorite: boolean,
    is_premium: boolean,
    location: {
      latitude: number,
      longitude: number,
      zoom: number
    },
    max_adults: number,
    preview_image: string,
    price: number,
    rating: number,
    title: string,
    type: string
  }

export type Offers = Offer[];

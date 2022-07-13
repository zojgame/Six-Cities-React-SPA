import { MarkerType } from '../../const';
import Offer from '../../../types/offer';
import comments from './comments';

const amsterdamOffers : Offer[] = [
  {
    rating: 4.7,
    name: 'Beautiful & luxurious studio at great location',
    price: 130,
    countBedrooms: 3,
    capacity: 4,
    isPremium: true,
    pictures : ['/img/apartment-01.jpg', 'img/room.jpg',
      'img/apartment-02.jpg', 'img/apartment-03.jpg',
      'img/studio-01.jpg', 'img/apartment-01.jpg'],
    isActive : false,
    offerType : 'Apartment',
    id: '1',
    y: 52.3909553943508,
    x: 4.85309666406198,
    markerType: MarkerType.CURRENT,
    comments: [comments[0], comments[1]]
  },
  {
    rating: 4.7,
    name: 'Studio in the center of Moscow',
    price: 100,
    countBedrooms: 2,
    capacity: 3,
    isPremium: false,
    pictures : ['/img/apartment-02.jpg'],
    isActive : false,
    offerType : 'Apartment',
    id: '2',
    y: 52.369553943508,
    x: 4.85309666406198,
    markerType: MarkerType.DEFAULT,
    comments: [comments[0], comments[1]]
  },
  {
    rating: 4.9,
    name: 'Great appartment in a beutifull place',
    price: 110,
    countBedrooms: 3,
    capacity: 3,
    isPremium: false,
    pictures : ['/img/apartment-03.jpg'],
    isActive : false,
    offerType : 'Apartment',
    id: '3',
    y: 52.3909553943508,
    x: 4.929309666406198,
    markerType: MarkerType.DEFAULT,
    comments: [comments[0], comments[1]]
  },
  {
    rating: 4.2,
    name: 'Great house with a greate view',
    price: 130,
    countBedrooms: 2,
    capacity: 2,
    isPremium: true,
    pictures : ['/img/room.jpg'],
    isActive : false,
    offerType : 'House',
    id: '4',
    y: 52.3809553943508,
    x: 4.939309666406198,
    markerType: MarkerType.DEFAULT,
    comments: [comments[1]]
  }
];

const londonOffers : Offer[] = [
  {
    rating: 4.7,
    name: 'Beautiful & luxurious studio at great location',
    price: 130,
    countBedrooms: 3,
    capacity: 4,
    isPremium: true,
    pictures : ['/img/apartment-01.jpg', 'img/room.jpg',
      'img/apartment-02.jpg', 'img/apartment-03.jpg',
      'img/studio-01.jpg', 'img/apartment-01.jpg'],
    isActive : false,
    offerType : 'Apartment',
    id: '1',
    y: 52.3909553943508,
    x: 4.85309666406198,
    markerType: MarkerType.CURRENT,
    comments: [comments[0], comments[1]]
  },
  {
    rating: 4.7,
    name: 'Studio in the center of Moscow',
    price: 100,
    countBedrooms: 2,
    capacity: 3,
    isPremium: false,
    pictures : ['/img/apartment-02.jpg'],
    isActive : false,
    offerType : 'Apartment',
    id: '2',
    y: 52.369553943508,
    x: 4.85309666406198,
    markerType: MarkerType.DEFAULT,
    comments: [comments[0], comments[1]]
  },
  {
    rating: 4.9,
    name: 'Great appartment in a beutifull place',
    price: 110,
    countBedrooms: 3,
    capacity: 3,
    isPremium: false,
    pictures : ['/img/apartment-03.jpg'],
    isActive : false,
    offerType : 'Apartment',
    id: '3',
    y: 52.3909553943508,
    x: 4.929309666406198,
    markerType: MarkerType.DEFAULT,
    comments: [comments[0], comments[1]]
  },
];

export {amsterdamOffers};
export {londonOffers};

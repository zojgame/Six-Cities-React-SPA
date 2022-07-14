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

const hamburgOffers : Offer[] = [
  {
    rating: 4.7,
    name: 'Beautiful & luxurious studio at great location',
    price: 130,
    countBedrooms: 3,
    capacity: 4,
    isPremium: true,
    pictures : ['/img/apartment-02.jpg', 'img/room.jpg',
      'img/apartment-01.jpg', 'img/apartment-03.jpg',
      'img/studio-01.jpg', 'img/apartment-01.jpg'],
    isActive : false,
    offerType : 'Apartment',
    id: '1',
    y: 53.5753200100,
    x: 10.0153400100,
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
    pictures : ['/img/apartment-03.jpg'],
    isActive : false,
    offerType : 'Apartment',
    id: '2',
    y: 53.5558210800,
    x: 10.0168410800,
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
    pictures : ['/img/apartment-01.jpg'],
    isActive : false,
    offerType : 'Apartment',
    id: '3',
    y: 53.5758210800,
    x: 10.0568410800,
    markerType: MarkerType.DEFAULT,
    comments: [comments[0], comments[1]]
  },
];

const dusseldorfOffers : Offer[] = [
  {
    rating: 4.7,
    name: 'Beautiful & luxurious studio at great location',
    price: 130,
    countBedrooms: 3,
    capacity: 4,
    isPremium: true,
    pictures : ['/img/apartment-02.jpg', 'img/room.jpg',
      'img/apartment-01.jpg', 'img/apartment-03.jpg',
      'img/studio-01.jpg', 'img/apartment-01.jpg'],
    isActive : false,
    offerType : 'Apartment',
    id: '1',
    y: 51.2217,
    x: 6.77616,
    markerType: MarkerType.CURRENT,
    comments: [comments[0], comments[1]]
  },
];

const brusselsOffers : Offer[] = [
  {
    rating: 4.7,
    name: 'Beautiful & luxurious studio at great location',
    price: 130,
    countBedrooms: 3,
    capacity: 4,
    isPremium: true,
    pictures : ['/img/apartment-02.jpg', 'img/room.jpg',
      'img/apartment-01.jpg', 'img/apartment-03.jpg',
      'img/studio-01.jpg', 'img/apartment-01.jpg'],
    isActive : false,
    offerType : 'Apartment',
    id: '1',
    y: 50.850339600012,
    x: 4.3517103000012,
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
    pictures : ['/img/apartment-01.jpg'],
    isActive : false,
    offerType : 'Apartment',
    id: '2',
    y: 50.883339501113,
    x: 4.3520103001113,
    markerType: MarkerType.DEFAULT,
    comments: [comments[0], comments[1]]
  },
];

const cologneOffers : Offer[] = [
  {
    rating: 4.7,
    name: 'Beautiful & luxurious studio at great location',
    price: 130,
    countBedrooms: 3,
    capacity: 4,
    isPremium: true,
    pictures : ['/img/apartment-02.jpg', 'img/room.jpg',
      'img/apartment-01.jpg', 'img/apartment-03.jpg',
      'img/studio-01.jpg', 'img/apartment-01.jpg'],
    isActive : false,
    offerType : 'Apartment',
    id: '1',
    y: 45.5786200,
    x: 9.9418000,
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
    pictures : ['/img/apartment-01.jpg'],
    isActive : false,
    offerType : 'Apartment',
    id: '2',
    y: 45.5756200,
    x: 9.9411000,
    markerType: MarkerType.DEFAULT,
    comments: [comments[0], comments[1]]
  },
];

const parisOffers : Offer[] = [
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
    y: 48.8834100,
    x: 2.3888000,
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
    y: 48.9334100,
    x: 2.4088000,
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
    y: 48.7934100,
    x: 2.4288000,
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
    y: 48.8534100,
    x: 2.2588000,
    markerType: MarkerType.DEFAULT,
    comments: [comments[1]]
  }
];


const offers : { [key : string]: Offer[]} =
{
  'Amsterdam' : amsterdamOffers,
  'Hamburg' : hamburgOffers,
  'Dusseldorf' : dusseldorfOffers,
  'Brussels' : brusselsOffers,
  'Cologne' : cologneOffers,
  'Paris' : parisOffers
};

export {amsterdamOffers};
export {hamburgOffers};
export {offers};

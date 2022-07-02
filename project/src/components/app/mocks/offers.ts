export type Offer = {
  rating: number,
  name: string,
  price: number,
  countBedrooms: number,
  capacity: number,
  isPremium : boolean,
  pictures : string[],
  isActive : boolean,
  offerType : string
};

const offers : Offer[] = [
  {
    rating: 4.8,
    name: 'Beautiful & luxurious studio at great location',
    price: 120,
    countBedrooms: 3,
    capacity: 4,
    isPremium: true,
    pictures : ['/img/apartment-01.jpg'],
    isActive : false,
    offerType : 'Apartment'
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
    offerType : 'Apartment'
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
    offerType : 'Apartment'
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
    offerType : 'House'
  }
];

export default offers;

import Comment from './comment';

 type Offer = {
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
    comments: Comment[]
  };

export default Offer;

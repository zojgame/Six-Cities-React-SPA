import { getComments, getNearestOffers } from './api-actions';
import { useAppDispatch } from '../hooks';

import { store } from './index';


function GetOfferData(offerId : string) : void{
  const dispatch = useAppDispatch();
  dispatch(getComments(offerId));
  dispatch(getNearestOffers(offerId));
}

export const getOfferData = async (offerId: string) : Promise<void> => {
  const comments = await getComments(offerId);
  const nearestOffers = await getNearestOffers(offerId);
  store.dispatch(comments);
  store.dispatch(nearestOffers);
};

export default GetOfferData;

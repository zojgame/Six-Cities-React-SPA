import { State } from '../../types/state';
import { Offers } from '../../types/offer';
import { NameSpace } from '../../components/const';
import { ApiOffer } from '../../types/offer';


export const getOffers = (state : State) : Offers=> state[NameSpace.DataOffers].offersList;

export const getDataLoadedStatus = (state : State) : boolean => state[NameSpace.DataOffers].isDataLoading;

export const getNearOffers = (state : State): ApiOffer[] => state[NameSpace.DataOffers].loadNearestOffers;

export const getFavorites = (state : State): Offers => state[NameSpace.DataOffers].favorites;

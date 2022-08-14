import { NameSpace, SortOptions } from '../../components/const';
import { City } from '../../types/cities';
import { State } from '../../types/state';


export const getSortType = (state : State) : SortOptions => state[NameSpace.Switches].sortType;

export const getCity = (state : State): City => state[NameSpace.Switches].city;

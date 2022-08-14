import { NameSpace } from '../../components/const';
import { Comment } from '../../types/review';
import { State } from '../../types/state';


export const getComments = (state: State): Comment[] => state[NameSpace.DataComments].comments;//

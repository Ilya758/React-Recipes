import { TUnionPayload } from '../../constants/initialState.types';

export interface IAction {
  type: string;
  payload?: TUnionPayload;
}

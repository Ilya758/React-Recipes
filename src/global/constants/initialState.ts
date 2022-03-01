import { IReducerState } from './initialState.types';

export const INITIAL_STATE: IReducerState = {
  isLoading: false,
  categories: [],
  meals: [],
  meal: null,
  isMeal: false,
  currentCategory: '',
};

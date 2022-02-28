/* eslint-disable indent */
import { IReducerState, TCategory } from '../../constants/initialState.types';
import { IAction } from './reducer.types';

export const reducer = (
  state: IReducerState,
  action: IAction
): IReducerState => {
  switch (action.type) {
    case 'loading': {
      return {
        ...state,
        isLoading: true,
      };
    }

    case 'categoriesFetched': {
      return {
        ...state,
        isLoading: false,
        categories: action.payload as TCategory[],
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

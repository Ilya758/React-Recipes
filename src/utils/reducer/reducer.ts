/* eslint-disable indent */
import {
  IReducerState,
  TCategory,
  TMeal,
  TMeals,
} from '../../constants/initialState.types';
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

    case 'mealsFetched': {
      return {
        ...state,
        isLoading: false,
        meals: action.payload as TMeals[],
      };
    }

    case 'mealFetched': {
      return {
        ...state,
        isLoading: false,
        meal: action.payload as TMeal,
      };
    }

    case 'gridActive': {
      return {
        ...state,
        isMeal: false,
      };
    }

    case 'gridDisable': {
      return {
        ...state,
        isMeal: true,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

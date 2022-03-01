/* eslint-disable indent */
import {
  IMealPayload,
  IReducerState,
  TCategory,
  TMeal,
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
        currentCategory: '',
      };
    }

    case 'mealsFetched': {
      const payload = action.payload as IMealPayload;

      return {
        ...state,
        isLoading: false,
        meals: payload.meals,
        meal: null,
        currentCategory: payload.category,
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

    case 'reset': {
      return {
        ...state,
        currentCategory: '',
        isMeal: false,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

import React from 'react';
import { IReducerState } from '../constants/initialState.types';
import { IAction } from '../utils/reducer/reducer.types';

export type TAppContext = {
  state: IReducerState;
  dispatch: React.Dispatch<IAction>;
};

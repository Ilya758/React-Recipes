import { createContext } from 'react';
import { TAppContext } from './context.types';

export const AppContext = createContext<TAppContext | null>(null);

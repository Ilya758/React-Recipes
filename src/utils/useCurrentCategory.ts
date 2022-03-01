/* eslint-disable quotes */
import { CATEGORIES } from '../constants/categories/categories';
import { useCurrentParams } from './useCurrentParams';

export const useCurrentCategory = () => {
  const id = useCurrentParams() as string | number;

  return CATEGORIES[id as keyof typeof CATEGORIES] as string | number;
};

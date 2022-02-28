/* eslint-disable quotes */
import { MAPPED_CATEGORIES } from '../constants/categories/categories';
import { useCurrentParams } from './useCurrentParams';

export const useCurrentCategory = () => {
  const id = useCurrentParams();

  return MAPPED_CATEGORIES[id];
};

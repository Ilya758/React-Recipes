/* eslint-disable quotes */
import { useParams } from 'react-router-dom';
import { MAPPED_CATEGORIES } from '../constants/categories/categories';
import { IParams } from '../global/context/global.types';

export const useCurrentCategory = () => {
  const { id } = useParams<keyof IParams>();

  if (!id) {
    throw new Error("There's no id for this category");
  }

  return MAPPED_CATEGORIES[id];
};

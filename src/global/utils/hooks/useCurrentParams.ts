/* eslint-disable quotes */
import { useParams } from 'react-router-dom';
import { IParams } from '../../global.types';

export const useCurrentParams = () => {
  const { id } = useParams<keyof IParams>();

  if (!id) {
    throw new Error("There's no id for this category");
  }

  return id;
};

import { API_URL } from '../constants/apiData';

export const getAllCategories = async <T>(): Promise<T> => {
  const response = await fetch(`${API_URL}categories.php`);
  return response.json() as Promise<T>;
};

export const getMealCategory = async <T>(category: string): Promise<T> => {
  const response = await fetch(`${API_URL}filter.php?c=${category}`);
  return response.json() as Promise<T>;
};

export const getMealById = async <T>(mealId: string): Promise<T> => {
  const response = await fetch(`${API_URL}lookup.php?i=${mealId}`);
  return response.json() as Promise<T>;
};

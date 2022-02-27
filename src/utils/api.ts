import { API_URL } from '../constants/apiData';

export const getAllCategories = async () => {
  const response = await fetch(`${API_URL}categories.php`);
  return response.json();
};

export const getMealCategory = async (category: string) => {
  const response = await fetch(`${API_URL}filter.php?c=${category}`);
  return response.json();
};

export const getMealById = async (mealId: string) => {
  const response = await fetch(`${API_URL}lookup.php?i=${mealId}`);
  return response.json();
};

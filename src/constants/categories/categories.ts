import { IEnumCats } from './categories.types';

const CATEGORIES = [
  'Beef',
  'Chicken',
  'Dessert',
  'Lamb',
  'Miscellaneous',
  'Pasta',
  'Pork',
  'Seafood',
  'Side',
  'Starter',
  'Vegan',
  'Vegetarian',
  'Breakfast',
  'Goat',
];

export const MAPPED_CATEGORIES = CATEGORIES.reduce((acc: IEnumCats, c, ndx) => {
  acc[ndx + 1] = c;
  return acc;
}, {});

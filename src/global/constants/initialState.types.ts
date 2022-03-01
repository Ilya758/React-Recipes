export interface IReducerState {
  isLoading: boolean;
  categories: TCategory[];
  meals: TMeals[];
  meal: TMeal | null;
  isMeal: boolean;
  currentCategory: string;
}

export type TCategories = Pick<IReducerState, 'categories'>;

type TCategoryKeys =
  | 'idCategory'
  | 'strCategory'
  | 'strCategoryThumb'
  | 'strCategoryDescription';

export type TCategory = {
  [key in TCategoryKeys]: string;
};

type TMealsKeys = 'strMeal' | 'strMealThumb' | 'idMeal';

type TMealKeys = 'strArea' | 'strCategory' | 'strInstructions';

export type TMeals = {
  [key in TMealsKeys]: string;
};

export type TUnionPayload =
  | TCategory[]
  | TMeals[]
  | TMeals
  | IMealPayload
  | null;

export interface IMealPayload {
  meals: TMeals[];
  category: string;
}

export type TMeal = {
  [key in TMealsKeys | TMealKeys]: string;
};

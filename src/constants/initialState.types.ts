export interface IReducerState {
  isLoading: boolean;
  categories: TCategory[];
  meals: TMeals[];
  meal: TMeal | null;
  isMeal: boolean;
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

export type TUnionPayload = TCategory[] | TMeals[] | TMeals | null;

export type TMeal = {
  [key in TMealsKeys | TMealKeys]: string;
};

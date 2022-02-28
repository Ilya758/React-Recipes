export interface IReducerState {
  isLoading: boolean;
  categories: TCategory[];
  meals: TMeals[];
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

export type TMeals = {
  [key in TMealsKeys]: string;
};

export type TUnionPayload = TCategory[] | TMeals[] | null;

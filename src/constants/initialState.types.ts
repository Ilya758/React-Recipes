export interface IReducerState {
  isLoading: boolean;
  categories: TCategory[];
  meals: TMeal[];
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

type TMealKeys = 'strMeal' | 'strMealThumb' | 'idMeal';

export type TMeal = {
  [key in TMealKeys]: string;
};

export type TUnionPayload = TCategory[] | TMeal[] | null;

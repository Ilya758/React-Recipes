import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AppContext } from '../../../global/context/context';
import { TAppContext } from '../../../global/context/context.types';
import { ILocation } from '../../../global/context/global.types';
import { getMealCategory } from '../../../utils/api';
import { useCurrentCategory } from '../../../utils/useCurrentCategory';
import MealCategoryItem from './MealCategoryItem/MealCategoryItem';
import { IMealsProps } from './MealCategoryItem/MealCategoryItem.types';

const MealCategory = () => {
  const category = useCurrentCategory();
  const { state } = useLocation() as ILocation;

  const {
    state: { meals },
    dispatch,
  } = useContext(AppContext) as TAppContext;

  useEffect(function getMeals() {
    if (!state.category || !meals.length) {
      dispatch({ type: 'loading' });

      getMealCategory<IMealsProps>(category as string)
        .then(data => {
          dispatch({ type: 'mealsFetched', payload: data.meals });
        })
        .catch(err => console.log(err));

      state.category = category as string;
    }

    dispatch({ type: 'gridActive' });
  }, []);

  return (
    <>
      {Object.values(meals).map(meal => (
        <MealCategoryItem key={meal.idMeal} {...meal} />
      ))}
    </>
  );
};

export default MealCategory;

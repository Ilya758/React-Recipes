import { useContext, useEffect } from 'react';
import { AppContext } from '../../../global/context/context';
import { TAppContext } from '../../../global/context/context.types';
import { getMealCategory } from '../../../utils/api';
import { useCurrentCategory } from '../../../utils/useCurrentCategory';
import MealCategoryItem from './MealCategoryItem/MealCategoryItem';
import { IMealsProps } from './MealCategoryItem/MealCategoryItem.types';

const MealCategory = () => {
  const category = useCurrentCategory();

  const {
    state: { meals, currentCategory },
    dispatch,
  } = useContext(AppContext) as TAppContext;

  useEffect(
    function getMeals() {
      if (!currentCategory || !meals.length) {
        dispatch({ type: 'loading' });

        getMealCategory<IMealsProps>(category as string)
          .then(data => {
            dispatch({
              type: 'mealsFetched',
              payload: {
                meals: data.meals,
                category: category as string,
              },
            });
          })
          .catch(err => console.log(err));
      }

      dispatch({ type: 'gridActive' });
    },
    [currentCategory]
  );

  return (
    <>
      {Object.values(meals).map(meal => (
        <MealCategoryItem key={meal.idMeal} {...meal} />
      ))}
    </>
  );
};

export default MealCategory;

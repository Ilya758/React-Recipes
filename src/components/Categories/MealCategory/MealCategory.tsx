import { useContext, useEffect } from 'react';
import { AppContext } from '../../../global/context/context';
import { TAppContext } from '../../../global/context/context.types';
import { getMealCategory } from '../../../utils/api';
import { useCurrentCategory } from '../../../utils/useCurrentCategory';
import { GridStyle } from '../Categories.style';
import MealCategoryItem from './MealCategoryItem/MealCategoryItem';
import { IMealsProps } from './MealCategoryItem/MealCategoryItem.types';

const MealCategory = () => {
  const category = useCurrentCategory();
  const {
    state: { meals },
    dispatch,
  } = useContext(AppContext) as TAppContext;

  useEffect(function getMeals() {
    dispatch({ type: 'loading' });

    getMealCategory<IMealsProps>(category)
      .then(data => {
        dispatch({ type: 'mealsFetched', payload: data.meals });
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container">
      <GridStyle className="grid">
        {Object.values(meals).map(meal => {
          return <MealCategoryItem key={meal.idMeal} {...meal} />;
        })}
      </GridStyle>
    </div>
  );
};

export default MealCategory;

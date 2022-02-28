import { useContext, useEffect } from 'react';
import { AppContext } from '../../../global/context/context';
import { TAppContext } from '../../../global/context/context.types';
import { getMealById } from '../../../utils/api';
import { useCurrentParams } from '../../../utils/useCurrentParams';
import { IMealsProps } from '../MealCategory/MealCategoryItem/MealCategoryItem.types';
import { MealStyle } from './Meal.style';

const Meal = () => {
  const id = useCurrentParams();
  const { state, dispatch } = useContext(AppContext) as TAppContext;

  useEffect(() => {
    getMealById<IMealsProps>(id)
      .then(data => {
        dispatch({ type: 'mealFetched', payload: data.meals[0] });
      })
      .catch(err => console.log(err));
  }, []);

  if (state.meal) {
    console.log(state.meal);
    const { strMeal, strMealThumb, strCategory, strArea, strInstructions } =
      state.meal;
    return (
      <MealStyle className="container">
        <div className="card-image">
          <img src={strMealThumb} />
        </div>
        <div className="card-content">
          <h4>{strMeal}</h4>
          <h5>Category - {strCategory}</h5>
          <h5>Area - {strArea}</h5>
          <p>{strInstructions}</p>
        </div>
      </MealStyle>
    );
  }

  return null;
};

export default Meal;

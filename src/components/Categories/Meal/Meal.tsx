import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../../global/context/context';
import { TAppContext } from '../../../global/context/context.types';
import { getMealById } from '../../../global/utils/api';
import { useCurrentParams } from '../../../global/utils/hooks/useCurrentParams';
import { IMealsProps } from '../MealCategory/MealCategoryItem/MealCategoryItem.types';
import { MealStyle } from './Meal.style';

const Meal = () => {
  const id = useCurrentParams();
  const { state, dispatch } = useContext(AppContext) as TAppContext;
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.meal) {
      getMealById<IMealsProps>(id)
        .then(data => {
          dispatch({ type: 'mealFetched', payload: data.meals[0] });
        })
        .catch(err => console.log(err));
    }

    dispatch({ type: 'gridDisable' });
  }, []);

  if (state.meal) {
    const { strMeal, strMealThumb, strCategory, strArea, strInstructions } =
      state.meal;

    return (
      <MealStyle className="container">
        <div className="card-image">
          <img src={strMealThumb} />
        </div>
        <div className="card-content">
          <button className="btn red lighten-3" onClick={() => navigate(-1)}>
            Back to category
          </button>
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

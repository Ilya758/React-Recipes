import { Link } from 'react-router-dom';
import { TMeals } from '../../../../constants/initialState.types';

const MealCategoryItem = ({ strMeal, idMeal, strMealThumb }: TMeals) => {
  return (
    <div className="card s12 m4 col">
      <div className="card-image">
        <img src={strMealThumb} />
      </div>
      <div className="card-content">
        <h5>{strMeal}</h5>
      </div>
      <div className="card-action">
        <Link to={`/meals/${idMeal}`} className="btn red lighten-3">
          Read about this
        </Link>
      </div>
    </div>
  );
};

export default MealCategoryItem;

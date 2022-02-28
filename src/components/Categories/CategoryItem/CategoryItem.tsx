import { Link } from 'react-router-dom';
import { TCategory } from '../../../constants/initialState.types';

const CategoryItem = ({
  idCategory,
  strCategory,
  strCategoryDescription,
  strCategoryThumb,
}: TCategory) => {
  return (
    <div className="card s12 m4 col">
      <div className="card-image">
        <img src={strCategoryThumb} />
        <span className="card-title">{strCategory}</span>
      </div>
      <div className="card-content">
        <p>{strCategoryDescription.slice(0, 70) + '...'}</p>
      </div>
      <div className="card-action">
        <Link to={`category/${idCategory}`} className="btn red lighten-3">
          Watch category
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;

import { TCategory } from '../../../constants/initialState.types';

const Category = ({
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
    </div>
  );
};

export default Category;

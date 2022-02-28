import { GridStyle } from './Categories.style';
import { ICategoriesProps } from './Categories.types';
import CategoryItem from './CategoryItem/CategoryItem';

const Categories = ({ categories }: ICategoriesProps) => {
  return (
    <>
      <div className="container">
        <GridStyle className="grid">
          {Object.values(categories).map(category => {
            return <CategoryItem key={category.idCategory} {...category} />;
          })}
        </GridStyle>
      </div>
    </>
  );
};

export default Categories;

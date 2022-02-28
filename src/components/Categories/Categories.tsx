import { GridStyle } from './Categories.style';
import { ICategoriesProps } from './Categories.types';
import Category from './Category/Category';

const Categories = ({ categories }: ICategoriesProps) => {
  console.log(GridStyle);

  return (
    <>
      <div className="container">
        <GridStyle className="grid">
          {Object.values(categories).map(category => {
            return <Category key={category.idCategory} {...category} />;
          })}
        </GridStyle>
      </div>
    </>
  );
};

export default Categories;

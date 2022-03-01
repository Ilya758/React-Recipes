import { ICategoriesProps } from './Categories.types';
import CategoryItem from './CategoryItem/CategoryItem';

const Categories = ({ categories }: ICategoriesProps) => {
  return (
    <>
      {Object.values(categories).map(category => {
        return <CategoryItem key={category.idCategory} {...category} />;
      })}
    </>
  );
};

export default Categories;

import { useEffect } from 'react';
import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Categories from './components/Categories/Categories';
import Category from './components/Categories/MealCategory/MealCategory';
import Home from './components/Home/Home';
import { INITIAL_STATE } from './constants/initialState';
import { TCategories } from './constants/initialState.types';
import { AppContext } from './global/context/context';
import { getAllCategories } from './utils/api';
import { reducer } from './utils/reducer/reducer';

const App = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { categories } = state;

  useEffect(function getCats() {
    dispatch({ type: 'loading' });

    getAllCategories<TCategories>()
      .then(data => {
        dispatch({ type: 'categoriesFetched', payload: data.categories });
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <AppContext.Provider value={{ state, dispatch }}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Categories categories={categories} />} />
            <Route path="category/:id" element={<Category />} />
          </Route>
        </Routes>
      </AppContext.Provider>
    </>
  );
};

export default App;

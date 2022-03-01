import { useEffect } from 'react';
import { useReducer } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Categories from './components/Categories/Categories';
import Meal from './components/Categories/Meal/Meal';
import Category from './components/Categories/MealCategory/MealCategory';
import Home from './components/Home/Home';
import { INITIAL_STATE } from './global/constants/initialState';
import { TCategories } from './global/constants/initialState.types';
import { AppContext } from './global/context/context';
import { getAllCategories } from './global/utils/api';
import { reducer } from './global/utils/reducer/reducer';

const App = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { categories } = state;
  const { pathname } = useLocation();

  useEffect(
    function activateGrid() {
      if (pathname === '/') {
        dispatch({ type: 'reset' });
      }
    },
    [pathname]
  );

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
            <Route path="meals/:id" element={<Meal />} />
          </Route>
        </Routes>
      </AppContext.Provider>
    </>
  );
};

export default App;

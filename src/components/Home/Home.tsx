import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AppContext } from '../../global/context/context';
import { TAppContext } from '../../global/context/context.types';
import { GridStyle } from '../Categories/Categories.style';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
  const {
    state: { isMeal },
  } = useContext(AppContext) as TAppContext;

  return (
    <>
      <Header />
      <main className="container">
        <GridStyle isMeal={isMeal}>
          <Outlet />
        </GridStyle>
      </main>
      <Footer />
    </>
  );
};

export default Home;

import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AppContext } from '../../global/context/context';
import { TAppContext } from '../../global/context/context.types';
import { GridStyle } from '../Categories/Categories.style';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import { MainContainer } from './Home.style';

const Home = () => {
  const {
    state: { isMeal, isLoading },
  } = useContext(AppContext) as TAppContext;

  return (
    <>
      <Header />
      <MainContainer className="container">
        {!isLoading ? (
          <GridStyle isMeal={isMeal}>
            <Outlet />
          </GridStyle>
        ) : (
          <Preloader />
        )}
      </MainContainer>
      <Footer />
    </>
  );
};

export default Home;

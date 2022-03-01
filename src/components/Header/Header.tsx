import { Link } from 'react-router-dom';
import { NavWrapper } from './Header.style';

const Header = () => {
  return (
    <header>
      <nav>
        <NavWrapper className="nav-wrapper red lighten-3">
          <Link to="/" className="brand-logo left">
            React-Recipes
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a
                href="https://github.com/Ilya758"
                target={'_blank'}
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </NavWrapper>
      </nav>
    </header>
  );
};

export default Header;

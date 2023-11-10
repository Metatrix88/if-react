import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

import { PATH } from '../../constants/paths';

// components
import { Container } from '../../containers/Container';
import { Button } from '../UI/Button';
import { Login, Logo, Menu, Night } from '../../icons';
// import { LogInModal } from '../LogInModal';

// styles
import './Header.scss';

export const Header = () => {
  // const logInRef = useRef(null); //вызов модального окна
  const navigate = useNavigate();

  return (
    <>
      <Container className="header lg-2-col">
        <Link to={PATH.index} className="header__logo">
          <Logo />
        </Link>
        <ul className="header__menu">
          <li className="header__links">
            <ul className="header__list">
              <li>
                <a className="header__link" href="#">
                  Stays
                </a>
              </li>
              <li>
                <a className="header__link" href="#">
                  Attractions
                </a>
              </li>
            </ul>
          </li>
          <li className="header__buttons">
            <ul className="header__list">
              <li className="header__button-night">
                <Button
                  className="header__button"
                  variant="icon"
                  aria-label="Screen Theme Switch"
                >
                  <Night className="header__icon-night header__button--focus" />
                </Button>
              </li>
              <li className="header__button-login">
                <Button
                  className="header__button"
                  variant="icon"
                  aria-label="Login"
                  onClick={() => navigate(PATH.login)}
                  // onClick={() => logInRef.current.open()}//модальное окно
                >
                  <Login className="header__button--focus" />
                </Button>
              </li>
              <li className="header__button-menu">
                <Button
                  className="header__button"
                  variant="icon"
                  aria-label="Menu"
                >
                  <Menu className="header__button--focus" />
                </Button>
              </li>
            </ul>
          </li>
        </ul>
      </Container>
      {/*{ <LogInModal ref={logInRef} /> //модальное окно**/}
    </>
  );
};

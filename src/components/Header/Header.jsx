import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import classNames from 'classnames';

import { PATH } from '../../constants/paths';
import {useAuthContext} from '../../contexts/Auth.context';

// components
import { Container } from '../Container';
import { Button } from '../UI/Button';
import { Login, Logo, Menu, Night } from '../../icons';

// import { LogInModal } from '../LogInModal';

// styles
import './Header.scss';

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // const logInRef = useRef(null); //вызов модального окна
  const [ isLogin, setIsLogin] = useState(false)
  const { userEmail, userPassword } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if(userEmail && userPassword) {
      setIsLogin(true)
    }
  },[ userEmail, userPassword]);

  const handleLogin = () => {
    navigate(PATH.login);
  };

  const handleLogout = () => {
    setIsModalOpen(false);
    navigate(PATH.login);
  };

  const openModal = () => {
    setIsHovered(true);
  };

  const closeModal = () => {
    setIsHovered(false);
  };

  useEffect(() => {

    if (isHovered) {
      setIsModalOpen(true);
    }
  }, [isHovered]);

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
                  onClick={handleLogin}
                  variant="icon"
                  aria-label="Login"

                  onMouseEnter={openModal}
                  onMouseLeave={closeModal}

                  // onClick={() => logInRef.current.open()}//модальное окно
                >
                  <Login className={classNames('header__button--focus', { 'header__button-login--is-login': isLogin })}/>
                </Button>
              </li>
              <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                className="header__modal-logout"
                style={{
                  overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0)'
                  }
                }}
                ariaHideApp={false}
                // overlayClassName="header__modal-overlay"
              >
                <button onClick={handleLogout}>LogOut</button>
              </Modal>
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

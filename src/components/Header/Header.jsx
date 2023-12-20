import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import classNames from 'classnames';
import { useTheme } from 'react-jss';

import { setStatus } from '../../store/slices/auth.slice';

// constants
import { PATH } from '../../constants/paths';
import { authStatuses } from '../../constants/authStatuses';

// components
import { Container } from '../Container';
import { Button } from '../UI/Button';
import { Login, Logo, Menu, Night } from '../../icons';

// styles
import { useHeaderStyles } from './Header.styles';
import { themeVariants } from '../../constants/themeVariants';
import { setVariant } from '../../store/slices/themes.slice';

export const Header = () => {
  const theme = useTheme();
  const classes = useHeaderStyles({ theme });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedIn = useSelector(
    (state) => state.auth.status === authStatuses.loggedIn,
  );
  const themeMode = useSelector((state) => state.themes.variant);

  const handleLogout = () => {
    dispatch(setStatus(authStatuses.loggedOut));
    setIsModalOpen(false);
    navigate(PATH.login);
  };

  const handleChangeThemes = () => {
    dispatch(
      setVariant(
        themeMode === themeVariants.whiteTheme
          ? themeVariants.darkTheme
          : themeVariants.whiteTheme,
      ),
    );
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
      <Container className={classes.root}>
        <Link to={PATH.index} className={classes.logo}>
          <Logo />
        </Link>
        <ul className={classes.menu}>
          <li className={classes.links}>
            <ul className={classes.list}>
              <li>
                <a className={classes.link} href="#">
                  Stays
                </a>
              </li>
              <li>
                <a className={classes.link} href="#">
                  Attractions
                </a>
              </li>
            </ul>
          </li>
          <li>
            <ul className={classes.list}>
              <li className={classes.wrapperButtonNight}>
                <Button
                  onClick={handleChangeThemes}
                  className={classes.buttonFocus}
                  variant="icon"
                  aria-label="Screen Theme Switch"
                >
                  <Night
                    className={`${classes.iconNight} ${classes.iconFocus}`}
                  />
                </Button>
              </li>
              <li className={classes.wrapperButtonLogin}>
                <Button
                  className={classes.buttonFocus}
                  variant="icon"
                  aria-label="Login"
                  onMouseEnter={openModal}
                  onMouseLeave={closeModal}
                >
                  <Login
                    className={classNames(classes.iconFocus, {
                      [classes.isLogin]: loggedIn,
                    })}
                  />
                </Button>
              </li>
              <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                className={classes.wrapperButtonLogout}
                style={{
                  overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                  },
                }}
                ariaHideApp={false}
              >
                <Button className={classes.buttonLogout} onClick={handleLogout}>
                  LogOut
                </Button>
              </Modal>
              <li className={classes.wrapperButtonMenu}>
                <Button
                  className={classes.buttonFocus}
                  variant="icon"
                  aria-label="Menu"
                >
                  <Menu className={classes.iconFocus} />
                </Button>
              </li>
            </ul>
          </li>
        </ul>
      </Container>
    </>
  );
};

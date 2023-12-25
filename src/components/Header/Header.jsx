import React, { useEffect, useState } from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { useTheme } from 'react-jss';

// slices
import { setStatus } from '../../store/slices/auth.slice';
import { setVariant } from '../../store/slices/themes.slice';

// constants
import { PATH } from '../../constants/paths';
import { authStatuses } from '../../constants/authStatuses';
import { themeVariants } from '../../constants/themeVariants';

// components
import { Container } from '../Container';
import { Button } from '../UI/Button';
import { Login, Logo, Menu, Night } from '../../icons';

// styles
import { useHeaderStyles } from './Header.styles';

export const Header = () => {
  const theme = useTheme();
  const classes = useHeaderStyles({ theme });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedIn = useSelector(
    (state) => state.auth.status === authStatuses.loggedIn,
  );
  const themeMode = useSelector((state) => state.themes.variant);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isModalOpen && !event.target.closest(`${classes.wrapperLogOut}`)) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    dispatch(setStatus(authStatuses.loggedOut));
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
                <NavLink to={PATH.stays} className={classes.link}>
                  Stays
                </NavLink>
              </li>
              <li>
                <NavLink to={PATH.attractions} className={classes.link}>
                  Attractions
                </NavLink>
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
                >
                  <Login
                    className={classNames(classes.iconFocus, {
                      [classes.isLogin]: loggedIn,
                    })}
                  />
                </Button>
                {isModalOpen && (
                  <div className={classes.wrapperLogOut}>
                    <p>Are you sure you want to get out?</p>
                    <Button
                      className={classes.buttonsLogOut}
                      onClick={handleLogout}
                    >
                      LogOut
                    </Button>
                    <Button
                      className={classes.buttonsLogOut}
                      onClick={closeModal}
                    >
                      Cancel
                    </Button>
                  </div>
                )}
              </li>
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

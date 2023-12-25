import React from 'react';
import { NavLink } from 'react-router-dom';

// constants
import {
  footerAboutMenu,
  footerPropertyTypesMenu,
  footerSupportMenu,
} from '../../constants/footerMenu';

// components
import { Container } from '../Container';
import { Logo } from '../../icons';

// styles
import { useFooterStyles } from './Footer.styles';
import { useTheme } from 'react-jss';

export const Footer = () => {
  const theme = useTheme();
  const classes = useFooterStyles({ theme });
  return (
    <footer className={classes.root}>
      <Container>
        <a href="#" className={classes.logo}>
          <Logo className={classes.icon} />
        </a>
        <nav className={classes.nav}>
          <ul className={`${classes.list} ${classes.right}`}>
            {footerAboutMenu.map(({ to, title }) => (
              <li key={to} className={`${classes.item} ${classes.title}`}>
                <NavLink to={to} className={classes.link}>
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className={`${classes.list} ${classes.center}`}>
            {footerPropertyTypesMenu.map(({ to, title }) => (
              <li key={to} className={`${classes.item} ${classes.title}`}>
                <NavLink to={to} className={classes.link}>
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className={`${classes.list} ${classes.left}`}>
            {footerSupportMenu.map(({ to, title }) => (
              <li key={to} className={`${classes.item} ${classes.title}`}>
                <NavLink to={to} className={classes.link}>
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <p className={classes.copyright}>
          &#169; 2022 Triphouse, Inc. All rights reserved
        </p>
      </Container>
    </footer>
  );
};

import React from 'react';

// components
import { Container } from '../Container';
import { Logo } from '../../icons';

// styles
import { useFooterStyles } from './Footer.styles';

export const Footer = () => {
  const classes = useFooterStyles();
  return (
    <footer className={classes.root}>
      <Container>
        <a href="#" className={classes.logo}>
          <Logo className={classes.icon} />
        </a>
        <nav className={classes.nav}>
          <ul className={`${classes.list} ${classes.right}`}>
            <li className={`${classes.item} ${classes.title}`}>
              <a className={classes.link} href="#">
                About
              </a>
            </li>
            <li className={classes.item}>
              <a className={classes.link} href="#">
                How Triphouse works
              </a>
            </li>
            <li className={classes.item}>
              <a className={classes.link} href="#">
                Careers
              </a>
            </li>
            <li className={classes.item}>
              <a className={classes.link} href="#">
                Privacy
              </a>
            </li>
            <li className={classes.item}>
              <a className={classes.link} href="#">
                Terms
              </a>
            </li>
          </ul>
          <ul className={`${classes.list} ${classes.center}`}>
            <li className={`${classes.item} ${classes.title}`}>
              <a className={classes.link} href="#">
                Property types
              </a>
            </li>
            <li className={classes.item}>
              <a className={classes.link} href="#">
                Guest houses
              </a>
            </li>
            <li className={classes.item}>
              <a className={classes.link} href="#">
                Hotels
              </a>
            </li>
            <li className={classes.item}>
              <a className={classes.link} href="#">
                Apartments
              </a>
            </li>
            <li className={classes.item}>
              <a className={classes.link} href="#">
                Villas
              </a>
            </li>
            <li className={classes.item}>
              <a className={classes.link} href="#">
                Holiday homes
              </a>
            </li>
            <li className={classes.item}>
              <a className={classes.link} href="#">
                Hostels
              </a>
            </li>
          </ul>
          <ul className={`${classes.list} ${classes.left}`}>
            <li className={`${classes.item} ${classes.title}`}>
              <a className={classes.link} href="#">
                Support
              </a>
            </li>
            <li className={classes.item}>
              <a className={classes.link} href="#">
                Contact Customer Service
              </a>
            </li>
            <li className={classes.item}>
              <a className={classes.link} href="#">
                FAQ
              </a>
            </li>
          </ul>
        </nav>
        <p className={classes.copyright}>
          &#169; 2022 Triphouse, Inc. All rights reserved
        </p>
      </Container>
    </footer>
  );
};

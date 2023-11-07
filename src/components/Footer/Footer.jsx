import React from 'react';

// components
import { Container } from '../../containers/Container';
import { Logo } from '../../icons';

// styles
import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <a href="#" className="footer__logo">
          <Logo className="footer__logo-icon" />
        </a>
        <nav className="row footer__nav">
          <ul className="col-lg-4 col-md-4 col-sm-2 _right footer__list">
            <li className="footer__item footer__item-title">
              <a className="footer__link" href="#">
                About
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">
                How Triphouse works
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">
                Careers
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">
                Privacy
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">
                Terms
              </a>
            </li>
          </ul>
          <ul className="col-lg-4 col-md-4 col-sm-2 _center footer__list">
            <li className="footer__item footer__item-title">
              <a className="footer__link" href="#">
                Property types
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">
                Guest houses
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">
                Hotels
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">
                Apartments
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">
                Villas
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">
                Holiday homes
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">
                Hostels
              </a>
            </li>
          </ul>
          <ul className="col-lg-4 col-md-4 col-sm-2 _left footer__list">
            <li className="footer__item footer__item-title">
              <a className="footer__link" href="#">
                Support
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">
                Contact Customer Service
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">
                FAQ
              </a>
            </li>
          </ul>
        </nav>
        <p className="footer__copyright">
          &#169; 2022 Triphouse, Inc. All rights reserved
        </p>
      </Container>
    </footer>
  );
};

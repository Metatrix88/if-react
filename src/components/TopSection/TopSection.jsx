import React from 'react';
import {Container} from '../Container';

import './TopSection.scss';
import {FormDesktop} from '../FormDesctop';

export const TopSection = () => {
  return (
    <section className="top-section">
      <Container>
        <h1 className="visually-hidden">
          Search for accommodation, houses, hotels, apartments
        </h1>
        <h2 className="top-section__title">
          Discover stays to&nbsp;live,&nbsp;work or just relax
        </h2>
        <FormDesktop/>
        {/*<form className="lg-4-col search-form--desktop desktop-form">*/}
        {/*  <div className="desktop-form__input">*/}
        {/*    <input*/}
        {/*      className="input desktop-form__input-city"*/}
        {/*      type="text"*/}
        {/*      name="city"*/}
        {/*      id="city"*/}
        {/*      title="Your destination or hotel name"*/}
        {/*      required*/}
        {/*    />*/}
        {/*    <label htmlFor="city">Your destination or hotel name</label>*/}
        {/*  </div>*/}
        {/*  <div className="desktop-form__input">*/}
        {/*    <input*/}
        {/*      className="input desktop-form__input-date"*/}
        {/*      type="text"*/}
        {/*      name="date"*/}
        {/*      id="date"*/}
        {/*      title="Check-in — Check-out"*/}
        {/*      required*/}
        {/*    />*/}
        {/*    <label htmlFor="date">Check-in — Check-out</label>*/}
        {/*  </div>*/}
        {/*  <div className="desktop-form__input">*/}
        {/*    <label className="visually-hidden" htmlFor="filter"*/}
        {/*    >Selecting a number</label*/}
        {/*    >*/}
        {/*    <input*/}
        {/*      className="input desktop-form__input-filter"*/}
        {/*      type="text"*/}
        {/*      name="filter"*/}
        {/*      id="filter"*/}
        {/*      placeholder="2 Adults — 0 Children — 1 Room"*/}
        {/*      title="2 Adults — 0 Children — 1 Room"*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*  <button className="button button--blue desktop-form__button-search">*/}
        {/*    Search*/}
        {/*  </button>*/}
        {/*</form>*/}

        {/*<form className="md-2-col sm-2-col search-form--laptop laptop-form">*/}
        {/*  <div className="laptop-form__input-wrap laptop-form__input--full-width">*/}
        {/*    <div className="laptop-form__destination-wrap">*/}
        {/*      <button*/}
        {/*        className="laptop-form__button-destination"*/}
        {/*        type="button"*/}
        {/*        aria-label="Your destination or hotel name"*/}
        {/*      >*/}
        {/*        <svg className="laptop-form__button-icon">*/}
        {/*          <use href="./src/images/svg/sprite.svg#search"/>*/}
        {/*        </svg>*/}
        {/*      </button>*/}
        {/*      <div className="laptop-form__input laptop-form__input-destination">*/}
        {/*        <input*/}
        {/*          className="input input-laptop"*/}
        {/*          type="text"*/}
        {/*          name="destination"*/}
        {/*          id="destination"*/}
        {/*          title="Your destination or hotel name"*/}
        {/*          required*/}
        {/*        />*/}
        {/*        <label htmlFor="destination"*/}
        {/*        >Your destination or hotel name</label*/}
        {/*        >*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className="laptop-form__input-wrap">*/}
        {/*    <div className="laptop-form__input">*/}
        {/*      <input*/}
        {/*        className="input input-laptop"*/}
        {/*        type="text"*/}
        {/*        name="date"*/}
        {/*        id="check-in"*/}
        {/*        title="Check-in"*/}
        {/*        required*/}
        {/*      />*/}
        {/*      <label htmlFor="check-in">Check-in</label>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className="laptop-form__input-wrap">*/}
        {/*    <div className="laptop-form__input">*/}
        {/*      <input*/}
        {/*        className="input input-laptop"*/}
        {/*        type="text"*/}
        {/*        name="date"*/}
        {/*        id="check-out"*/}
        {/*        title="Check-out"*/}
        {/*        required*/}
        {/*      />*/}
        {/*      <label htmlFor="check-out">Check-out</label>*/}
        {/*    </div>*/}
        {/*  </div>*/}

        {/*  <div className="laptop-form__input-wrap laptop-form__input--full-width">*/}
        {/*    <div className="laptop-form__properties-wrap">*/}
        {/*      <div className="laptop-form__input laptop-form__input-properties">*/}
        {/*        <input*/}
        {/*          className="input input-laptop"*/}
        {/*          type="text"*/}
        {/*          name="adults"*/}
        {/*          id="adults-md"*/}
        {/*          title="Adults"*/}
        {/*          required*/}
        {/*        />*/}
        {/*        <label htmlFor="adults-md">Adults</label>*/}
        {/*      </div>*/}

        {/*      <div className="laptop-form__input laptop-form__input-properties">*/}
        {/*        <input*/}
        {/*          className="input input-laptop"*/}
        {/*          type="text"*/}
        {/*          name="children"*/}
        {/*          id="children"*/}
        {/*          title="Children"*/}
        {/*          required*/}
        {/*        />*/}
        {/*        <label htmlFor="children">Children</label>*/}
        {/*      </div>*/}
        {/*      <div className="laptop-form__input laptop-form__input-properties">*/}
        {/*        <input*/}
        {/*          className="input input-laptop"*/}
        {/*          type="text"*/}
        {/*          name="rooms"*/}
        {/*          id="rooms"*/}
        {/*          title="Rooms"*/}
        {/*          required*/}
        {/*        />*/}
        {/*        <label htmlFor="rooms">Rooms</label>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}

        {/*  <button className="button button--blue laptop-form__button-search">*/}
        {/*    Search*/}
        {/*  </button>*/}
        {/*</form>*/}

        <ul className="mobile-app">
          <li>
            <a
              href="#"
              className="mobile-app__link"
              target="_blank"
              aria-label="Download the mobile app for android"
            >
              <svg className="mobile-app__icon-google">
                <use href="./src/images/svg/sprite.svg#google"/>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mobile-app__link"
              target="_blank"
              aria-label="Download the mobile app for apple"
            >
              <svg className="mobile-app__icon-apple">
                <use href="./src/images/svg/sprite.svg#app"/>
              </svg>
            </a>
          </li>
        </ul>
      </Container>
      {/*<div className="container">*/}

      {/*</div>*/}
    </section>
  )
}
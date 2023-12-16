import React from 'react';

// components
import {Container} from '../Container';

// styles
import {useDestinationsStyles} from './Destinations.styles';
import {Button} from '../UI/Button';

export const Destinations = () => {
  const classes = useDestinationsStyles();
  return (
    <Container className={classes.root}>
      <h2 className={classes.title}>The best destinations</h2>
      <div className={classes.wrapperButtons}>
        <Button className={classes.buttons}>Regions</Button>
        <Button className={classes.buttons}>Cities</Button>
        <Button className={classes.buttons}>Places&nbsp;<span className={classes.hideName}>of interest</span></Button>
      </div>
      <ul className="row destinations__wrap-cards">
        <li className="col-lg-3 col-md-6 col-sm-3 destinations__card">
          <div className="destinations__wrap-img">
            <img
              className="destinations__img"
              src="src/images/jpg/destinations/maldives.jpg"
              alt="Maldives"
            />
            <button className="button destinations__button-book">Book now</button>
          </div>
          <h3 className="destinations__subtitle">Maldives</h3>
        </li>
        <li className="col-lg-3 col-md-6 col-sm-3 destinations__card">
          <div className="destinations__wrap-img">
            <img
              className="destinations__img"
              src="src/images/jpg/destinations/spain.jpg"
              alt="Spain"
            />
            <button className="button destinations__button-book">Book now</button>
          </div>
          <h3 className="destinations__subtitle">Spain</h3>
        </li>
        <li
          className="col-lg-3 col-md-6 col-sm-3 _mobile-none destinations__card"
        >
          <div className="destinations__wrap-img">
            <img
              className="destinations__img"
              src="src/images/jpg/destinations/norway.jpg"
              alt="Norway"
            />
            <button className="button destinations__button-book">Book now</button>
          </div>
          <h3 className="destinations__subtitle">Norway</h3>
        </li>
        <li
          className="col-lg-3 col-md-6 col-sm-3 _mobile-none destinations__card"
        >
          <div className="destinations__wrap-img">
            <img
              className="destinations__img"
              src="src/images/jpg/destinations/island.jpg"
              alt="Island"
            />
            <button className="button destinations__button-book">Book now</button>
          </div>
          <h3 className="destinations__subtitle">Island</h3>
        </li>
      </ul>
      <button
        className="button-next destinations__button-next"
        type="button"
        aria-label="Next destinations"
      >
        <svg className="button-next__icon destinations__button-next--transform">
          <use href="./src/images/svg/sprite.svg#arrow"/>
        </svg>
      </button>
    </Container>
  );
};
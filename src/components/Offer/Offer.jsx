import React from 'react';
import { Container } from '../Container';
import { useOfferStyles } from './Offer.styles';
import { Devices, Forum, Headset, ThumbUp } from '../../icons';

export const Offer = () => {
  const classes = useOfferStyles();
  return (
    <Container className={classes.root}>
      <h2 className={classes.title}>What do we offer</h2>
      <ul className={classes.list}>
        <li className={classes.card}>
          <Headset className={classes.image} />
          <h3>Support 24/7</h3>
        </li>
        <li className={classes.card}>
          <Forum className={classes.image} />
          <h3>Communicate directly</h3>
        </li>
        <li className={classes.card}>
          <Devices className={classes.image} />
          <h3>Book online</h3>
        </li>
        <li className={classes.card}>
          <ThumbUp className={classes.image} />
          <h3>Real guest reviews</h3>
        </li>
      </ul>
    </Container>
  );
};

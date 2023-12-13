import React from 'react';

// components
import { Container } from '../Container';
import { FormDesktop } from '../FormDesktop';
import { FormLaptop } from '../FormLaptop';
import { MobileApps } from '../MobileApps';

// styles
import { useTopSectionStyles } from './TopSection.styles';

export const TopSection = () => {
  const classes = useTopSectionStyles();
  return (
    <section className={classes.root}>
      <Container>
        <h1 className={classes.visuallyHidden}>
          Search for accommodation, houses, hotels, apartments
        </h1>
        <h2 className={classes.title}>
          Discover stays to&nbsp;live,&nbsp;work or just relax
        </h2>
        <FormDesktop />
        <FormLaptop />
        <MobileApps />
      </Container>
    </section>
  );
};

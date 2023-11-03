import React from 'react';

// context
import { FilterCountersContextProvider } from '../../contexts/FilterCounters.context';

// components
import { Container } from '../Container';
import { FormDesktop } from '../FormDesktop';
import { FormLaptop } from '../FormLaptop';
import { MobileApps } from '../MobileApps';

// styles
import './TopSection.scss';

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
        <FilterCountersContextProvider>
          <FormDesktop />
        </FilterCountersContextProvider>
        <FormLaptop />
        <MobileApps />
      </Container>
    </section>
  );
};

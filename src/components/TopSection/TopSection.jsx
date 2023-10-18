import React from 'react';

// components
import { Container } from '../Container';
import { FormDesktop } from '../FormDesctop';
import { FormLaptop } from '../FormLaptop';
import { MobileApps } from '../MobileApps';

// styles
import './TopSection.scss';

export const TopSection = ({
  setAvailableVisible,
  setAvailableVisibleLapTop,
}) => {
  return (
    <section className="top-section">
      <Container>
        <h1 className="visually-hidden">
          Search for accommodation, houses, hotels, apartments
        </h1>
        <h2 className="top-section__title">
          Discover stays to&nbsp;live,&nbsp;work or just relax
        </h2>
        <FormDesktop setAvailableVisible={setAvailableVisible} />
        <FormLaptop setAvailableVisibleLapTop={setAvailableVisibleLapTop} />
        <MobileApps />
      </Container>
    </section>
  );
};

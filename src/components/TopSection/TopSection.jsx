import React from 'react';

import { Container } from '../Container';
import { FormDesktop } from '../FormDesctop';
import {FormLaptop} from '../FormLaptop';
import {MobileApps} from '../MobileApps';

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
        <FormDesktop />
        <FormLaptop/>
        <MobileApps/>
      </Container>
    </section>
  );
};

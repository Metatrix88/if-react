import React, { Component } from 'react';

import { Container } from '../Container';
import { FormDesktop } from '../FormDesctopClass';
import { FormLaptop } from '../FormLaptop';
import { MobileApps } from '../MobileApps';

import './TopSection.scss';

export class TopSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="top-section">
        <Container>
          <h1 className="visually-hidden">
            Search for accommodation, houses, hotels, apartments
          </h1>
          <h2 className="top-section__title">
            Discover stays to&nbsp;live,&nbsp;work or just relax
          </h2>
          <FormDesktop searchHotels={this.props.searchHotels} />
          <FormLaptop />
          <MobileApps />
        </Container>
      </section>
    );
  }
}

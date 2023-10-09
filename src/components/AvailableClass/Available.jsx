import React, { Component } from 'react';

import { ContainerCards } from '../ContainerCards';
import { Card } from '../Card';
import { Link } from '../UI/Link';
import { Image } from '../UI/Image';
import { Container } from '../Container';

import './Available.scss';

export class Available extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container className="available">
        <h2 className="available__title">Available hotels</h2>
        <ContainerCards>
          {this.props.hotels.map((home) => (
            <Card key={home.id} className="available__card">
              <Link className="available__link" variant="card" target="_blank">
                <Image {...home} className="available__img" />
                {home.name}
                <h3 className="available__subtitle">
                  {home.city}, {home.country}
                </h3>
              </Link>
            </Card>
          ))}
        </ContainerCards>
      </Container>
    );
  }
}

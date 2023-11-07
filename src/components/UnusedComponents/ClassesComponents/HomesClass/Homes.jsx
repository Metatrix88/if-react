import React, { Component } from 'react';

import { getHotels } from '../../../../services/hotels';

// components
import { Container } from '../../../../containers/Container';
import { ContainerCards } from '../../ContainerCards';
import { Card } from '../../Card';
import { Link } from '../../UI/Link';
import { Image } from '../../../UI/Image';

// styles
import './Homes.scss';

export class Homes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
    };
  }

  componentDidMount() {
    getHotels().then((hotels) => this.setState({ hotels }));
  }

  render() {
    const { hotels } = this.state;
    return (
      <Container className="homes">
        <h2 className="homes__title">Homes guests loves</h2>
        <ContainerCards>
          {hotels.map((home) => (
            <Card key={home.id} className="homes__card">
              <Link className="homes__link" variant="card" target="_blank">
                <Image {...home} className="homes__img" />
                {home.name}
                <h3 className="homes__subtitle">
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

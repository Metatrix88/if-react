import React from 'react';

// components
import { Container } from '../Container';
import { ContainerCards } from '../ContainerCards';
import { Card } from '../Card';
import { Link } from '../UI/Link';
import { Image } from '../UI/Image';

import { homes } from './config';

// styles
import './Homes.scss';

export const Homes = () => {
  return (
    <Container className="homes">
      <h2 className="homes__title">Homes guests loves</h2>
      <ContainerCards>
        {homes.map((home) => (
          <Card key={home.id} className="homes__card">
            <Link
              {...home}
              className="homes__link"
              variant="card"
              target="_blank"
            >
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
};

import React from 'react';

import { useAvailableContext } from '../../contexts/Available.context';

// components
import { ContainerCards } from '../ContainerCards';
import { Card } from '../Card';
import { Link } from '../UI/Link';
import { Image } from '../UI/Image';
import { Container } from '../Container';

// styles
import './Available.scss';

export const Available = () => {
  const { hotels } = useAvailableContext();

  return (
    <Container className="available">
      <h2 className="available__title">Available hotels</h2>
      <ContainerCards>
        {hotels.map((home) => (
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
};

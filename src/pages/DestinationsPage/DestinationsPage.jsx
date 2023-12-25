import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { cardsData } from '../../components/Destinations/destinations.config';

// components
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Container } from '../../components/Container';
import { Image } from '../../components/UI/Image';

// styles
import { useReviewsPage } from './DestinationsPage.styles';

export const DestinationsPage = () => {
  const classes = useReviewsPage();
  const { tab, destinationId } = useParams();
  const [object, setObject] = useState(null);

  console.log(destinationId);
  console.log(tab);

  useEffect(() => {
    const foundObject = cardsData[tab].find(
      (infoObject) => infoObject.id.toString() === destinationId,
    );
    if (foundObject) {
      setObject(foundObject);
    } else {
      console.error(`Hotel with id ${destinationId} not found`);
    }
  }, [destinationId]);

  if (!object) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      <Container className={classes.root}>
        <h2 className={classes.title}>{object.name}</h2>
        <Image {...object} className={classes.image} />
        <p className={classes.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          aliquam beatae, consequatur dolore eaque eligendi ipsum maxime minus
          nihil quas reiciendis repellat sint suscipit tempore temporibus unde
          voluptatum? Adipisci autem consequatur dolore ea ipsa ipsam laudantium
          magni minima nam nesciunt, nihil officiis pariatur placeat possimus
          praesentium ratione recusandae repellat vel velit vitae! A ab adipisci
          aliquid animi aperiam at consequuntur dolore dolorem doloremque
          doloribus ducimus eius exercitationem hic ipsam ipsum, iusto labore
          magni minus molestias nobis nostrum obcaecati quaerat qui quod,
          reprehenderit sed totam vitae? A adipisci est non ratione
          voluptatibus! Consequuntur error expedita inventore nam voluptas!
          Temporibus, voluptate, voluptatem!
        </p>
      </Container>
      <Footer />
    </>
  );
};

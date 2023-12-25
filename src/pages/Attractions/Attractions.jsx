import React from 'react';

// components
import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';

// styles
import { useAttractions } from './Attractions.styles';

export const Attractions = () => {
  const classes = useAttractions();
  return (
    <>
      <Header />
      <Container className={classes.root}>
        <h2 className={classes.title}>Attractions</h2>
        <p className={classes.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque earum,
          ipsa odit officiis rem tenetur voluptatem voluptates? A asperiores,
          beatae cum delectus ea eligendi esse, eum fugit ipsum, nihil officiis
          provident quod vitae? Adipisci aperiam dolorem facilis, maiores nihil
          placeat quaerat quos voluptatum? Ad cum cupiditate deleniti doloremque
          dolorum ducimus esse fugit, impedit laborum maiores, molestiae
          necessitatibus nihil provident quae, qui quis soluta! Ab consequuntur
          dolor dolore, magni non officiis porro quaerat quibusdam sint, veniam
          vero voluptatem. At beatae, consectetur, cumque eaque ipsa libero
          maxime necessitatibus nemo nisi nobis perferendis quos sapiente sequi
          similique voluptatibus. Aliquid dignissimos distinctio perspiciatis
          sequi.
        </p>
      </Container>
      <Footer />
    </>
  );
};

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchHotel } from '../../services/hotels';

// components
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Container } from '../../components/Container';
import { Image } from '../../components/UI/Image';

// styles
import './HotelPage.scss';

export const HotelPage = () => {
  const { hotelId } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    fetchHotel(hotelId).then((hotel) => setHotel(hotel));
  }, [hotelId]);

  if (!hotel) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      <Container className="hotel-page">
        <h2 className="hotel-page__title">{hotel.name}</h2>
        <Image className="hotel-page__img" imageUrl={hotel.imageUrl}></Image>
        <p className="hotel-page__subtitle">{hotel.city}</p>
        <p className="hotel-page__subtitle">{hotel.country}</p>
        <p className="hotel-page__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias
          aperiam at, deleniti deserunt ducimus eaque eos est exercitationem
          ipsum itaque maxime nam nobis non odio perspiciatis praesentium quas
          quia quidem sapiente sed sit veritatis voluptatum. Aperiam cupiditate
          debitis, doloremque est, illum incidunt, iure libero natus provident
          repellat sequi suscipit tempora tempore ullam ut veritatis voluptatem!
          Alias hic, sunt! Dolore doloremque dolores fuga fugit laboriosam omnis
          reprehenderit, sunt temporibus? Alias atque aut consequatur cumque
          dicta, distinctio et excepturi maxime, nam possimus saepe
          voluptatibus! Autem deserunt dolore, dolorem doloremque dolores esse
          excepturi, facilis, labore mollitia non possimus quas recusandae
          voluptas voluptate.
        </p>
        <p className="hotel-page__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias
          aperiam at, deleniti deserunt ducimus eaque eos est exercitationem
          ipsum itaque maxime nam nobis non odio perspiciatis praesentium quas
          quia quidem sapiente sed sit veritatis voluptatum. Aperiam cupiditate
          debitis, doloremque est, illum incidunt, iure libero natus provident
          repellat sequi suscipit tempora tempore ullam ut veritatis voluptatem!
          Alias hic, sunt! Dolore doloremque dolores fuga fugit laboriosam omnis
          reprehenderit, sunt temporibus? Alias atque aut consequatur cumque
          dicta, distinctio et excepturi maxime, nam possimus saepe
          voluptatibus! Autem deserunt dolore, dolorem doloremque dolores esse
          excepturi, facilis, labore mollitia non possimus quas recusandae
          voluptas voluptate.
        </p>
        <p className="hotel-page__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias
          aperiam at, deleniti deserunt ducimus eaque eos est exercitationem
          ipsum itaque maxime nam nobis non odio perspiciatis praesentium quas
          quia quidem sapiente sed sit veritatis voluptatum. Aperiam cupiditate
          debitis, doloremque est, illum incidunt, iure libero natus provident
          repellat sequi suscipit tempora tempore ullam ut veritatis voluptatem!
          Alias hic, sunt! Dolore doloremque dolores fuga fugit laboriosam omnis
          reprehenderit, sunt temporibus? Alias atque aut consequatur cumque
          dicta, distinctio et excepturi maxime, nam possimus saepe
          voluptatibus! Autem deserunt dolore, dolorem doloremque dolores esse
          excepturi, facilis, labore mollitia non possimus quas recusandae
          voluptas voluptate.
        </p>
        <p className="hotel-page__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias
          aperiam at, deleniti deserunt ducimus eaque eos est exercitationem
          ipsum itaque maxime nam nobis non odio perspiciatis praesentium quas
          quia quidem sapiente sed sit veritatis voluptatum. Aperiam cupiditate
          debitis, doloremque est, illum incidunt, iure libero natus provident
          repellat sequi suscipit tempora tempore ullam ut veritatis voluptatem!
          Alias hic, sunt! Dolore doloremque dolores fuga fugit laboriosam omnis
          reprehenderit, sunt temporibus? Alias atque aut consequatur cumque
          dicta, distinctio et excepturi maxime, nam possimus saepe
          voluptatibus! Autem deserunt dolore, dolorem doloremque dolores esse
          excepturi, facilis, labore mollitia non possimus quas recusandae
          voluptas voluptate.
        </p>
      </Container>
      <Footer />
    </>
  );
};

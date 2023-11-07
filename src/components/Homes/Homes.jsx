import React, { useEffect, useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { getHotels } from '../../services/hotels';

// components
import { Container } from '../../containers/Container';
import { Image } from '../UI/Image';

// styles
import './Homes.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';
import {Link} from 'react-router-dom';

export const Homes = () => {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    getHotels().then((hotels) => setHomes(hotels));
  }, []);

  return (
    <Container className="homes">
      <h2 className="homes__title">Homes guests loves</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        breakpoints={{
          300: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 4,
          },
        }}
        pagination={{ clickable: true }}
        navigation
      >
        {homes.map((home) => (
          <SwiperSlide key={home.id}>
            <Link to={`/hotels/${home.id}`} className="homes__link" target="_blank">
              <Image {...home} className="homes__img" />
              {home.name}
              <h3 className="homes__subtitle">
                {home.city}, {home.country}
              </h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

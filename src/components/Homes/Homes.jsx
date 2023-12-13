import React, { useEffect, useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import { getHotels } from '../../services/hotels';

// components
import { Container } from '../Container';
import { Image } from '../UI/Image';

// styles
import { useHomesStyles } from './Homes.styles';
import './Homes.swiper.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';

export const Homes = () => {
  const classes = useHomesStyles();
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    getHotels().then((hotels) => setHomes(hotels));
  }, []);

  return (
    <Container className={classes.root}>
      <h2 className={classes.title}>Homes guests loves</h2>
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
            <Link
              to={`/hotels/${home.id}`}
              className={classes.link}
              target="_blank"
            >
              <Image {...home} className={classes.images} />
              {home.name}
              <h3 className={classes.subtitle}>
                {home.city}, {home.country}
              </h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

import React, { memo, useEffect, useRef } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

// components
import { Image } from '../UI/Image';
import { Container } from '../Container';

// styles
import { useAvailableStyles } from './Available.styles';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Available.swiper.scss'


export const Available = memo(() => {
  const classes = useAvailableStyles();
  const hotels = useSelector((state) => state.availableHotels.hotels);

  const availableRef = useRef(null);

  useEffect(() => {
    if (availableRef.current) {
      availableRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hotels]);

  return (
    <Container className={classes.root}>
      <h2 ref={availableRef} className={classes.title}>
        Available hotels
      </h2>
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
        {hotels.map((home) => (
          <SwiperSlide key={home.id}>
            <NavLink
              to={`/hotels/${home.id}`}
              className={classes.link}
              target="_blank"
            >
              <Image {...home} className={classes.images} />
              {home.name}
              <h3 className={classes.subtitle}>
                {home.city}, {home.country}
              </h3>
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
});

Available.displayName = 'Available';

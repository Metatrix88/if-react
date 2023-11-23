import React, { memo, useEffect, useRef } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

// components
import { Image } from '../UI/Image';
import { Container } from '../Container';

// styles
import './Available.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export const Available = memo(() => {
  const hotels = useSelector((state) => state.availableHotels.hotels);

  const availableRef = useRef(null);

  useEffect(() => {
    if (availableRef.current) {
      availableRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hotels]);

  return (
    <Container className="available">
      <h2 ref={availableRef} className="available__title">
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
                className={({ isActive }) =>
                  classNames('available__link', {
                    ['available__link--active']: isActive,
                  })
                }
                target="_blank"
              >
                <Image {...home} className="available__img" />
                {home.name}
                <h3 className="available__subtitle">
                  {home.city}, {home.country}
                </h3>
              </NavLink>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </Container>
  );
});

Available.displayName = 'Available';

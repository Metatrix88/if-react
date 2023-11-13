import React, { memo, useEffect, useRef } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { fetchData, wrapPromise } from '../../lib/wrapPromise';
import { apiUrl } from '../../services/constants';

// context
import { useFormContext } from '../../contexts/Form.context';

// components
import { Image } from '../UI/Image';
import { Container } from '../Container';

// styles
import './Available.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Available = memo(() => {
  const availableRef = useRef(null);
  const {
    inputName,
    startDateMillis,
    endDateMillis,
    adultsQuantity,
    childrenQuantityAndAge,
    roomsQuantity,
  } = useFormContext();

  const queryParams = {
    search: inputName,
    startDateMillis,
    endDateMillis,
    adultsQuantity,
    childrenQuantityAndAge,
    roomsQuantity,
  };

  const hotels = wrapPromise(fetchData(apiUrl, queryParams));

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
        {hotels.length === 0 ? (
          <p className="available__text-info">
            Nothing was found for your request
          </p>
        ) : (
          hotels.map((home) => (
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
          ))
        )}
      </Swiper>
    </Container>
  );
});

Available.displayName = 'Available';

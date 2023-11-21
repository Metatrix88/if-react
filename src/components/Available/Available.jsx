import React, { memo, useEffect, useRef } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { fetchData, wrapPromise } from '../../lib/wrapPromise';
import { apiUrl } from '../../services/constants';

// components
import { Image } from '../UI/Image';
import { Container } from '../Container';

// styles
import './Available.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {useSelector} from 'react-redux';

export const Available = memo(() => {
  const inputCityValue = useSelector((state) => state.searchParams.cityInput)
  const startDateMillis = useSelector((state) => state.searchParams.dateStart)
  const endDateMillis = useSelector((state) => state.searchParams.dateEnd)
  const adultsQuantity = useSelector((state) => state.searchParams.adultsQuantity)
  const childrenQuantityAndAge = useSelector((state) => state.searchParams.childrenQuantityAndAge)
  const roomsQuantity = useSelector((state) => state.searchParams.roomsQuantity)

  const availableRef = useRef(null);

  const queryParams = {
    search: inputCityValue,
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

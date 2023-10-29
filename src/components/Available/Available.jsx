import React, {useEffect, useRef} from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useAvailableContext } from '../../contexts/Available.context';

// components
import { Link } from '../UI/Link';
import { Image } from '../UI/Image';
import { Container } from '../Container';

// styles
import './Available.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Available = () => {
  const { hotels } = useAvailableContext();
  const availableRef = useRef(null);

  useEffect(() => {
    if (availableRef.current) {
      availableRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hotels]);

  return (
    <Container className="available">
      <h2 ref={availableRef} className="available__title">Available hotels</h2>
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
            <Link className="available__link" variant="card" target="_blank">
              <Image {...home} className="available__img" />
              {home.name}
              <h3 className="available__subtitle">
                {home.city}, {home.country}
              </h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useAvailableContext } from '../../contexts/Available.context';

// components
// import { ContainerCards } from '../ContainerCards';
// import { Card } from '../Card';
import { Link } from '../UI/Link';
import { Image } from '../UI/Image';
import { Container } from '../Container';

// styles
import './Available.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Available = () => {
  const { hotels } = useAvailableContext();

  return (
    <Container className="available">
      <h2 className="available__title">Available hotels</h2>
      {/*<ContainerCards>*/}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          breakpoints={{
            300: {
              slidesPerView: 2
            },
            600: {
              slidesPerView: 4
            },
          }}
          pagination={{ clickable: true }}
          navigation
        >
          {hotels.map((home) => (
            <SwiperSlide key={home.id}>
              {/*<Card className="available__card">*/}
                <Link className="available__link" variant="card" target="_blank">
                  <Image {...home} className="available__img" />
                  {home.name}
                  <h3 className="available__subtitle">
                    {home.city}, {home.country}
                  </h3>
                </Link>
              {/*</Card>*/}
            </SwiperSlide>
          ))}
        </Swiper>
      {/*</ContainerCards>*/}
    </Container>
  );
};

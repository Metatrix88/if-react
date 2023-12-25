import React, { useEffect, useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { useTheme } from 'react-jss';

import { getHotels } from '../../services/hotels';
// constants
import { PATH } from '../../constants/paths';

// icons
import { Arrow } from '../../icons';

// components
import { Container } from '../Container';
import { Image } from '../UI/Image';
import { Button } from '../UI/Button';

// styles
import { useHomesStyles } from './Homes.styles';

export const Homes = () => {
  const theme = useTheme();
  const classes = useHomesStyles({ theme });
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
        navigation={{
          nextEl: `.${classes.customNext}`,
          prevEl: `.${classes.customPrev}`,
        }}
      >
        {homes.map((home) => (
          <SwiperSlide key={home.id}>
            <Link
              to={`${PATH.hotelsPage}/${home.id}`}
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
      <Button className={classes.customPrev}>
        <Arrow className={classes.arrowIconPrev} />
      </Button>
      <Button className={classes.customNext}>
        <Arrow className={classes.arrowIconNext} />
      </Button>
    </Container>
  );
};

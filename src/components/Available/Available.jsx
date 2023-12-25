import React, { memo, useEffect, useRef } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTheme } from 'react-jss';

// constants
import { PATH } from '../../constants/paths';

// icons
import { Arrow } from '../../icons';

// components
import { Image } from '../UI/Image';
import { Container } from '../Container';
import { Button } from '../UI/Button';

// styles
import { useAvailableStyles } from './Available.styles';

export const Available = memo(() => {
  const theme = useTheme();
  const classes = useAvailableStyles({ theme });
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
        navigation={{
          nextEl: `.${classes.customNext}`,
          prevEl: `.${classes.customPrev}`,
        }}
      >
        {hotels.map((home) => (
          <SwiperSlide key={home.id}>
            <NavLink
              className={classes.link}
              to={`${PATH.hotelsPage}/${home.id}`}
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
      <Button className={classes.customPrev}>
        <Arrow className={classes.arrowIconPrev} />
      </Button>
      <Button className={classes.customNext}>
        <Arrow className={classes.arrowIconNext} />
      </Button>
    </Container>
  );
});

Available.displayName = 'Available';

import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom';

import { review } from './reviews.config';

// constants
import { PATH } from '../../constants/paths';

// icons
import { Arrow } from '../../icons';

// components
import { Container } from '../Container';
import { Image } from '../UI/Image';
import { Button } from '../UI/Button';

// styles
import { useReviewsStyles } from './Reviews.styles';

export const Reviews = () => {
  const classes = useReviewsStyles();
  return (
    <Container className={classes.root}>
      <h2 className={classes.titleLg}>Guests reviews</h2>
      <h2 className={classes.titleSm}>Reviews</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: `.${classes.customNext}`,
          prevEl: `.${classes.customPrev}`,
        }}
        autoHeight={true}
      >
        {review.map((review) => (
          <SwiperSlide key={review.id} className={classes.slide}>
            <NavLink
              className={classes.link}
              to={`${PATH.review}/${review.id}`}
              target="_blank"
            >
              <div className={classes.wrapperImg}>
                <Image {...review} className={classes.image} />
                <p className={classes.price}>From {review.price} USD</p>
              </div>
              <div>
                <div className={classes.content}>
                  <div className={classes.wrapperNameAndRating}>
                    <div>
                      <h3 className={classes.nameHotel}>{review.nameHotel}</h3>
                      <h4>
                        {review.cityHotel}, {review.countryHotel}
                      </h4>
                    </div>
                    <div className={classes.wrapperRating}>
                      <div className={classes.rating}>{review.rating}</div>
                      <p className={classes.countReviews}>
                        {review.countReviews} reviews
                      </p>
                    </div>
                  </div>
                  <div className={classes.reviewer}>
                    {review.avatarReviewer}
                    <div>
                      <p className={classes.reviewerName}>
                        {review.nameReviewer}
                      </p>
                      <div className={classes.countryInfo}>
                        {review.flagSvg}
                        <p className={classes.country}>
                          {review.countyReviewer}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className={classes.text}>{review.comment}</p>
                </div>
              </div>
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
};

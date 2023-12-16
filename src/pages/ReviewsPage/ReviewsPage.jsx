import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { review } from '../../components/Reviews/reviews.config';

// components
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Container } from '../../components/Container';
import { Image } from '../../components/UI/Image';

// styles
import { useReviewsPage } from './ReviewsPage.styles';

export const ReviewsPage = () => {
  const classes = useReviewsPage();
  const { reviewId } = useParams();
  const [hotelReviews, setHotelReviews] = useState(null);

  useEffect(() => {
    const foundReviews = review.find(
      (infoReview) => infoReview.id.toString() === reviewId,
    );
    if (foundReviews) {
      setHotelReviews(foundReviews);
    } else {
      console.error(`Hotel with id ${reviewId} not found`);
    }
  }, [reviewId]);

  if (!hotelReviews) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      <Container className={classes.root}>
        <h2 className={classes.title}>{hotelReviews.nameHotel}</h2>
        <Image {...hotelReviews} className={classes.image} />
        <h3 className={classes.subtitle}>
          {hotelReviews.cityHotel}, {hotelReviews.countryHotel}
        </h3>
        <div className={classes.reviewer}>
          {hotelReviews.avatarReviewer}
          <div>
            <p className={classes.reviewerName}>{hotelReviews.nameReviewer}</p>
            <div className={classes.countryInfo}>
              {hotelReviews.flagSvg}
              <p>{hotelReviews.countyReviewer}</p>
            </div>
          </div>
        </div>
        <p className={classes.text}>{hotelReviews.comment}</p>
      </Container>
      <Footer />
    </>
  );
};

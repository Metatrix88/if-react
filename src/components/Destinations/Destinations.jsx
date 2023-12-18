import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import { cardsData } from './destinations.config';

// components
import { Container } from '../Container';
import { Button } from '../UI/Button';
import { Image } from '../UI/Image';

// icons
import { Arrow } from '../../icons';

// styles
import { useDestinationsStyles } from './Destinations.styles';

export const Destinations = () => {
  const classes = useDestinationsStyles();
  const [activeTab, setActiveTab] = useState('regions');
  const [showOnlyFirstRow, setShowOnlyFirstRow] = useState(true);
  const [hide, setHide] = useState(true);
  const destinationsRef = useRef(null);

  useEffect(() => {
    setActiveTab('regions');
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleCardVisibility = () => {
    setShowOnlyFirstRow(!showOnlyFirstRow);
    setHide(!hide);
  };

  useEffect(() => {
    if (destinationsRef.current) {
      destinationsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hide]);

  return (
    <Container className={classes.root}>
      <h2 ref={destinationsRef} className={classes.title}>
        The best destinations
      </h2>
      <div className={classes.wrapperButtons}>
        <Button
          className={`${classes.buttons} ${
            activeTab === 'regions' ? classes.activeButtons : ''
          }`}
          onClick={() => handleTabClick('regions')}
        >
          Regions
        </Button>
        <Button
          className={`${classes.buttons} ${
            activeTab === 'cities' ? classes.activeButtons : ''
          }`}
          onClick={() => handleTabClick('cities')}
        >
          Cities
        </Button>
        <Button
          className={`${classes.buttons} ${
            activeTab === 'places' ? classes.activeButtons : ''
          }`}
          onClick={() => handleTabClick('places')}
        >
          Places&nbsp;<span className={classes.hideName}>of interest</span>
        </Button>
      </div>
      <ul className={classes.wrapperCards}>
        {cardsData[activeTab]
          .slice(0, showOnlyFirstRow ? 4 : cardsData[activeTab].length)
          .map((card) => (
            <li key={card.id} className={classes.card}>
              <div className={classes.wrapperImage}>
                <Image {...card} className={classes.image} />
                <Button variant="outlined" className={classes.button}>
                  Book now
                </Button>
              </div>
              <NavLink
                className={classes.link}
                to={`/destinations/${activeTab}/${card.id}`}
                target="_blank"
              >
                {card.name}
              </NavLink>
            </li>
          ))}
      </ul>
      <Button
        onClick={toggleCardVisibility}
        className={`${classes.buttonIcon} ${hide ? classes.arrowIconShow : ''}`}
        type="button"
        aria-label="Next destinations"
      >
        <Arrow className={classes.arrowIconHide} />
      </Button>

      <Swiper
        className={classes.swiper}
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        breakpoints={{
          300: {
            slidesPerView: 2,
          },
        }}
        pagination={{ clickable: true }}
        navigation
      >
        {cardsData[activeTab].map((card) => (
          <SwiperSlide key={card.id}>
            <div className={classes.wrapperImage}>
              <Image {...card} className={classes.image} />
              <Button variant="outlined" className={classes.button}>
                Book now
              </Button>
            </div>
            <NavLink
              className={classes.link}
              to={`/destinations/${activeTab}/${card.id}`}
              target="_blank"
            >
              {card.name}
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

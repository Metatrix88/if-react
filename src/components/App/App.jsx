import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// constants
import { PATH } from '../../constants/paths';
import { authStatuses } from '../../constants/authStatuses';

// components
import { Header } from '../Header';
import { TopSection } from '../TopSection';
import { Available } from '../Available';
import { Homes } from '../Homes';
import { Footer } from '../Footer';
import {Loader} from '../Loader';

export const App = () => {
  const [loading, setLoading] = useState(true);
  const loggedOut = useSelector(
    (state) => state.auth.status !== authStatuses.loggedIn,
  );
  const hotels = useSelector((state) => state.availableHotels.hotels);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedOut) {
      navigate(PATH.login);
    }
  }, [loggedOut]);

  useEffect(() => {
    if (hotels.length > 0) {
      setLoading(false)
    }
  }, [hotels])

  return (
    <>
      <Header />
      <TopSection />
      {loading && <Loader />}
      {!loading && hotels.length > 0 && <Available />}
      <Homes />
      <Footer />
    </>
  );
};

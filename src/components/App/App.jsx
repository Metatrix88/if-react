import React, { Suspense, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux';

// constants
import { PATH } from '../../constants/paths';
import {authStatuses} from '../../constants/authStatuses';

// context
import { FormContextProvider } from '../../contexts/Form.context';

// components
import { Header } from '../Header';
import { TopSection } from '../TopSection';
import { Available } from '../Available';
import { Homes } from '../Homes';
import { Footer } from '../Footer';
import { Loader } from '../Loader';

// styles
import './App.scss';

export const App = () => {
  const loggedOut = useSelector((state) => state.auth.status !== authStatuses.loggedIn)
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedOut) {
      navigate(PATH.login);
    }
  }, [loggedOut]);

  return (
    <>
      <Header />
      <FormContextProvider>
        <TopSection />
        <Suspense fallback={<Loader />}>
          <Available />
        </Suspense>
      </FormContextProvider>
      <Homes />
      <Footer />
    </>
  );
};

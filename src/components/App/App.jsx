import React, { Suspense, useEffect } from 'react';

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
import { useAuthContext } from '../../contexts/Auth.context';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../constants/paths';

export const App = () => {
  const { userEmail, userPassword } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userEmail && !userPassword) {
      navigate(PATH.login);
    }
  }, [userEmail, userPassword]);

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

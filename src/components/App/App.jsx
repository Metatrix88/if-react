import React, { Suspense } from 'react';

// context
import { FormContextProvider } from '../../contexts/Form.context';

// components
import { Sprite } from '../Sprite';
import { Header } from '../Header';
import { TopSection } from '../../containers/TopSection';
import {Available} from '../Available';
import { Homes } from '../Homes';
import { Footer } from '../Footer';
import { Loader } from '../Loader';

// styles
import './App.scss';

export const App = () => {
  return (
    <>
      <Sprite />
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

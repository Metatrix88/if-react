import React, { Suspense } from 'react';

// context
import { FormContextProvider } from '../../contexts/Form.context';

// components
import { Sprite } from '../Sprite';
import { Homes } from '../Homes';
import { TopSection } from '../TopSection';
import { Available } from '../Available';
import { Loader } from '../Loader';

// styles
import './App.scss';

export const App = () => {
  return (
    <>
      <Sprite />
      <FormContextProvider>
        <TopSection />
        <Suspense fallback={<Loader />}>
          <Available />
        </Suspense>
      </FormContextProvider>
      <Homes />
    </>
  );
};

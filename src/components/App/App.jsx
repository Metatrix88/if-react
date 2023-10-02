import React from 'react';

import './App.scss';
import { Homes } from '../Homes';
import { TopSection } from '../TopSection';

export const App = () => {
  return (
    <>
      <TopSection/>
      <Homes />
    </>
  );
};

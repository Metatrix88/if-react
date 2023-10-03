import React from 'react';

import { Sprite } from '../Sprite';
import { Homes } from '../Homes';
import { TopSection } from '../TopSection';
import { Available } from '../Available';

import './App.scss';

export const App = () => {
  return (
    <>
      <Sprite />
      <TopSection />
      <Available />
      <Homes />
    </>
  );
};

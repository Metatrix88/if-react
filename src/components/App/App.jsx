import React, {useState} from 'react';

import { Sprite } from '../Sprite';
import { Homes } from '../Homes';
import { TopSection } from '../TopSection';
import { Available } from '../Available';

import './App.scss';

import { homes } from '../Homes/config';

export const App = () => {

  const [hotels, setHotels] = useState(homes);

  return (
    <>
      <Sprite />
      <TopSection setHotels={setHotels} />
      <Available hotels={hotels} />
      <Homes />
    </>
  );
};

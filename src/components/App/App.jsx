import React from 'react';

// context
import { useAvailableContext } from '../../contexts/Available.context';

// components
import { Sprite } from '../Sprite';
import { Homes } from '../Homes';
import { TopSection } from '../TopSection';
import { Available } from '../Available';

// styles
import './App.scss';

export const App = () => {
  const { hotels } = useAvailableContext();

  return (
    <>
      <Sprite />
      <TopSection />
      {hotels.length > 0 && <Available />}
      <Homes />
    </>
  );
};

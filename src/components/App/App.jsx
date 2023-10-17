import React, { useState } from 'react';

// context
import { AvailableContextProvider } from '../../contexts/Available.context';

// components
import { Sprite } from '../Sprite';
import { Homes } from '../Homes';
import { TopSection } from '../TopSection';
import { Available } from '../Available';

// styles
import './App.scss';

export const App = () => {
  const [isAvailableVisible, setAvailableVisible] = useState(false);
  return (
    <>
      <Sprite />
      <AvailableContextProvider>
        <TopSection setAvailableVisible={setAvailableVisible} />
        {isAvailableVisible && <Available />}
      </AvailableContextProvider>
      <Homes />
    </>
  );
};

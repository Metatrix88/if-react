import React, { createContext, useContext, useState } from 'react';

const AvailableContext = createContext();

export const useAvailableContext = () => {
  return useContext(AvailableContext);
};

export const AvailableContextProvider = ({ children }) => {
  const [hotels, setHotels] = useState([]);

  return (
    <AvailableContext.Provider value={{ hotels, setHotels }}>
      {children}
    </AvailableContext.Provider>
  );
};

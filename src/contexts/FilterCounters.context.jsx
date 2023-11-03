import React, { createContext, useContext, useState } from 'react';

const FilterCountersContext = createContext();

export const useFilterCountersContext = () => {
  return useContext(FilterCountersContext);
};

export const FilterCountersContextProvider = ({ children }) => {
  const [adults, setAdults] = useState(1);
  const [rooms, setRooms] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [childrenAges, setChildrenAges] = useState(Array(10).fill(0));

  return (
    <FilterCountersContext.Provider
      value={{
        adults,
        setAdults,
        rooms,
        setRooms,
        childrenCount,
        setChildrenCount,
        childrenAges,
        setChildrenAges,
      }}
    >
      {children}
    </FilterCountersContext.Provider>
  );
};

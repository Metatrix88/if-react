import React, { createContext, useContext, useState } from 'react';

const FilterCountersContext = createContext();

export const useFilterCountersContext = () => {
  return useContext(FilterCountersContext);
};

export const FilterCountersContextProvider = ({ children }) => {
  const [adults, setAdults] = useState(1);

  return (
    <FilterCountersContext.Provider value={{ adults, setAdults }}>
      {children}
    </FilterCountersContext.Provider>
  )
}
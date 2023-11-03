import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const useFormContext = () => {
  return useContext(FormContext);
};

export const FormContextProvider = ({ children }) => {
  const [inputName, setInputName] = useState('');
  const [startDateMillis, setStartDateMillis] = useState(false);
  const [endDateMillis, setEndDateMillis] = useState(false);
  const [adultsQuantity, setAdultsQuantity] = useState(1);
  const [roomsQuantity, setRoomsQuantity] = useState(1);
  const [childrenQuantityAndAge, setChildrenQuantityAndAge] = useState('');

  return (
    <FormContext.Provider
      value={{
        inputName,
        setInputName,
        startDateMillis,
        setStartDateMillis,
        endDateMillis,
        setEndDateMillis,
        adultsQuantity,
        setAdultsQuantity,
        roomsQuantity,
        setRoomsQuantity,
        childrenQuantityAndAge,
        setChildrenQuantityAndAge,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

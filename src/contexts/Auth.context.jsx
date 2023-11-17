import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  return (
    <AuthContext.Provider
      value={{ userEmail, setUserEmail, userPassword, setUserPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};

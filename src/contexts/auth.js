import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isPassenger, setIsPassenger] = useState();

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isPassenger,
        setIsPassenger,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

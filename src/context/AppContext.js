import React, { createContext } from 'react';
import useInitialState from '../hooks/useInitialState';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>{children}</AppContext.Provider>
  );
};

export default AppProvider;

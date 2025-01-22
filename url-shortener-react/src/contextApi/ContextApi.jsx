import { createContext, useContext, useState } from 'react';

const ContextApi = createContext();

export const ContextProvider = ({ children }) => {
  const getJwt = localStorage.getItem('JWT_TOKEN')
    ? JSON.parse(localStorage.getItem('JWT_TOKEN'))
    : null;

  const [token, setToken] = useState(getJwt);

  const sendData = {
    token,
    setToken,
  };

  return <ContextApi.Provider value={sendData}>{children}</ContextApi.Provider>;
};

export const useStoreContext = () => {
  const context = useContext(ContextApi);

  if (!context) {
    throw new Error('useStoreContext must be used within a ContextProvider');
  }

  return context;
};

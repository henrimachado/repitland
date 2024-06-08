import React, { createContext, useEffect } from 'react';

import { LoggedUser } from '../services/models/LoggedUser';


interface IGlobalContext {
  title: string;
  setTitle: (value: string) => void;
  loggedUser: LoggedUser | null | undefined;
  setLoggedUser: (value: LoggedUser | null | undefined) => void;
}

export const GlobalContext = createContext({} as IGlobalContext);

export const GlobalStorage = ({ children } : any) => {
  const [title, setTitle] = React.useState<string>('');
  const [loggedUser, setLoggedUser] = React.useState<LoggedUser | null | undefined>(null);

  useEffect(() => {
    if(window.localStorage.getItem('loggedUser')) {
      setLoggedUser(JSON.parse(window.localStorage.getItem('loggedUser') as string));
    }
  }, []);

  return (
    <GlobalContext.Provider value={{ title, setTitle, loggedUser, setLoggedUser }}>
      {children}
    </GlobalContext.Provider>
  );
};

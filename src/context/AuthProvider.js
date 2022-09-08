import React, {
  createContext, useCallback, useContext, useMemo, useState,
} from 'react';

export const AuthContex = createContext({});
const useAuth = () => useContext(AuthContex);

const AuthProvider = ({ children }) => {
  const userData = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(
    userData || null,
  );

  const logIn = useCallback((newUser) => {
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
  }, []);

  const logOut = useCallback(() => {
    localStorage.removeItem('user');
    setUser(null);
  }, []);

  const providedDate = useMemo(() => ({
    logIn,
    logOut,
    user,
  }), [logIn, logOut, user]);

  return (
    <AuthContex.Provider value={providedDate}>{children}</AuthContex.Provider>
  );
};

export { AuthProvider, useAuth };

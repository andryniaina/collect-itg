// AuthContext.tsx
import React, { createContext, useState, ReactNode, useContext } from 'react';
// Define the context value type
interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  setToken: (token: string | null) => void;
  setIsAuth: (isAuth: boolean) => void;
}

const defaultAuthContext: AuthContextType = {
  isAuthenticated: false,
  token: null,
  setToken: () => { },
  setIsAuth: () => { }
};

// Create the context
const AuthContext = createContext<AuthContextType>(defaultAuthContext);
const useAuth = () => useContext(AuthContext);

// Provider component
const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setTokenState] = useState<string | null>(localStorage.getItem('token'));
  let [isAuthenticated, setIsAuth] = useState(!!localStorage.getItem('token'));

  const setToken = (token: string | null) => {
    setTokenState(token);
    localStorage.setItem('token', token ?? "");
    setIsAuth(!!token);
  }

  let value = { isAuthenticated, token, setToken, setIsAuth};

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };

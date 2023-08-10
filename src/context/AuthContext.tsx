import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { User } from '@/lib/validation/user';
import { getAuthToken } from '@/actions/auth';

type AuthContextType = {
  isAuth: boolean;
  setIsAuth: (val: boolean) => void;
  user: User | null;
  setUser: (val: User) => void;
};

const AuthContext: React.Context<AuthContextType> =
  createContext<AuthContextType>({
    isAuth: false,
    setIsAuth: () => {},
    user: null,
    setUser: () => {},
  });

export const useAuthContext = () => useContext(AuthContext);

interface IAuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = getAuthToken();
    if (isAuth === false && authToken) {
      setIsAuth(true);
      return;
    }

    if (location.pathname !== '/auth') {
      if (!isAuth) navigate('/auth', { replace: true });
    }
  }, [isAuth, location, navigate]);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

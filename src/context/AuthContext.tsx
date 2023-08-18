import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, userValidator } from '@/lib/validation/user';
import { getAuthToken, removeAuthToken } from '@/actions/auth';
import { useLocation, useNavigate } from 'react-router-dom';

import CONSTANTS from '@/config/constants';
import axios from 'axios';
import { getCurrentUser } from '@/api/auth';

type AuthContextType = {
  isAuth: boolean;
  setIsAuth: (val: boolean) => void;
  user: User | null;
  setUser: (val: User) => void;
  reload: () => void;
};

const AuthContext: React.Context<AuthContextType> =
  createContext<AuthContextType>({
    isAuth: false,
    setIsAuth: () => {},
    user: null,
    setUser: () => {},
    reload: () => {}
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

  const reload = () => {
    getCurrentUser().then((res) => {
      if (res.code === CONSTANTS.SUCCESS) {
        const curUser = userValidator.parse(res.data);
        setUser(curUser);
      } else {
        removeAuthToken();
        setIsAuth(false);
        delete axios.defaults.headers.common['Token'];
        console.log(res.message);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  useEffect(() => {
    const authToken = getAuthToken();
    if (authToken === null) {
      setIsAuth(false);
      setUser(null);
    }

    if (isAuth === false && authToken) {
      setIsAuth(true);
      axios.defaults.headers.common['Token'] = authToken;
      return;
    }

    if (location.pathname !== '/auth') {
      if (!authToken) navigate('/auth');
    }
  }, [isAuth, location, navigate]);

  useEffect(() => {
    if (isAuth === true && user === null) {
      console.log(axios.defaults.headers);
      console.log(isAuth);
      reload();
    }
  }, [isAuth, user])

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, user, setUser, reload }}>
      {children}
    </AuthContext.Provider>
  );
};

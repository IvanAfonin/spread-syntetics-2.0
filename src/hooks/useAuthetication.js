import { useEffect, useState } from 'react';
import { axiosInstance } from '../tools/axios';
import { LOCALSTORAGEKEYS } from '../constants/LocalStorageKeys';
import { useNavigate } from 'react-router';
import { PATH } from '../constants/path';
import { useSelector } from 'react-redux';

export const useAuthentication = () => {
  const accessToken = localStorage.getItem(LOCALSTORAGEKEYS.AUTH);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const [isAuthenticated, setAuthenticated] = useState(!!accessToken);

  useEffect(() => {
    if (user) {
      setAuthenticated(true);
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    }
  }, [user, setAuthenticated, axiosInstance]);

  const signOut = () => {
    localStorage.removeItem(LOCALSTORAGEKEYS.AUTH);
    setAuthenticated(false);
    navigate(PATH.HOME);
  };

  return { isAuthenticated, signOut };
};

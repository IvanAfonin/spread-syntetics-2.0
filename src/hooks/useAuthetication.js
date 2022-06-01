import { useEffect, useState } from 'react';
import { axiosInstance } from '../tools/axios';
import { LOCALSTORAGEKEYS } from '../constants/LocalStorageKeys';
import { useNavigate } from 'react-router';
import { PATH } from '../constants/path';

export const useAuthentication = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const accessToken = localStorage.getItem(LOCALSTORAGEKEYS.AUTH);
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      setAuthenticated(true);
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    }
  }, [accessToken]);

  const signOut = () => {
    localStorage.clear();
    setAuthenticated(false);
    navigate(PATH.HOME);
  };

  return { isAuthenticated, signOut };
};

import React, { useEffect } from 'react';
import { useAuthentication } from '../hooks/useAuthetication';
import { Outlet, useNavigate } from 'react-router';
import { PATH } from '../constants/path';
import { useWebsocket } from '../hooks/useWebsocket';

export const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthentication();
  const { init } = useWebsocket();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(PATH.HOME);
    } else {
      init();
    }
  }, []);

  return <Outlet />;
};

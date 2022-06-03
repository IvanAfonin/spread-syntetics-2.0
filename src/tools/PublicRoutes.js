import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { PATH } from '../constants/path';
import { useSelector } from 'react-redux';

export const PublicRoutes = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );
  useEffect(() => {
    if (isAuthenticated) {
      navigate(PATH.TOPS);
    }
  }, [isAuthenticated]);

  return <Outlet />;
};

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { LoginModal } from './LoginModal';
import { WorldMap } from './WorldMap';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getAccountThunk } from '../../api/auth/auth.thunk';
import { PATH } from '../../constants/path';
import { LOCALSTORAGEKEYS } from '../../constants/LocalStorageKeys';

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem(LOCALSTORAGEKEYS.AUTH);
  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate(PATH.TOPS);
    } else {
      dispatch(getAccountThunk(accessToken));
    }
  }, [isAuthenticated]);

  return (
    <LoginWrapper>
      <Header />
      <WorldMap />
      <LoginModal />
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  height: 100%;
  width: 100%;
  min-height: 600px;
  position: absolute;
  overflow: hidden;
`;

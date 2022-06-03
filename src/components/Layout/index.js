import React from 'react';
import { Header } from './Header';
import { Outlet } from 'react-router';

import styled from 'styled-components';

export const Layout = () => {
  return (
    <>
      <Header />
      <StyledContainer>
        <Outlet />
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  margin-top: ${(props) => props.theme.spacing(4)}px;
  margin-right: ${(props) => props.theme.spacing(7.5)}px;
  margin-bottom: ${(props) => props.theme.spacing(5)}px;
  margin-left: ${(props) => props.theme.spacing(7.5)}px;
`;

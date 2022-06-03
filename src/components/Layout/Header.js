import React from 'react';
import styled from 'styled-components';
import { CenterSection } from './components/CenterSection';
import { LeftSection } from './components/LeftSection';
import { RightSection } from './components/RightSection';

export const Header = () => {
  return (
    <HeaderContainer>
      <StyledContainer>
        <LeftSection />
        <CenterSection />
      </StyledContainer>
      <ProfileContainer>
        <RightSection />
      </ProfileContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  margin: 0px 24px;
  background: #202542;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 24px 24px;
  justify-content: space-between;
  padding: 0 36px;
`;

const StyledContainer = styled.div`
  display: flex;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

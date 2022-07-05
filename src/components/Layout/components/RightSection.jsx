import React from 'react';
import styled from 'styled-components';
import { ClientPingSVG } from '../../../assets/svgs/ServerPing';
import { useSelector } from 'react-redux';
import { logout } from '../../../slices/authSlice';
import { Avatar } from '../../Avatar';

export const RightSection = () => {
  const userName = useSelector((state) => state.auth.user.Email);
  const isAdmin = useSelector((state) => state.auth.user.IsAdmin);
  const imagePath = useSelector((state) => state.auth.user.ImagePath);
  const ping = useSelector((state) => state.auth.ping);

  const handleLogout = () => {
    logout();
  };

  return (
    <RightSectionStyled>
      <div>
        <NameContainerStyled>
          <Greeting>Hello,</Greeting>
          <NameStyled>{userName}</NameStyled>
        </NameContainerStyled>
        <div>
          {isAdmin ? (
            <SettingsStyled>Settings</SettingsStyled>
          ) : (
            <SettingsStyled onClick={handleLogout}>
              Logout
            </SettingsStyled>
          )}
        </div>
      </div>
      <div>
        <Avatar path={imagePath} email={userName}/>
      </div>
      <PingContainer>
        <ClientPingSVG />
        <PingText>{ping} ms</PingText>
      </PingContainer>
    </RightSectionStyled>
  );
};
const PingText = styled.p`
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  margin: 0 0 0 ${props => props.theme.spacing(1)}px;
`;

const PingContainer = styled.div`
  display: flex;
`;

const SettingsStyled = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  margin: 0;
  text-align: right;
  text-decoration: underline;
  cursor: pointer;

  @media screen and (max-width: 1380px) {
    font-size: 10px;
  }
`;

const NameStyled = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${props => props.theme.palette.secondary.main};
  margin: 0;
  
  @media screen and (max-width: 1380px) {
    font-size: 14px;
  }
`;

const Greeting = styled.p`
  font-size: 18px;
  font-weight: 300;
  margin: 0 ${props => props.theme.spacing(0.5)}px 0 0;

  @media screen and (max-width: 1380px) {
    font-size: 14px;
  }
`;

const NameContainerStyled = styled.div`
  display: flex;
`;

const RightSectionStyled = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${props => props.theme.spacing(4.75)}px;
`;


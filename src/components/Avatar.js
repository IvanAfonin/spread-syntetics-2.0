import React from 'react';
import styled from 'styled-components';
export const Avatar = ({ path, email }) => {
  if (path) {
    return <StyledImage src={path} />;
  }

  return <StyledPlaceholder>{email.slice(0, 1)}</StyledPlaceholder>;
};
const StyledImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50px;
  margin-left: 16px;
  margin-right: 24px;
`;

const StyledPlaceholder = styled.div`
  width: ${(props) => props.theme.spacing(6)}px;
  height: ${(props) => props.theme.spacing(6)}px;
  border-radius: 50%;
  background: linear-gradient(
    41.27deg,
    #11adb7 14.79%,
    #16f1ff 86.97%
  );
  text-align: center;
  line-height: 48px;
  font-size: 24px;
  text-transform: uppercase;
  overflow: hidden;
  padding-left: 2px;
  margin-left: 16px;
  margin-right: 24px;
`;

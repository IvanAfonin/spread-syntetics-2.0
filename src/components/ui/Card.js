import React from 'react';
import styled from 'styled-components';

export const Card = ({ children, ...props }) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};

const StyledCard = styled.div`
  background: ${(props) => props.theme.palette.primary.main};
  border-radius: 12px;
  padding: ${(props) => props.theme.spacing(2)}px;
`;

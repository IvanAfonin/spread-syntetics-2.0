import React from 'react';
import styled from 'styled-components';

export const Input = ({
  onChange,
  value,
  placeholder,
  backgroundImage,
  ...props
}) => {
  return (
    <CustomInput
      backgroundImage={backgroundImage}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      {...props}
    />
  );
};

const CustomInput = styled.input`
  color: ${(props) => props.theme.palette.text.primary};
  border: 0 solid ${(props) => props.theme.palette.text.primary};
  height: 40px;
  display: block;
  outline: none;
  margin-top: ${(props) => props.theme.spacing(2)}px;
  padding-left: ${(props) => props.theme.spacing(4.5)}px;
  border-radius: 4px;
  background: ${(props) => props.theme.palette.primary.light};
  background-repeat: no-repeat;
  background-position: 12px center;
  font-size: ${(props) => props.fontSize};
  line-height: 48px;
  background-image: ${(props) =>
    props.backgroundImage ? `url(${props.backgroundImage})` : 'none'};
`;

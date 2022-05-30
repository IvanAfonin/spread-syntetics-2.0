import React from 'react';
import styled from 'styled-components';

export const Input = ({
  onChange,
  value,
  placeholder,
  backgroundImage,
}) => {
  return (
    <CustomInput
      backgroundImage={backgroundImage}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

const CustomInput = styled.input`
  color: #ffffff;
  border: 0 solid white;
  height: 40px;
  display: block;
  outline: none;
  margin-top: 16px;
  padding-left: 36px;
  border-radius: 4px;
  background: #34395a;
  background-repeat: no-repeat;
  background-position: 12px center;
  font-size: ${(props) => props.fontSize};
  line-height: 48px;
  background-image: ${(props) =>
    props.backgroundImage ? `url(${props.backgroundImage})` : 'none'};
`;

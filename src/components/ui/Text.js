import React from 'react';
import styled from 'styled-components';

export const Text = ({
  value,
  fontSize = '16px',
  lineHeight = '24px',
  style,
  className,
  textAlign,
  fontWeight,
  margin,
  children,
}) => {
  return (
    <CustomText
      className={className}
      style={style}
      fontSize={fontSize}
      lineHeight={lineHeight}
      textAlign={textAlign}
      margin={margin}
      fontWeight={fontWeight}
    >
      {children || value}
    </CustomText>
  );
};

const CustomText = styled.p`
  font-size: ${(props) => props.fontSize};
  text-align: ${(props) => props.textAlign};
  line-height: ${(props) => props.lineHeight};
  margin: ${(props) => props.margin};
  font-weight: ${(props) => props.fontWeight};
  color: #ffffff;
  font-family: 'Ubuntu', serif;
`;

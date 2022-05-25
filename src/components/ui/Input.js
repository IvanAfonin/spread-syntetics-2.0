import React from 'react';
import styled from 'styled-components';

export const Input = ({ onChange, value, placeholder, backgroundImage }) => {
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
	background: ${(props) => (props.active ? '#546EE5' : '#34395A')};
	cursor: pointer;
	font-size: ${(props) => props.fontSize};
	text-align: center;
	transition: 0.3s all;
	line-height: 48px;
	border-radius: 4px;
	background-image: ${(props) =>
		props.backgroundImage ? `url(${props.backgroundImage})` : 'none'};
`;

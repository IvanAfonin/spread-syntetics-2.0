import React from 'react';
import styled from 'styled-components';

export const Button = ({
	children,
	text,
	onClick,
	active,
	fontSize = '16px',
	style,
	className,
}) => {
	return (
		<CustomButton
			className={className}
			style={style}
			onClick={onClick}
			active={active}
			fontSize={fontSize}
		>
			{children || text}
		</CustomButton>
	);
};

const CustomButton = styled.button`
	background: ${(props) => (props.active ? '#546EE5' : '#34395A')};
	cursor: pointer;
	font-size: ${(props) => props.fontSize};
	text-align: center;
	transition: 0.3s all;
	line-height: 48px;
	border-radius: 4px;
	color: #ffffff;
	border: none;
	font-family: 'Ubuntu', serif;
`;

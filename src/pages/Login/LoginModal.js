import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chooseMarket } from '../../slices/marketSlice';
import styled from 'styled-components';
import { Button } from '../../components/ui/Button';

export const LoginModal = () => {
	const market = useSelector((state) => state.market.country);
	const dispatch = useDispatch();

	const handleCloseModal = () => {
		dispatch(chooseMarket(''));
	};

	return (
		<Modal open={!!market}>
			<p>Login</p>
			<div>
				<p>Info Type</p>
				<div>
					<div>Box strategies</div>
					<div>Stock + option strategies</div>
				</div>
				<input />
				<input />
				<ButtonContainer>
					<Button text="Apply" active />
					<Button onClick={handleCloseModal} text="Cancel" />
				</ButtonContainer>
			</div>
		</Modal>
	);
};

const Modal = styled.div`
	display: ${(props) => (props.open ? 'block' : 'none')};
	width: 600px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	transition: 1.5s all;
	padding: 24px;
	background: ${(props) => props.theme.palette.primary.main};
`;

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

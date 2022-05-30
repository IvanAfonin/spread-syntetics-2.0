import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chooseMarket } from '../../slices/marketSlice';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import lockIcon from '../../assets/images/lockIcon.png';
import usernameIcon from '../../assets/images/usernameIcon.png';

import styled from 'styled-components';
import { Text } from '../../components/ui/Text';
import { Switcher } from '../../components/ui/Switcher';

export const LoginModal = () => {
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });
  const market = useSelector((state) => state.market.country);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(chooseMarket(''));
  };

  const handleLoginInput = (key, value) => {
    setLoginForm({ ...loginForm, [key]: value });
  };

  return (
    <Modal open={!!market}>
      <LoginText>Login</LoginText>
      <div>
        <Text>Info Type</Text>
        <Switcher />
        <InputContainer>
          <Input
            value={loginForm.username}
            onChange={(e) =>
              handleLoginInput('username', e.target.value)
            }
            placeholder="Username"
            backgroundImage={usernameIcon}
          />
          <Input
            value={loginForm.password}
            onChange={(e) =>
              handleLoginInput('password', e.target.value)
            }
            placeholder="Password"
            backgroundImage={lockIcon}
          />
        </InputContainer>
        <ErrorText />

        <ButtonContainer>
          <ApplyButton text="Apply" active />
          <Button onClick={handleCloseModal} text="Cancel" />
        </ButtonContainer>
      </div>
    </Modal>
  );
};

const Modal = styled.div`
  //display: ${(props) => (props.open ? 'block' : 'none')};
  display: block;
  width: 600px;
  position: absolute;
  top: ${(props) => (props.open ? '50%' : '150%')};
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 1.5s all;
  padding: 24px;
  background: ${(props) => props.theme.palette.primary.main};
  z-index: 3;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ErrorText = styled.p`
  color: #eb001b;
  margin-top: 16px;
  text-align: center;
  margin-bottom: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ApplyButton = styled(Button)`
  margin: 16px 0;
`;

const LoginText = styled.h3`
  font-size: 24px;
  text-align: center;
  line-height: 32px;
  font-weight: 400;
`;

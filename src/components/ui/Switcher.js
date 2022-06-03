import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { chooseStrategy } from '../../slices/marketSlice';
import { STRATEGY } from '../../constants/Strategy';

export const Switcher = () => {
  const strategy = useSelector((state) => state.market.strategy);
  const dispatch = useDispatch();

  const handleStrategyChange = (value) => {
    dispatch(chooseStrategy(value));
  };

  return (
    <CustomSwitcher>
      <Option
        isActive={strategy === STRATEGY.BOX}
        onClick={() => handleStrategyChange(STRATEGY.BOX)}
      >
        Box strategies
      </Option>
      <Option
        isActive={strategy === STRATEGY.STOCKANDOPTIONS}
        onClick={() => handleStrategyChange(STRATEGY.STOCKANDOPTIONS)}
      >
        Stock + options strategies
      </Option>
    </CustomSwitcher>
  );
};

const CustomSwitcher = styled.div`
  display: flex;
`;

const Option = styled.div`
  text-align: center;
  cursor: pointer;
  background-color: ${(props) =>
    props.isActive ? '#546EE5' : '#34395A'};
  width: 50%;
  font-size: 16px;
  transition: 0.3s all;
  line-height: 48px;
  border-radius: 4px;
`;

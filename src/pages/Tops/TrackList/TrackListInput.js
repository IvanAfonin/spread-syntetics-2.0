import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Input } from '../../../components/ui/Input';
import { changeTracklist } from '../../../slices/topSlice';

export const TracklistInput = ({
  value,
  placeholder,
  index,
  changeableValue,
  tracklistType,
}) => {
  const dispatch = useDispatch();
  return (
    <StyledInput
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) =>
        dispatch(
          changeTracklist({
            index: index,
            value: e.target.value,
            changeableValue: changeableValue,
            tracklistType: tracklistType,
          })
        )
      }
    />
  );
};

const StyledInput = styled(Input)`
  margin: 0;
  padding: 0;
  height: ${(props) => props.theme.spacing(3)}px;
  padding-left: ${(props) => props.theme.spacing(1)}px;
  line-height: 0;
  width: 100%;
`;

import React from 'react';
import { useWebsocket } from '../../hooks/useWebsocket';

export const Header = () => {
  const { currentPing } = useWebsocket();
  return <>{currentPing} ping</>;
};

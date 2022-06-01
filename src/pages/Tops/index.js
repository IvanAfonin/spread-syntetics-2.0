import React, { useEffect } from 'react';
import { Header } from '../../components/Layout/Header';
import { useWebsocket } from '../../hooks/useWebsocket';

export const Tops = () => {
  const { sendWSMessage, currentPing } = useWebsocket();

  useEffect(() => {
    if (currentPing) {
      sendWSMessage({
        disable_symbols: {},
        expiration_date: '220527',
        first_type: { page: 'SO', type: 'long', formula: 'market' },
        second_type: { page: 'SO', type: 'short', formula: 'market' },
      });
    }
  }, [currentPing]);

  return (
    <>
      <Header />
    </>
  );
};

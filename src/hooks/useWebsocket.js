import { LOCALSTORAGEKEYS } from '../constants/LocalStorageKeys';
import { useState } from 'react';
import { WEBSOCKETMESSAGES } from '../constants/WebsocketMessages';

const ws = new WebSocket(process.env.REACT_APP_BACKEND_WS_API);
const pingWS = new WebSocket(
  process.env.REACT_APP_BACKEND_WS_PING_API
);

export const useWebsocket = () => {
  let previousDate = '';
  const [message, setMessage] = useState();
  const [currentPing, setCurrentPing] = useState();

  const init = () => {
    pingWS.addEventListener('open', () => {
      previousDate = new Date().getTime();
      pingWS.send(WEBSOCKETMESSAGES.CHECKPING);
    });

    pingWS.addEventListener('message', () => {
      setCurrentPing(new Date().getTime() - previousDate);
      pingWS.send(WEBSOCKETMESSAGES.CHECKPING);
      previousDate = new Date().getTime();
    });

    ws.addEventListener('open', () => {
      ws.send(localStorage.getItem(LOCALSTORAGEKEYS.AUTH));
    });

    ws.addEventListener('message', (event) => {
      setMessage(JSON.parse(event.data));
    });
  };

  const sendWSMessage = (value) => {
    ws.send(JSON.stringify(value));
  };

  return { sendWSMessage, message, currentPing, init };
};

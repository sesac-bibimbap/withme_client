import { io } from 'socket.io-client';

export const socket = io(`${import.meta.env.VITE_BASE_WS_URL}`, {
  autoConnect: false,
  transports: ['websocket'],
});

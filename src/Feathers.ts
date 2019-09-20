import io from 'socket.io-client';
import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';

const socket = io(process.env.REACT_APP_API_ENDPOINT);
const client = feathers();

client.configure(socketio(socket));

export const ReadingService = client.service('reading');

export default client;

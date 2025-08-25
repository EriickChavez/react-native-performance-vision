import io from 'socket.io-client';

let socket: any = null;

export const connectToMonitor = (serverUrl: string) => {
  if (socket) return;

  socket = io(serverUrl, {
    transports: ['websocket'],
    autoConnect: true,
  });

  socket.on('connect', () => {
    console.log(`🔗 [rnpv] Conectado a ${serverUrl}`);
  });

  socket.on('disconnect', () => {
    console.log('🔌 [rnpv] Desconectado');
  });
};

export const trackRender = (name: string, file?: string) => {
  if (!socket) return;

  socket.emit('component:render', {
    name,
    file: file?.replace(/^.*[/\\]src[/\\]/, 'src/') || 'unknown',
    timestamp: Date.now(),
  });
};